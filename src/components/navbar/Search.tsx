import Filter from "./Filter"
import { ChildrenProp } from "../types"

const Search = ({ children }: ChildrenProp) => {
  return (
    <div className="flex items-center justify-between bg-light-gray max-w-[500px] h-[50px] rounded-md">
      {children}

      <Filter />
    </div>
  )
}

export default Search
