import { ReactNode, HTMLAttributes } from "react";
import { useAppDispatch } from "../services/hooks";
import { initOption } from "../services/slices/option";
import clsx from "clsx";
import { setClicked, setClickedItem } from "@/services/slices/sites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
  children: ReactNode;
  onClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const Modal = ({ children, onClick, className }: ModalProps) => {
  const dispatch = useAppDispatch();

  const combinedOnClick = () => {
    dispatch(initOption());
    dispatch(setClicked(false));
    dispatch(setClickedItem(null));
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={combinedOnClick}
      className="fixed z-20 inset-0  flex justify-center items-center w-full h-screen rounded mx-auto bg-[#9a9a9a61]"
    >
      <div
        className={clsx(
          "bg-[#EEF3F8] rounded-md p-10 m-10 flex justify-center items-center relative",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={combinedOnClick}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            style={{ color: "#000000" }}
          />
        </div>

        {children}
      </div>
    </div>
  );
};
