import { NetworkDetails, NetworkPreview } from './types'

/** Should be compatible with getDummyNetworksList */
export const getDummyNetworksListApiResponse = () => ({
  networks: [
    { id: 'velib', name: 'Vélib', location: { city: 'Paris', country: 'FR' } },
  ],
})

/** Should be compatible with getDummyNetworksListApiResponse */
export const getDummyNetworksList = (): NetworkPreview[] => [
  { id: 'velib', name: 'Vélib', location: { city: 'Paris', country: 'FR' } },
]

/** Should be compatible with getDummyNetworkDetails */
export const getDummyNetworkDetailsApiResponse = () => ({
  network: {
    name: 'Vélib',
    location: {
      city: 'Paris',
      country: 'FRA',
    },
    stations: [
      {
        id: 'qf87fhg234',
        name: '00903 - QUAI MAURIAC  / PONT DE BERCY',
        empty_slots: 19,
        free_bikes: 1,
      },
    ],
  },
})

/** Should be compatible with getDummyNetworkDetailsApiResponse */
export const getDummyNetworkDetails = (): NetworkDetails => ({
  name: 'Vélib',
  location: { city: 'Paris', country: 'FRA' },
  stations: [
    {
      id: 'qf87fhg234',
      name: '00903 - QUAI MAURIAC  / PONT DE BERCY',
      emptySlots: 19,
      freeBikes: 1,
    },
  ],
})
