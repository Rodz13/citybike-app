import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import NetworkNotFoundAlert from '../components/network-not-found-alert'
import StationsList from '../components/stations-list'
import { useNetworkDetails } from '../api/hooks'

interface NetworkDetailsProps {
  networkId: string
}

const NetworkDetails = ({ networkId }: NetworkDetailsProps) => {
  const network = useNetworkDetails(networkId)

  console.log('this newto', network);

  return network && (
    <>
      <Header title={network?.name} />
      <StationsList stations={network.stations} />
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
