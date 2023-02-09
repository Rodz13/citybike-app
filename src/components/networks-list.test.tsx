import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NetworkPreview } from '../types'
import NetworksList from './networks-list'

const networks: NetworkPreview[] = [
  { id: '1', name: 'Velobike' },
  { id: '2', name: 'Bysykkel' },
]

describe('NetworksList', () => {
  it('renders a list of networks', () => {
    render(
      <BrowserRouter>
        <NetworksList networks={networks} />
      </BrowserRouter>
    )

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(networks.length)
  })

  it('renders a link for each network', () => {
    render(
      <BrowserRouter>
        <NetworksList networks={networks} />
      </BrowserRouter>
    )

    for (const { id, name } of networks) {
      expect((screen.getByRole('link', { name }) as HTMLAnchorElement).href).toContain(`/network/${id}`)
    }
  })
})
