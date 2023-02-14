import { render, screen } from '@testing-library/react'
import reactRouterDom from 'react-router-dom'
import * as hooksModule from '../api/hooks'
import { getDummyNetworkDetails } from '../test-helpers'
import NetworkDetailsView from './network-details-view'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}))

afterEach(() => {
  jest.clearAllMocks()
})

describe('NetworkDetailsView', () => {
  it('renders header and list', () => {
    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({ networkId: '28o4hi' })
    const spyOnUseNetworkDetails = jest.spyOn(hooksModule, 'useNetworkDetails').mockReturnValue(getDummyNetworkDetails())

    render(<NetworkDetailsView />)

    expect(screen.getByText('Vélib')).toBeInTheDocument()
    expect(screen.getByText('Stations: 1')).toBeInTheDocument()
    expect(screen.getByText('Show Empty Slots')).toBeInTheDocument()
    expect(screen.getByText('Show Free Bikes')).toBeInTheDocument()
    expect(spyOnUseNetworkDetails).toHaveBeenCalled()
  })

  it('shows alert if no network id available', () => {
    jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({})

    render(
      <reactRouterDom.BrowserRouter>
        <NetworkDetailsView />
      </reactRouterDom.BrowserRouter>
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
