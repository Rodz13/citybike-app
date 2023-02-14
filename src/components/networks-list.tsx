import { Card, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { FixedSizeList as VirtualizedList } from 'react-window'
import { Link } from 'react-router-dom'
import { NetworkPreview } from '../types'
import NetworksLocation from './networks-location'

interface NetworksListProps {
  networks: NetworkPreview[]
}

const NetworksList = ({ networks }: NetworksListProps) => (
  <Card data-testid='network-list'>
    <VirtualizedList
      height={700}
      itemCount={networks.length}
      itemSize={64}
      width="100%">
      {({ index, style }) => {
        const network = networks[index]
        return (
          <ListItem disablePadding key={network.id} style={style} data-testid='network-list-item'>
            <ListItemButton component={Link} to={`/network/${network.id}`}>
              <ListItemText 
                primary={network.name}
                secondary={
                  <NetworksLocation 
                    city={network.location!.city}
                    country={network.location!.country}/>
                }/>
            </ListItemButton>
          </ListItem>
        )}}
    </VirtualizedList>
  </Card>
)

export default NetworksList
