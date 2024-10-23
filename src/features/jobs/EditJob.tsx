import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import Jobs from "./Jobs";
import JobModal from "./JobModal";

const EditJob = () => {
  const jobItem = useSelector((state: RootState) => state.jobs.jobData);

  return (
    <div className="flex bg-white rounded-md p-8 h-[75vh]">
      <div className="overflow-y-auto h-full w-full">
        <h2 className="title pb-5 sticky top-0 bg-white">Available Jobs:</h2>
        <Jobs />
      </div>
      {jobItem && <JobModal isEdit={true} />}
    </div>
  );
};
export default EditJob;
