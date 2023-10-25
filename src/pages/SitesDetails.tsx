import { useAppSelector } from "../app/hooks";
import SideJobsAlarms from "../components/jobs/SideJobsAlarms";
import SideModemDevice from "../components/sites/SideModemDevice";
import { SiteModems } from "../components/sites/SiteModems";

const SitesDetails = () => {
  const changeSidePanel = useAppSelector(
    (state) => state.sidePanel.panelChange
  );
  return (
    <section className="max-w-[1468px] px-3.5 h-[90%] mx-auto mt-3 grid grid-rows-1 grid-cols-[3fr_1fr] gap-3">
      <SiteModems />

      {changeSidePanel ? (
        <SideJobsAlarms />
      ) : (
        <SideModemDevice sideWrapperClass="h-[60%]" />
      )}
    </section>
  );
};
export default SitesDetails;
