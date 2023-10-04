import { useState } from "react"
import PeriodicJob from "./PeriodicJob"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import JobModal from "./JobModal"

export default function GetJob() {
  const [jobs, setJobs] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const jobClick = () => {
    if (isOpen) {
      setIsOpen(false)
      setJobs(!jobs)
    }
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex flex-col w-[586px] ">
      <div className="w-full bg-white  mb-5 rounded-lg px-20 py-4">
        <div className="w-full  px-4 py-1 border border-[#E4E6EB] rounded-lg mx-auto overflow-hidden">
          <div className="flex justify-between items-center mb-1">
            <span className="cursor-pointer" onClick={jobClick}>
              {jobs ? "Periodic Jobs" : "Jobs"}
            </span>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faCaretDown}
              style={{ color: "#808080" }}
              size="lg"
              onClick={handleOpen}
            />
          </div>

          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              isOpen ? "max-h-10" : "max-h-0"
            }`}
          >
            <span className="cursor-pointer" onClick={jobClick}>
              {jobs ? "Jobs" : "Periodic jobs"}
            </span>
          </div>
        </div>
      </div>
      {jobs ? <PeriodicJob /> : <JobModal />}
    </div>
  )
}
