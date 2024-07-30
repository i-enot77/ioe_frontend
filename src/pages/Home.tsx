import Alarms from "../features/alarms/Alarms";
import { JobsInfo } from "../features/jobs/JobsInfo";
import { ButtonsArea } from "../features/sites/ButtonsArea";
import Sites from "../features/sites/Sites";
import PageHeader from "../components/PageHeader";
import { useSelector } from "react-redux";
import { RootState } from "../services/store";

const Home = () => {
  const sitesArr = useSelector((state: RootState) => state.sites.sites);

  const style = {
    title: `font-bold text-lg  sticky top-0 bg-white py-6`,
    jobsWrapper: `bg-white w-full rounded-md px-6 py-5`,
  };

  return (
    <main className="w-full h-[92vh] p-4">
      <PageHeader
        title="All Sites:"
        arrLength={sitesArr.length ?? 0}
        item="site"
        wrapperClass="mb-2"
        clickHandler={() => console.log("site added")}
      />
      <div className="h-full flex flex-col flex-1 ">
        <div className="flex h-[30%]">
          <div className="flex-1 overflow-y-auto mr-4">
            <Sites />
          </div>
          <div className="w-1/3 bg-white rounded-md overflow-y-auto">
            <ButtonsArea />
          </div>
        </div>

        <div className="flex justify-self-end h-[65%] py-5">
          <div className="w-1/3 overflow-y-auto mr-4 bg-white rounded-md px-6">
            <h2 className={style.title}>Alarms</h2>
            <div className="">
              <Alarms />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto bg-white rounded-md px-6">
            <h2 className={style.title}>Recent Jobs</h2>
            <div className="grid grid-flow-row grid-cols-5 gap-2">
              <JobsInfo detailPage={false} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
