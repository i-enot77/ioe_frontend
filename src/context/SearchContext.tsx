import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { FC } from "react"
import { ChildrenProp } from "../components/types/index"
import { SearchContextTypes } from "./types/searchContext"

export const SearchItemContext = createContext<SearchContextTypes>(
  {} as SearchContextTypes
)

export const SearchContext: FC<ChildrenProp> = ({ children }: ChildrenProp) => {
  const [filterBy, setFilterBy] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [searchValue, setSearchValue] = useState("")

  const [isFilterDrop, setIsFilterDrop] = useState(false)
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchValue(inputValue)
    setInputValue("")
  }
  //fetching data
  useEffect(() => {
    const fetchData = async () => {
      const splitData = searchValue.split(":")
      if (splitData.length !== 2) {
        console.log("Nieprawidłowy format danych wyszukiwania")
        return
      } else {
        const key = splitData[0].trim()
        const value = splitData[1].trim()
        console.log(key, value)
        try {
          const response = await axios.get(
            `http://localhost:3500/${key}?devName=${value}`
          )
          console.log(response.data)
          if (!response.data.length) {
            console.log("no results")
          }
        } catch (err) {
          console.error(err)
        }
      }
    }
    fetchData()
  }, [searchValue])

  const filterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value + ":")
    setIsFilterDrop(!isFilterDrop)
  }

  const value: SearchContextTypes = {
    filterBy,
    setFilterBy,
    inputValue,
    setInputValue,
    searchValue,
    setSearchValue,
    isFilterDrop,
    setIsFilterDrop,
    inputChange,
    handleSubmit,
    filterChange,
  }

  return (
    <SearchItemContext.Provider value={value}>
      {children}
    </SearchItemContext.Provider>
  )
}
