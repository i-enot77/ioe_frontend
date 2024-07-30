import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const style = {
  button: `flex text-[#808080]`,
  buttonAdd: `flex justify-center items-center text-[#808080] border border-[#87C4E7] rounded shadow-md p-2 text-xs`,
  container: `flex justify-between items-center  w-full bg-white px-5 py-2 rounded border`,
};

type PageHeaderProp = {
  title: string;
  arrLength: number;
  item: string;
  wrapperClass: string;
  clickHandler(): void;
};

const PageHeader = ({
  title,
  arrLength,
  item,
  wrapperClass,
  clickHandler,
}: PageHeaderProp) => {
  return (
    <div className={`${style.container} ${wrapperClass}`}>
      <div className="flex ">
        <h2 className="title mr-3">{title}</h2>
        <div className="title">{arrLength} total items</div>
      </div>
      <Button onClick={clickHandler} className={style.buttonAdd}>
        <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#000000" }} />
        <span className="ml-1">Add new {item}</span>
      </Button>
    </div>
  );
};

export default PageHeader;
