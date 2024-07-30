import Button from "../../components/Button";
import Jobs from "./Jobs";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { useDeleteJobItemMutation } from "@/services/jobsApi";

export default function DeleteJob() {
  const jobItem = useSelector((state: RootState) => state.jobs.jobData);
  const [deleteJob] = useDeleteJobItemMutation();

  const deleteJobItem = () => {
    if (jobItem) deleteJob(jobItem.id);
  };

  return (
    <div className="bg-white rounded-md p-8 h-[75vh]">
      <div className="overflow-y-auto h-full w-full">
        <div className="sticky top-0 pb-5 bg-white flex justify-between">
          <h2 className="title">Delete Jobs:</h2>
          <Button
            className="border border-[#DC3545] rounded-lg  text-black py-2 px-6 mx-3"
            onClick={deleteJobItem}
          >
            Delete job
          </Button>
        </div>
        <Jobs />
      </div>
    </div>
  );
}
