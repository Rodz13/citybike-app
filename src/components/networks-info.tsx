
interface NetworksDetailedInfoProps {
    emptySlots: number
    freeBikes: number
    timestamp: string
  }

const NetworksDetailedInfo = ({ emptySlots, freeBikes, timestamp }: NetworksDetailedInfoProps) => {
  const dateParse = new Date(timestamp).toLocaleDateString('en-GB')

  return (
    <>
      Free bikes: {freeBikes} | Empty slots: {emptySlots} | Updated at: {dateParse}
    </>
  )
}

export default NetworksDetailedInfo
