import { render, screen } from '@testing-library/react'
import { Station } from '../types'
import StationsList from './stations-list'

describe('StationsList', () => {
  it('renders a list of stations', () => {
    const stations: Station[] = [
      {
        id: '1',
        name: 'Impianti Sportivi',
        emptySlots: 3,
        freeBikes: 7,
      },
      {
        id: '2',
        name: 'Vittoria',
        emptySlots: 6,
        freeBikes: 4,
      },
    ]

    render(<StationsList stations={stations} />)

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(stations.length)

    for (const { name } of stations) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders message if no stations in the list', () => {
    render(<StationsList stations={[]} />)
    expect(screen.getByText('No stations in this network yet.')).toBeInTheDocument()
  })
})
