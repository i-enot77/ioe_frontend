import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faUserPlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Modal } from "../../components/Modal";
import AssignDevice from "../devices/AssignDevice";
import DeviceModal from "../devices/DeviceModal";
import DeleteDevice from "../devices/DeleteDevice";
import DeleteJob from "../jobs/DeleteJob";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useAppDispatch } from "../../services/hooks";
import {
  addDeviceOption,
  assignDeviceOption,
  editDeviceOption,
  delDeviceOption,
  addJobOption,
  editJobOption,
  deleteJobOption,
} from "../../services/slices/option";
import { setClicked, setClickedItem } from "../../services/slices/sites";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { useLazyGetModemsQuery } from "../../services/modemApi";
import { initDevData } from "@/services/slices/devices";
import EditDevice from "../devices/EditDevice";
import JobModal from "../jobs/JobModal";
import { initJobData } from "@/services/slices/jobs";
import EditJob from "../jobs/EditJob";

export const ButtonsArea = () => {
  const style = {
    disable: `text-[rgba(0, 0, 0, 0.15)] text-base`,
    enable: `text-black text-base`,
    btn: `px-4 py-2 `,
  };

  const dispatch = useAppDispatch();
  const clicked = useSelector((state: RootState) => state.sites.clicked);
  const option = useSelector((state: RootState) => state.option.option);

  const [fetchModems] = useLazyGetModemsQuery();

  const editDevBtn = () => {
    dispatch(editDeviceOption());
  };

  const assignDevice = () => {
    fetchModems();
    dispatch(assignDeviceOption());
  };

  const deleteDevice = () => {
    dispatch(delDeviceOption());
  };

  const editJob = () => {
    dispatch(editJobOption());
  };

  const deleteJob = () => {
    dispatch(deleteJobOption());
  };

  const btnsRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(btnsRef, clicked, () => {
    dispatch(setClicked(false));
    dispatch(setClickedItem(null));
  });

  return (
    <>
      <div
        ref={btnsRef}
        className="w-full grid grid-rows-1 grid-cols-2 justify-items-center items-start px-10 py-3"
        id="buttons-area"
      >
        <div className="">
          <h2 className="text-black text-lg pl-4 mb-3">Devices</h2>
          <div className="flex flex-col justify-center items-start">
            <Button
              className={style.btn}
              disabled={!clicked}
              onClick={() => dispatch(addDeviceOption())}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                Add
              </span>
            </Button>

            <Button
              className={style.btn}
              disabled={!clicked}
              onClick={assignDevice}
            >
              <FontAwesomeIcon icon={faUserPlus} style={{ color: "#969696" }} />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                Assign
              </span>
            </Button>

            <Button
              className={style.btn}
              disabled={!clicked}
              onClick={editDevBtn}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                Edit
              </span>
            </Button>

            <Button
              className={style.btn}
              disabled={!clicked}
              onClick={deleteDevice}
            >
              <FontAwesomeIcon icon={faTrashCan} style={{ color: "#969696" }} />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                Delete
              </span>
            </Button>
          </div>
        </div>

        <div className="">
          <h2 className="text-black text-lg pl-4">Jobs</h2>
          <div className="flex flex-col justify-center items-start">
            <Button
              className={style.btn}
              disabled={!clicked}
              onClick={() => dispatch(addJobOption())}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                Add
              </span>
            </Button>

            <Button className={style.btn} disabled={!clicked} onClick={editJob}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#969696" }}
              />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                Edit
              </span>
            </Button>

            <Button
              className={style.btn}
              disabled={!clicked}
              onClick={deleteJob}
            >
              <FontAwesomeIcon icon={faTrashCan} style={{ color: "#969696" }} />
              <span
                className={`${!clicked ? style.disable : style.enable} pl-1.5`}
              >
                Delete
              </span>
            </Button>
          </div>
        </div>
      </div>

      {option === "addDevice" && (
        <Modal>
          <DeviceModal isEdit={false} />
        </Modal>
      )}
      {option === "assignDevice" && (
        <Modal onClick={() => dispatch(initDevData())}>
          <AssignDevice />
        </Modal>
      )}
      {option === "editDevice" && (
        <Modal onClick={() => dispatch(initDevData())}>
          <EditDevice />
        </Modal>
      )}
      {option === "deleteDevice" && (
        <Modal onClick={() => dispatch(initDevData())}>
          <DeleteDevice />
        </Modal>
      )}
      {/* jobs */}
      {option === "addJob" && (
        <Modal>
          <JobModal isEdit={false} />
        </Modal>
      )}
      {option === "editJob" && (
        <Modal onClick={() => dispatch(initJobData())}>
          <EditJob />
        </Modal>
      )}
      {option === "deleteJob" && (
        <Modal onClick={() => dispatch(initJobData())}>
          <DeleteJob />
        </Modal>
      )}
    </>
  );
};
