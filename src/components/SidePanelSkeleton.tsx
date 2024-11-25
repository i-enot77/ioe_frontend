import list from "./assets/img/sidePanel.svg";

function SidePanelSkeleton() {
  return (
    <div className="bg-white rounded-lg h-[370px] flex flex-col justify-end items-center">
      <img src={list} alt="list" />
      <p className="mt-5 mb-7">Choose modem or device</p>
    </div>
  );
}

export default SidePanelSkeleton;
