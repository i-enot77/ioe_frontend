import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { navItems, dropDevices } from "../../assets/data/navData"
import ListItem from "./ListItem"
import Dropdown from "../Dropdown"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import useOutsideClick from "../../hooks/useOutsideClick"

const style = {
  dropItem: `pr-7 bg-white py-3 shadow-md pl-7 flex flex-col items-start text-xs`,
}

function NavBottom() {
  const [isDrop, setIsDrop] = useState(false)
  const devicesRef = useRef<HTMLSpanElement | null>(null)

  useOutsideClick(devicesRef, isDrop, () => setIsDrop(false))
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto">
        <ul className="relative max-w-fit flex items-center justify-start">
          {navItems.map((item, index) => (
            <li
              className="text-[#808080] text-[12px] ml-11 py-3 px-4 hover:bg-light-gray hover:rounded hover:text-black duration-200"
              key={index}
            >
              <ListItem listData={item} />
            </li>
          ))}
          <span ref={devicesRef}>
            <li className="text-[#808080] text-[12px] align-middle ml-11 py-2.5 px-4 hover:bg-light-gray hover:rounded hover:text-black duration-200">
              <Link to={"/devices"}>
                <span className=" pr-1.5">Devices</span>
              </Link>
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faSortDown}
                onClick={() => setIsDrop(!isDrop)}
              />
            </li>
            <li className="absolute top-[100%] -right-14">
              <Dropdown drop={isDrop} dropClassName={style.dropItem}>
                {dropDevices.map((item, index) => (
                  <Link
                    key={index}
                    to={item.src}
                    className="flex items-center pb-2.5 last:pb-0"
                  >
                    <span className="pl-3 text-xs">{item.content}</span>
                  </Link>
                ))}
              </Dropdown>
            </li>
          </span>
        </ul>
      </div>
    </div>
  )
}

export default NavBottom
