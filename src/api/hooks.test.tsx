import { render, waitFor } from '@testing-library/react'
import { useNetworkDetails, useNetworksList } from './hooks'
import { NetworkDetails, NetworkPreview } from '../types'
import * as apiModule from './api'
import { getDummyNetworkDetails, getDummyNetworksList } from '../test-helpers'

describe('useNetworksList', () => {
  it('returns first null and then the fetched networks', async () => {
    const fetchedNetworksList = getDummyNetworksList()
    const spyOnFetchNetworksList = jest.spyOn(apiModule, 'fetchNetworksList').mockResolvedValue(fetchedNetworksList)
    let networks: NetworkPreview[] | null

    const TestComponent = () => {
      networks = useNetworksList()
      return null
    }
    render(<TestComponent />)

    await waitFor(() => {
      expect(networks).toBe(null)
    })
    await waitFor(() => {
      expect(spyOnFetchNetworksList).toHaveBeenCalledTimes(1)
    })
    await waitFor(() => {
      expect(networks).toEqual(fetchedNetworksList)
    })
  })
})

describe('useNetworkDetails', () => {
  it('returns first null and then the fetched network details', async () => {
    const fetchedNetworkDetails = getDummyNetworkDetails()
    const spyOnFetchNetworksList = jest.spyOn(apiModule, 'fetchNetworkDetails').mockResolvedValue(fetchedNetworkDetails)
    let network: NetworkDetails | null

    const TestComponent = () => {
      network = useNetworkDetails('1')
      return null
    }
    render(<TestComponent />)

    await waitFor(() => {
      expect(network).toBe(null)
    })
    await waitFor(() => {
      expect(spyOnFetchNetworksList).toHaveBeenCalledTimes(1)
    })
    await waitFor(() => {
      expect(network).toEqual(fetchedNetworkDetails)
    })
  })
})
