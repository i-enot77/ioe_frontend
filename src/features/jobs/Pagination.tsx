import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { useGetJobsArrQuery } from "@/services/jobsApi";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/services/hooks";
import { setJobsArr } from "@/services/slices/jobs";

export interface PaginationProps {
  limit: number;
  page: number;
  totalItems: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const MAX_LIMIT = 50;
const MIN_LIMIT = 10;

function Pagination({
  limit,
  page,
  //   totalItems,
  setPage,
  setLimit,
}: PaginationProps) {
  const [maxPage, setMaxPage] = useState(0);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));
  const increaseLimit = () => setLimit((prev) => Math.min(prev + 10, 50));
  const decreaseLimit = () => setLimit((prev) => Math.max(prev - 10, 10));

  const { data: jobsArr } = useGetJobsArrQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (jobsArr) {
      setMaxPage(Math.ceil(jobsArr.length / limit));
      dispatch(setJobsArr(jobsArr));
    }
  }, [limit]);
  //   const maxPage = Math.ceil(totalItems / limit); - get total items from backend side (no need to fetch jobs array)

  const style = {
    btn: `text-black text-[15px] bg-white rounded-3xl px-2 py-1  border border-[#87C4E7]`,
    text: `text-lg font-bold text-black`,
  };

  return (
    <div className="w-[70%] py-2 flex justify-between items-center mx-auto">
      <div className="flex justify-between items-center mr-4">
        <span className={`${style.text} mr-3`}>Show</span>
        <div className="flex items-center text-black text-lg border border-[#87C4E7] rounded p-2 relative w-[60px]">
          {limit}
          <div className="flex flex-col absolute top-0 right-[10px]">
            <Button
              className="w-[14px] h-[14px]"
              disabled={limit >= MAX_LIMIT}
              onClick={increaseLimit}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                size="sm"
                style={{ color: "#1f6ff9" }}
              />
            </Button>
            <Button
              className="w-[14px] h-[14px]"
              disabled={limit <= MIN_LIMIT}
              onClick={decreaseLimit}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                size="sm"
                style={{ color: "#1f6ff9" }}
              />
            </Button>
          </div>
        </div>
        <span className={`${style.text} ml-3`}>entries</span>
      </div>
      <div className="flex justify-between items-center">
        <Button onClick={prevPage} disabled={page === 1}>
          <FontAwesomeIcon
            icon={faAnglesLeft}
            size="lg"
            style={{
              color: "#000000",
            }}
          />
        </Button>
        <span className={`${style.text} mx-2`}>page {page}</span>
        <Button onClick={nextPage} disabled={page >= maxPage}>
          <FontAwesomeIcon
            icon={faAnglesRight}
            size="lg"
            style={{
              color: "#000000",
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronDown,
//   faChevronUp,
//   faAnglesLeft,
//   faAnglesRight,
// } from "@fortawesome/free-solid-svg-icons";
// import Button from "../Button";

// export interface PaginationProp {
//   limit: number;
//   page: number;
//   paginationData: object[];
//   nextPage: () => void;
//   prevPage: () => void;
//   limitPlus: () => void;
//   limitMinus: () => void;
// }

// function Pagination({
//   limit,
//   page,
//   paginationData,
//   nextPage,
//   prevPage,
//   limitPlus,
//   limitMinus,
// }: PaginationProp) {
//   const style = {
//     btn: `text-black text-[15px] bg-white rounded-3xl px-2 py-1  border border-[#87C4E7]`,
//     text: `text-lg font-bold text-black`,
//   };
//   return (
//     <>
//       <div className="flex justify-between items-center mr-4">
//         <span className={`${style.text} mr-3`}>Show</span>
//         <div className="flex items-center text-black text-lg border border-[#87C4E7] rounded p-2 relative w-[60px]">
//           {limit}
//           <div className="flex flex-col absolute top-0 right-[10px]">
//             <Button
//               className="w-[14px] h-[14px]"
//               disabled={limit !== 50}
//               onClick={limitPlus}
//             >
//               <FontAwesomeIcon
//                 icon={faChevronUp}
//                 size="sm"
//                 style={{ color: "#1f6ff9" }}
//               />
//             </Button>
//             <Button
//               className="w-[14px] h-[14px]"
//               disabled={limit !== 10}
//               onClick={limitMinus}
//             >
//               <FontAwesomeIcon
//                 icon={faChevronDown}
//                 size="sm"
//                 style={{ color: "#1f6ff9" }}
//               />
//             </Button>
//           </div>
//         </div>
//         <span className={`${style.text} ml-3`}>entries</span>
//       </div>
//       <div className="flex justify-between items-center">
//         <Button onClick={prevPage} disabled={page === 1}>
//           <FontAwesomeIcon
//             icon={faAnglesLeft}
//             size="lg"
//             style={{
//               color: "#000000",
//             }}
//           />
//         </Button>
//         <span className={`${style.text} mx-2`}>page</span>
//         <Button onClick={nextPage} disabled={paginationData.length !== limit}>
//           <FontAwesomeIcon
//             icon={faAnglesRight}
//             size="lg"
//             style={{
//               color: "#000000",
//             }}
//           />
//         </Button>
//       </div>
//     </>
//   );
// }

// export default Pagination;
