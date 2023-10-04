import { DisableButton } from "../DisableButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCirclePlus,
  faUserPlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"
import { Modal } from "../modals/Modal"
import AssignDevice from "../modals/devices/AssignDevice"
import DeviceModal from "../modals/devices/DeviceModal"
import EditDeviceModal from "../modals/devices/EditDeviceModal"
import DeleteDevice from "../modals/devices/DeleteDevice"
import DeleteJob from "../modals/jobs/DeleteJob"
import GetJob from "../modals/jobs/GetJob"
import EditJob from "../modals/jobs/EditJob"
import useOutsideClick from "../../hooks/useOutsideClick"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  addDeviceOption,
  assignDeviceOption,
  editDeviceOption,
  delDeviceOption,
  addJobOption,
  editJobOption,
  deleteJobOption,
} from "../../app/reducers/option"
import { editDevice, fetchDevices } from "../../app/reducers/devices"
import { fetchModems } from "../../app/reducers/modems"
import { setClicked } from "../../app/reducers/sites"
import { fetchJobs } from "../../app/reducers/jobs"

export const ButtonsArea = () => {
  const style = {
    disable: `text-[rgba(0, 0, 0, 0.15)] text-base`,
    enable: `text-black text-base`,
    btn: `px-4 py-1.5 rounded hover:bg-black/20`,
  }

  const dispatch = useAppDispatch()
  const clicked = useAppSelector((state) => state.sites.clicked)
  const option = useAppSelector((state) => state.option.option)

  const editDevBtn = () => {
    dispatch(editDevice())
    dispatch(editDeviceOption())
  }

  const assignDevice = () => {
    dispatch(fetchModems())
    dispatch(fetchDevices())
    dispatch(assignDeviceOption())
  }

  const deleteDevice = () => {
    dispatch(fetchDevices())
    dispatch(delDeviceOption())
  }

  const btnsRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(btnsRef, clicked, () => dispatch(setClicked(false)))

  return (
    <>
      <div
        ref={btnsRef}
        className="flex justify-between items-start w-[40%] px-10 py-3 rounded bg-white ml-3"
        id="buttons-area"
      >
        <div>
          <p className="text-black text-lg mb-0">Devices</p>
          <div className="flex flex-col justify-center items-start">
            <DisableButton
              buttonClass={style.btn}
              isDisabled={clicked}
              clickHandler={() => dispatch(addDeviceOption())}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                {"Add"}
              </span>
            </DisableButton>

            <DisableButton
              buttonClass={style.btn}
              isDisabled={clicked}
              clickHandler={assignDevice}
            >
              <FontAwesomeIcon icon={faUserPlus} style={{ color: "#969696" }} />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                {"Assign"}
              </span>
            </DisableButton>

            <DisableButton
              buttonClass={style.btn}
              isDisabled={clicked}
              clickHandler={editDevBtn}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                {"Edit"}
              </span>
            </DisableButton>

            <DisableButton
              buttonClass={style.btn}
              isDisabled={clicked}
              clickHandler={deleteDevice}
            >
              <FontAwesomeIcon icon={faTrashCan} style={{ color: "#969696" }} />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                {"Delete"}
              </span>
            </DisableButton>
          </div>
        </div>

        <div>
          <p className="text-black text-lg mb-1">Jobs</p>
          <div className="flex flex-col justify-center items-start">
            <DisableButton
              buttonClass={style.btn}
              isDisabled={clicked}
              clickHandler={() => dispatch(addJobOption())}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                {"Add"}
              </span>
            </DisableButton>

            <DisableButton
              buttonClass={style.btn}
              isDisabled={clicked}
              clickHandler={() => {
                dispatch(editJobOption())
                dispatch(fetchJobs())
              }}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                {"Edit"}
              </span>
            </DisableButton>

            <DisableButton
              buttonClass={style.btn}
              isDisabled={clicked}
              clickHandler={() => {
                dispatch(deleteJobOption())
                dispatch(fetchJobs())
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} style={{ color: "#969696" }} />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                {"Delete"}
              </span>
            </DisableButton>
          </div>
        </div>
      </div>
      <div>
        {option === "addDevice" && (
          <Modal>
            <DeviceModal
              isOpen={true}
              isEdit={false}
              wrapperStyle="w-[400px]"
            />
          </Modal>
        )}
        {option === "assignDevice" && (
          <Modal>
            <AssignDevice />
          </Modal>
        )}
        {option === "editDevice" && (
          <Modal>
            <EditDeviceModal isEdit={true} />
          </Modal>
        )}
        {option === "deleteDevice" && (
          <Modal>
            <DeleteDevice />
          </Modal>
        )}
        {/* jobs */}
        {option === "addJob" && (
          <Modal>
            <GetJob />
          </Modal>
        )}
        {option === "editJob" && (
          <Modal>
            <EditJob />
          </Modal>
        )}
        {option === "deleteJob" && (
          <Modal>
            <DeleteJob />
          </Modal>
        )}
      </div>
    </>
  )
}
