import Devices from "../devices/Devices";
import NewView from "./NewView";

const CreateView = () => {
  return (
    <div className="h-[75vh] grid grid-rows-1 grid-cols-[2fr_1fr] gap-3">
      <div className="overflow-y-auto h-full w-full bg-white rounded-md px-5">
        <h2 className="title py-5 sticky top-0 bg-white">Available devices:</h2>
        <Devices isDraggable={true} />
      </div>
      <NewView />
    </div>
  );
};

export default CreateView;
