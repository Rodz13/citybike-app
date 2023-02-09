import { Alert, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NetworkNotFoundAlert = () => (
  <Alert
    severity='error'
    action={
      <Button component={Link} to={'/'} color="inherit" size="small">
        See all networks
      </Button>
    }
  >
    Sorry, we don't have information about this network.
  </Alert>
)

export default NetworkNotFoundAlert
