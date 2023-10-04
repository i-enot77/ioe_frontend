import image from "../../assets/img/ioe_logo.svg"
import Form from "../../forms/Form"
import Filter from "./Filter"
import SearchInputItem from "../../forms/SearchInputItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBell,
  faCircleUser,
  faSortDown,
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import { useState, useRef } from "react"
import Dropdown from "../Dropdown"
import { dropAccount } from "../../assets/data/navData"
import { DisableButton } from "../DisableButton"
import { Link } from "react-router-dom"
import useOutsideClick from "../../hooks/useOutsideClick"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { searchRequest } from "../../app/reducers/search"
import useDebounce from "../../hooks/useDebounce"

const style = {
  inputClass: `bg-light-gray placeholder:text-text-color text-xs ml-4 w-[250px] h-[80%] outline-none`,
  dropItem: `pr-20 bg-white py-3 shadow-md pl-7 flex flex-col items-start text-xs absolute top-16 right-6`,
}

function NavTop() {
  const [isDropAccount, setIsDropAccount] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const debouncedSearchValue = useDebounce(inputValue, 500)
  const dispatch = useAppDispatch()
  const filterBy = useAppSelector((state) => state.search.filterBy)

  const refItem = useRef<HTMLDivElement | null>(null)
  useOutsideClick(refItem, isDropAccount, () => {
    setIsDropAccount(false)
  })

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(searchRequest({ filter: filterBy, search: debouncedSearchValue }))
    setInputValue("")
    console.log(filterBy, debouncedSearchValue)
  }

  return (
    <div className="w-full border-b-[1px] border-b-[#e5e7eb] py-[18px] bg-white">
      <div className="max-w-[1472px] px-4 mx-auto flex justify-between items-center relative">
        <img src={image} alt="logo" />

        <div className="flex relative items-center justify-between bg-light-gray max-w-[500px] h-[50px] rounded-md">
          <Form submit={handleSubmit}>
            <FontAwesomeIcon className="pl-4" icon={faMagnifyingGlass} />

            <SearchInputItem
              inputClass={style.inputClass}
              type={"search"}
              inputName={"search"}
              inputValue={inputValue}
              handleChange={changeInput}
              placeholder={"Search by users, sites, jobs, or devices"}
            />
          </Form>
          <Filter />
        </div>

        <div className="flex">
          <div className="text-center pr-8">
            <FontAwesomeIcon icon={faBell} size="xl" />
            <p className="text-xs">Notifications</p>
          </div>

          <div ref={refItem}>
            <div
              className="text-center"
              onClick={() => {
                setIsDropAccount(!isDropAccount)
                console.log(isDropAccount)
              }}
            >
              <div>
                <FontAwesomeIcon
                  className="pr-1"
                  icon={faCircleUser}
                  size="xl"
                />
                <FontAwesomeIcon icon={faSortDown} />
              </div>
              <p className="text-xs">Account</p>
            </div>

            <Dropdown drop={isDropAccount} dropClassName={style.dropItem}>
              {dropAccount.map((item, index) => (
                <Link
                  key={index}
                  to={item.src}
                  className="flex items-center pb-2.5 last:pb-0"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span className="pl-3 text-xs">{item.content}</span>
                </Link>
              ))}
              <DisableButton>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <span className="pl-3 text-xs">Sign out</span>
              </DisableButton>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavTop
