import { Card, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { NetworkPreview } from '../types'

interface NetworksListProps {
  networks: NetworkPreview[]
}

const NetworksList = ({ networks }: NetworksListProps) => (
  <Card>
    <List>
      {networks.map((network) => (
        <ListItem disablePadding key={network.id}>
          <ListItemButton component={Link} to={`/network/${network.id}`}>
            <ListItemText primary={network.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Card>
)

export default NetworksList
