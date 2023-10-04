import Form from "../../forms/Form"
import SearchInputItem from "../../forms/SearchInputItem"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setSearchModemsArr } from "../../app/reducers/modems"

function TopPanel() {
  const navigate = useNavigate()
  const modemsArr = useAppSelector((state) => state.modems.modemsArr)
  const searchedModems = useAppSelector((state) => state.modems.searchModemsArr)
  const dispatch = useAppDispatch()

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return dispatch(setSearchModemsArr(modemsArr))

    const result = searchedModems.filter((modem) =>
      modem.name.includes(e.target.value)
    )
    dispatch(setSearchModemsArr(result))
  }

  return (
    <div className="bg-white p-5 mb-2 rounded-md flex justify-between items-center">
      <Button buttonClass="font-bold text-lg" clickHandler={() => navigate(-1)}>
        Back to sites
      </Button>
      <Form submit={(e: React.FormEvent) => e.preventDefault()}>
        <SearchInputItem
          inputClass="border rounded-md border-[rgba(217, 217, 217, 0.8)] px-2 py-1 outline-0"
          type="search"
          inputName="siteDetail"
          handleChange={search}
          placeholder="Filter modems"
        />
      </Form>
      <div className="text-black font-bold text-base">
        {modemsArr.length} total modems
      </div>
    </div>
  )
}

export default TopPanel
