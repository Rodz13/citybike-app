import { Card, List, ListItem, ListItemText, Typography } from '@mui/material'
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
            <ListItemText primary={station.name} />
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
