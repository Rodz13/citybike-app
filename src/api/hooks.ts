import { useEffect, useState } from 'react'
import { fetchNetworkDetails, fetchNetworksList } from './api'
import { NetworkDetails, NetworkPreview } from '../types'

export function useNetworksList(): NetworkPreview[] | null {
  const [networks, setNetworks] = useState<NetworkPreview[] | null>(null)

  useEffect(() => {
    fetchNetworksList().then((networks) => {
      if (networks) {
        setNetworks(networks)
      }
    })
  }, [])

  return networks
}

export function useNetworkDetails(networkId: string): NetworkDetails | null {
  const [network, setNetwork] = useState<NetworkDetails | null>(null)

  useEffect(() => {
    if (networkId) {
      fetchNetworkDetails(networkId).then((network) => {
        if (network) {
          setNetwork(network)
        }
      })
    }
  }, [networkId])

  return network
}
