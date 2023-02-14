import { useState } from 'react'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import Filter from '../components/filter'
import NetworkNotFoundAlert from '../components/network-not-found-alert'
import StationsList from '../components/stations-list'
import { useNetworkDetails } from '../api/hooks'
import { FilterBy } from '../types'

interface NetworkDetailsProps {
  networkId: string
}

const NetworkDetails = ({ networkId }: NetworkDetailsProps) => {
  const network = useNetworkDetails(networkId)

  const [filterBy, setFilterBy] = useState<FilterBy>()

  const filteredStations = network?.stations.filter(
    (station) =>
      !filterBy ||
      (filterBy === 'empty_slots' && station.emptySlots > 0) ||
      (filterBy === 'free_bikes' && station.freeBikes > 0)
  ) || []

  const handleFilterChange = (value: FilterBy) => {
    setFilterBy(value)
  }

  return network && (
    <>
      <Header title={network?.name} />
      <Filter filterBy={filterBy} onFilterChange={handleFilterChange} numberOfStations={filteredStations.length}/>
      <StationsList stations={filteredStations} />
    </>
  )
}

const NetworkDetailsView = () => {
  const { networkId } = useParams()

  return (
    <Container maxWidth='md'>
      {networkId ? (
        <NetworkDetails networkId={networkId} />
      ) : (
        <NetworkNotFoundAlert />
      )}
    </Container>
  )
}

export default NetworkDetailsView
