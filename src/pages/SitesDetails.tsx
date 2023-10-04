import { useAppSelector } from "../app/hooks"
import SideJobsAlarms from "../components/jobs/SideJobsAlarms"
import SideModemDevice from "../components/sites/SideModemDevice"
import { SiteModems } from "../components/sites/SiteModems"

const SitesDetails = () => {
  const changeSidePanel = useAppSelector((state) => state.sidePanel.panelChange)
  return (
    <section className="max-w-[1468px] px-3.5 h-[85%] mt-3 grid grid-rows-1 grid-cols-[3fr_1fr] gap-3">
      <SiteModems />
      <div className="w-full h-[91%] bg-white px-5 rounded-md">
        {changeSidePanel ? <SideJobsAlarms /> : <SideModemDevice />}
      </div>
    </section>
  )
}
export default SitesDetails
