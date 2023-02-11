import { Card, List, ListItem, ListItemText, Typography } from '@mui/material'
import NetworksDetailedInfo from './networks-info'
import { Station } from '../types'

interface StationsListProps {
  stations: Station[]
}

const StationsList = ({ stations }: StationsListProps) => (
  <Card>
    {stations.length ? (
      <List>
        {stations.map((station) => (
          <ListItem key={station.id}>
            <ListItemText 
              primary={station.name} 
              secondary={
                <NetworksDetailedInfo
                  freeBikes={station.freeBikes}
                  emptySlots={station.emptySlots}
                  timestamp={station.timestamp!} />
              }
            />
          </ListItem>
        ))}
      </List>
    ) : (
      <Typography variant='body1' m={2}>
        No stations in this network yet.
      </Typography>
    )}
  </Card>
)

export default StationsList
