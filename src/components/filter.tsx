import { Button } from '@mui/material'
import { FilterBy } from '../types'

interface FilterProps {
    filterBy: FilterBy | undefined
    onFilterChange: (value: FilterBy) => void
    numberOfStations: number
}

const Filter = ({ filterBy, onFilterChange, numberOfStations }: FilterProps) => {

  return (
    <div>
      <h2>Stations: {numberOfStations}</h2>
      <div>
        <Button
          variant={filterBy === 'empty_slots' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onFilterChange('empty_slots')}
        >
            Show Empty Slots
        </Button>
        <Button
          variant={filterBy === 'free_bikes' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onFilterChange('free_bikes')}
        >
            Show Free Bikes
        </Button>
        {filterBy && (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onFilterChange(null)}
          >
              Unselect Filter
          </Button>
        )}
      </div>
    </div>
  )
}

export default Filter
