import { Container } from '@mui/material'
import Header from '../components/header'
import NetworksList from '../components/networks-list'
import { useNetworksList } from '../api/hooks'

const NetworksListView = () => {
  const networks = useNetworksList()

  return (
    <Container maxWidth='md' data-testid='network-list-view'>
      <Header
        primary
        title='City Bike Networks'
        subtitle={`${networks?.length} bicycle sharing networks worldwide`}
      />
      {networks && <NetworksList networks={networks} />}
    </Container>
  )
}

export default NetworksListView
