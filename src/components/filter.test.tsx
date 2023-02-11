import React from 'react'
import { render, screen } from '@testing-library/react'
import Filter from './filter'

describe('Filter', () => {
  it('renders the component', () => {
    render(
      <Filter
        filterBy={undefined}
        onFilterChange={jest.fn()}
      />
    )

    expect(screen.getByText('Show Empty Slots')).toBeInTheDocument()
    expect(screen.getByText('Show Free Bikes')).toBeInTheDocument()
  })
})
