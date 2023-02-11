import { LocationOn} from '@mui/icons-material'
import { NetworkLocation } from '../types'

const NetworksLocation = ({ city, country }: NetworkLocation) => {
  return (
    <>
      <LocationOn sx={{ mr: 0.5 }} fontSize="inherit" />
      {city}, {country}
    </>
  )
}

export default NetworksLocation
