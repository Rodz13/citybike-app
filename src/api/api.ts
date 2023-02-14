import axios from 'axios'
import { NetworkDetails, NetworkPreview, Station } from '../types'

const BASE_URL = 'https://api.citybik.es/v2'

interface ResponseStation {
  id: string,
  name: string,
  empty_slots: number
  free_bikes: number
  timestamp: string
}

export async function fetchNetworksList(): Promise<NetworkPreview[] | false> {
  try {
    const response = await axios.get(`${BASE_URL}/networks`, {
      params: {
        fields: 'id,name,location',
      },
    })
    const networksList = response.data?.networks
    if (networksList && networksList.length) {
      return networksList
    } else {
      console.error('Unexpected API response format.')
    }
  } catch (error) {
    console.error('Could not fetch network list from API.', error)
  }
  return false
}

export async function fetchNetworkDetails(networkId: string): Promise<NetworkDetails | false> {
  try {
    const response = await axios.get(`${BASE_URL}/networks/${networkId}`, {
      params: {
        fields: 'name,location,stations',
      },
    })
    const network = response.data?.network
    if (network) {
      return {
        ...network,
        stations: network.stations.map(getStationFromResponseStation),
      }
    } else {
      console.error('Unexpected API response format.')
    }
  } catch (error) {
    console.error('Could not fetch network details from API.', error)
  }
  return false
}

function getStationFromResponseStation(responseStation: ResponseStation): Station {
  const { id, name, empty_slots, free_bikes, timestamp } = responseStation
  return {
    id,
    name,
    emptySlots: empty_slots,
    freeBikes: free_bikes,
    timestamp,
  }
}
