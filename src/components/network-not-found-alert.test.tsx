import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NetworkNotFoundAlert from './network-not-found-alert'

describe('NetworkNotFoundAlert', () => {
  it('renders alert and button', () => {
    render(
      <BrowserRouter>
        <NetworkNotFoundAlert />
      </BrowserRouter>
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
