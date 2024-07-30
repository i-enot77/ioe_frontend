import Form from "../../forms/Form";
import SearchInputItem from "../../forms/SearchInputItem";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/hooks";
// import { setSearchModemsArr } from "../../app/slices/modems";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

function TopPanel() {
  const navigate = useNavigate();
  const modemsArr = useSelector((state: RootState) => state.modems.modemsArr);
  const dispatch = useAppDispatch();

  // const searchedModems = useAppSelector(
  //   (state) => state.modems.searchModemsArr
  // );
  // const search = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.value) return dispatch(setSearchModemsArr(modemsArr));

  //   const result = searchedModems.filter((modem) =>
  //     modem.name.includes(e.target.value)
  //   );
  //   dispatch(setSearchModemsArr(result));
  // };

  return (
    <div className="bg-white p-5 rounded-md flex justify-between items-center">
      <Button className="font-bold text-lg" onClick={() => navigate(-1)}>
        Back to sites
      </Button>
      {/* <Form submit={(e: React.FormEvent) => e.preventDefault()}>
        <SearchInputItem
          inputClass="border rounded-md border-[rgba(217, 217, 217, 0.8)] px-2 py-1 outline-0"
          type="search"
          inputName="siteDetail"
          handleChange={search}
          placeholder="Filter modems"
        />
      </Form> */}
      <div className="text-black font-bold text-base">
        {modemsArr.length} total modems
      </div>
    </div>
  );
}

export default TopPanel;
