
interface NetworksDetailedInfoProps {
    emptySlots: number
    freeBikes: number
    timestamp: string
  }

const NetworksDetailedInfo = ({ emptySlots, freeBikes, timestamp }: NetworksDetailedInfoProps) => {
  const date = new Date(timestamp)
  
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const formattedDate = `${day}/${month}/${year}`
  const formattedTime = `${hours}:${minutes}:${seconds}`

  return (
    <>
      Free bikes: {freeBikes} | Empty slots: {emptySlots} | Updated at {formattedTime} on {formattedDate}
    </>
  )
}

export default NetworksDetailedInfo
