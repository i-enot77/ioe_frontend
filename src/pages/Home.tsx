import Alarms from "../components/alarms/Alarms";
import { Jobs } from "../components/jobs/Jobs";
import { ButtonsArea } from "../components/sites/ButtonsArea";
import Sites from "../components/sites/Sites";
import SitesHeader from "../components/sites/SitesHeader";

const Home = () => {
  return (
    <section className="max-w-[1468px] px-3.5 h-[90%] mt-3 mx-auto">
      <SitesHeader />
      <div className="w-full h-[30%] flex justify-between mb-3">
        <Sites />
        <ButtonsArea />
      </div>
      <div className="w-full h-[45%] flex">
        <Alarms detailPage={false} />
        <Jobs detailPage={false} />
      </div>
    </section>
  );
};
export default Home;
