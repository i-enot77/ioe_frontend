import { useAppDispatch } from "../../services/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { addJobOption } from "../../services/slices/option";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

const JobsPanel = () => {
  const jobsArr = useSelector((state: RootState) => state.jobs.jobsArr);
  const dispatch = useAppDispatch();

  const style = {
    header: `font-bold text-black text-2xl`,
  };

  return (
    <div className="w-full bg-white px-6 py-4 rounded-md mb-4">
      <div className="w-full flex justify-between items-center ">
        <div className="flex">
          <h2 className={`${style.header} pr-3`}>Available Jobs: </h2>
          <span className={style.header}>{jobsArr.length} total jobs</span>
        </div>

        <Button
          className="font-bold text-black text-xl bg-[#87C4E7] p-3 rounded"
          onClick={() => dispatch(addJobOption())}
        >
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="sm"
            style={{ color: "#000000" }}
            className="mr-2"
          />
          New Job
        </Button>
      </div>
    </div>
  );
};

export default JobsPanel;
