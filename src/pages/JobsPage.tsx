import SideJobsDevices from "@/features/jobs/SideJobsDevices";
import JobsDetails from "../features/jobs/JobsDetails";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

const JobsPage = () => {
  const option = useSelector((state: RootState) => state.option.option);

  return (
    <section
      className={`mt-2 mx-auto bg-[#F3F2EF] w-full p-4 h-[92vh] grid grid-rows-1 ${
        option === "editJob" ? "grid-cols-[5fr_1fr]" : "grid-cols-1"
      }`}
    >
      <JobsDetails />
      {option === "editJob" && (
        <div className="h-[70%] w-full rounded-md">
          <SideJobsDevices />
        </div>
      )}
    </section>
  );
};

export default JobsPage;
