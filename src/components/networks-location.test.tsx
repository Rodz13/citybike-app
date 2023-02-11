import { render, screen } from '@testing-library/react'
import NetworksLocation from './networks-location'

describe('NetworksLocation', () => {
      
  it('renders location information with a location icon', () => {
          
    render(
      <NetworksLocation city={'Tallinn'} country={'EE'} />
    )

    expect(screen.getByTestId('LocationOnIcon')).toBeInTheDocument()
    expect(screen.getByText(`${'Tallinn'}, ${'EE'}`)).toBeInTheDocument()
  })
})
