export type NetworkLocation = {
  city: string
  country: string
}

export type Station = {
  id: string
  name: string
  emptySlots: number
  freeBikes: number
  timestamp?: string
}

export type NetworkPreview = {
  id: string
  name: string
  location?: NetworkLocation
}

export type NetworkDetails = {
  name: string
  location: NetworkLocation
  stations: Station[]
}

export type FilterBy = 'free_bikes' | 'empty_slots' | null
