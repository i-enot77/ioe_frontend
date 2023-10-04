import { DisableButton } from "../DisableButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faChevronUp,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons"
import { JobProp } from "../../app/reducers/jobs"

export interface PaginationProp {
  limit: number
  page: number
  data: JobProp[] | undefined
  nextPage: () => void
  prevPage: () => void
  limitPlus: () => void
  limitMinus: () => void
}

function Pagination({
  limit,
  page,
  data,
  nextPage,
  prevPage,
  limitPlus,
  limitMinus,
}: PaginationProp) {
  const style = {
    btn: `text-black text-[15px] bg-white rounded-3xl px-2 py-1  border border-[#87C4E7]`,
    text: `text-lg font-bold text-black`,
  }
  return (
    <>
      <div className="flex justify-between items-center mr-4">
        <span className={`${style.text} mr-3`}>Show</span>
        <div className="flex items-center text-black text-lg border border-[#87C4E7] rounded p-2 relative w-[60px]">
          {limit}
          <div className="flex flex-col absolute top-0 right-[10px]">
            <DisableButton
              buttonClass="w-[14px] h-[14px]"
              isDisabled={limit !== 50}
              clickHandler={limitPlus}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                size="sm"
                style={{ color: "#1f6ff9" }}
              />
            </DisableButton>
            <DisableButton
              buttonClass="w-[14px] h-[14px]"
              isDisabled={limit !== 10}
              clickHandler={limitMinus}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                size="sm"
                style={{ color: "#1f6ff9" }}
              />
            </DisableButton>
          </div>
        </div>
        <span className={`${style.text} ml-3`}>entries</span>
      </div>
      <div className="flex justify-between items-center">
        <DisableButton clickHandler={prevPage} isDisabled={page !== 1}>
          <FontAwesomeIcon
            icon={faAnglesLeft}
            size="lg"
            style={{
              "--fa-primary-color": "#000000",
              "--fa-secondary-color": "#000000",
            }}
          />
        </DisableButton>
        <span className={`${style.text} mx-2`}>page</span>
        <DisableButton
          clickHandler={nextPage}
          isDisabled={!(data?.length !== limit)}
        >
          <FontAwesomeIcon
            icon={faAnglesRight}
            size="lg"
            style={{
              "--fa-primary-color": "#000000",
              "--fa-secondary-color": "#000000",
            }}
          />
        </DisableButton>
      </div>
    </>
  )
}

export default Pagination
