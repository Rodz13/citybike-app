export type NetworkLocation = {
  city: string
  country: string
}

export type Station = {
  id: string
  name: string
  emptySlots: number
  freeBikes: number
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
