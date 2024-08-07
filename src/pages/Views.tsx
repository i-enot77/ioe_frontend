import Button from "@/components/Button";
import { Modal } from "@/components/Modal";
import CreateView from "@/features/view/CreateView";
import ViewItem from "@/features/view/ViewItem";
import { useAppDispatch } from "@/services/hooks";
import { toggleViewModal } from "@/services/slices/option";
import { RootState } from "@/services/store";
import { useGetViewsArrQuery } from "@/services/viewApi";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function Views() {
  const isNewView = useSelector((state: RootState) => state.option.isViewModal);
  const dispatch = useAppDispatch();

  const { data: viewArr } = useGetViewsArrQuery();

  const style = {
    header: `font-bold text-black text-2xl`,
  };

  return (
    <>
      <section className="mt-2 mx-auto bg-[#F3F2EF] w-full py-2 px-6 h-[92vh] flex flex-col">
        <div className="flex justify-between items-center w-full bg-white px-6 py-4 rounded-md">
          <h2 className={style.header}>
            Views: <span className={style.header}>{viewArr?.length} items</span>
          </h2>

          <Button
            className=" bg-[#87C4E7] p-3 rounded"
            onClick={() => dispatch(toggleViewModal(true))}
          >
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="lg"
              style={{ color: "#000000" }}
              className="mr-2"
            />
            <span className="font-bold text-black text-xl">New view</span>
          </Button>
        </div>

        <div className="w-full h-full flex-grow my-5 py-2 px-6 bg-white rounded-md overflow-y-auto">
          {viewArr?.map((item) => <ViewItem key={item.id} view={item} />)}
        </div>
      </section>

      {isNewView && (
        <Modal onClick={() => dispatch(toggleViewModal(false))}>
          <CreateView />
        </Modal>
      )}
    </>
  );
}
