import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import * as hooksModule from '../api/hooks'
import { getDummyNetworksList } from '../test-helpers'
import NetworksListView from './networks-list-view'

afterEach(() => {
  jest.clearAllMocks()
})

describe('NetworksListView', () => {
  it('renders header and list', () => {
    const spyOnUseNetworksList = jest.spyOn(hooksModule, 'useNetworksList').mockReturnValue(getDummyNetworksList())

    render(
      <BrowserRouter>
        <NetworksListView />
      </BrowserRouter>
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(spyOnUseNetworksList).toHaveBeenCalled()
  })
})
