import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

function TopPanel() {
  const navigate = useNavigate();
  const modemsArr = useSelector((state: RootState) => state.modems.modemsArr);

  return (
    <div className="bg-white p-5 rounded-md flex justify-between items-center">
      <Button className="font-bold text-lg" onClick={() => navigate(-1)}>
        Back to sites
      </Button>
      <div className="text-black font-bold text-base">
        {modemsArr.length} total modems
      </div>
    </div>
  );
}

export default TopPanel;
