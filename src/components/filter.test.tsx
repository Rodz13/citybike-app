import React from 'react'
import { render, screen } from '@testing-library/react'
import Filter from './filter'

describe('Filter', () => {
  it('renders the component', () => {
    render(
      <Filter
        filterBy={undefined}
        onFilterChange={jest.fn()}
        numberOfStations={2}
      />
    )

    expect(screen.getByText('Show Empty Slots')).toBeInTheDocument()
    expect(screen.getByText('Show Free Bikes')).toBeInTheDocument()
    expect(screen.getByText('Stations: 2')).toBeInTheDocument()
  })
})
