import repo from "../../assets/img/Button_repo.svg"
import add from "../../assets/img/add-icon_button.svg"
import { Button } from "../Button"
import { useAppSelector } from "../../app/hooks"

const style = {
  button: `flex text-[#808080]`,
  buttonAdd: `flex justify-center items-center text-[#808080] border border-[#87C4E7] rounded shadow-md p-2 text-xs`,
}

const SitesHeader = () => {
  const sitesArr = useAppSelector((state) => state.sites.sites)

  return (
    <div className="flex justify-between items-center mx-auto max-w-[1440px] bg-white px-5 py-2 rounded border mb-2">
      <p className="title">All Sites</p>
      <div className="title">{sitesArr.length} total sites</div>
      <Button
        clickHandler={() => console.log("add site")}
        buttonClass={style.buttonAdd}
      >
        <img src={add} alt="add" />
        <span className="ml-1">Add new site</span>
      </Button>
      <Button buttonClass={style.button}>
        <img src={repo} alt="repo" />
        <span>More</span>
      </Button>
    </div>
  )
}

export default SitesHeader
