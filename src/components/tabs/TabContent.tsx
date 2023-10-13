import ModemItem from "../sites/ModemItem"
import ModemDeviceItem from "../sites/ModemDeviceItem"

function TabContent() {
  return (
    <div className="overflow-y-auto no-scrollbar">
      {searchModemsArr.length
        ? searchModemsArr.map((item, index) => (
            <ModemItem key={index} id={item.id} modName={item.name}>
              {devicesArr.map((devItem, i) => (
                <ModemDeviceItem
                  key={i}
                  id={devItem.id}
                  devName={devItem.devName}
                />
              ))}
            </ModemItem>
          ))
        : "No results"}
    </div>
  )
}

export default TabContent
