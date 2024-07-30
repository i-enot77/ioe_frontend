import filter from "../../assets/img/filter.svg";
import Dropdown from "../Dropdown";
import { useRef, useState } from "react";
import { InputItem } from "../../forms/InputItem";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useAppDispatch } from "../../app/hooks";
import { setFilterBy } from "../../app/slices/search";

const style = {
  dropItem: `bg-white py-3 shadow-md pl-7 flex flex-col items-start text-xs pr-7`,
  labelClassName: "mb-2.5 last:pb-0 text-md relative",
  inputClassName:
    "w-full h-full absolute top-0 left-0 cursor-pointer opacity-0",
};

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useAppDispatch();

  const filterRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(filterRef, openFilter, () => setOpenFilter(false));

  const filterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterBy(e.target.value));
    setOpenFilter(!openFilter);
  };

  const dropFilter = [
    {
      labelName: "devices",
      label: "Devices",
      id: "device",
      inputName: "filter",
      inputValue: "devices",
    },
    {
      labelName: "sites",
      label: "Sites",
      id: "sites",
      inputName: "filter",
      inputValue: "sites",
    },
    {
      labelName: "users",
      label: "Users",
      id: "users",
      inputName: "filter",
      inputValue: "users",
    },
  ];

  return (
    <div className="h-full" ref={filterRef}>
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="flex items-center justify-start bg-light-neutral h-[100%] px-2.5 cursor-pointer rounded-r-md"
      >
        <img className="w-[20px] h-[20px]" src={filter} alt="filter" />
        <span className="pl-1 text-xs">Filter By</span>
      </div>
      <div className="absolute top-[100%] -right-8 z-10">
        <Dropdown
          drop={openFilter}
          dropClassName={style.dropItem}
          handleClick={filterChange}
        >
          {dropFilter.map((item, index) => (
            <InputItem
              key={index}
              labelName={item.labelName}
              labelClassName={style.labelClassName}
              label={item.label}
              type="radio"
              id={item.id}
              inputName={item.inputName}
              inputValue={item.inputValue}
              onChangeInputHandler={filterChange}
              inputClassName={style.inputClassName}
            />
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default Filter;
