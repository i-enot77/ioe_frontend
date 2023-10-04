import { useState } from "react"
import TimezoneSelect from "react-timezone-select"

export const TimezonePicker = () => {
  const [selectedTimezone, setSelectedTimezone]: any = useState({})

  return (
    <div>
      <p className="text-sm text-black mb-1">Timezone</p>
      <div className="select-wrapper text-sm">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      <div>{/* <pre>{JSON.stringify(selectedTimezone, null, 2)}</pre> */}</div>
    </div>
  )
}
