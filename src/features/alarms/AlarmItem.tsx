import { AlarmItemProp } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faArrowsRotate,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";

const style = {
  statusItem: `text-xs flex flex-col ml-2`,
};

export const AlarmItem = ({ deviceName, job, status, time }: AlarmItemProp) => {
  const [iconProp, setIconProp] = useState<IconDefinition | null>(null);
  const [iconColor, setIconColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    switch (status) {
      case "available":
        setIconProp(faCircleCheck);
        setIconColor("#247a05");
        setTextColor("text-[#00C738]");
        setText("Available");
        break;

      case "incident":
        setIconProp(faTriangleExclamation);
        setIconColor("#FFD43B");
        setTextColor("text-[#FFC107]");
        setText("Incident");
        break;

      case "waiting":
        setIconProp(faArrowsRotate);
        setIconColor("#000000");
        setTextColor("text-black");
        setText("Waiting");
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-between items-center border border-[#E4E6EB] p-2 mb-2 last:mb-0 rounded-md">
      <div>
        <span className="text-[15px] text-black">Device {deviceName}</span>
        <div className="mt-1 text-[10px] text-[rgba(7, 7, 7, 0.8)]">
          <span>{job}</span>
          <ReactTimeAgo
            className="text-[10px] text-[rgba(7, 7, 7, 0.8)]"
            date={time}
            locale="en-US"
          />
        </div>
      </div>

      {iconProp && (
        <div className={style.statusItem}>
          <FontAwesomeIcon icon={iconProp} style={{ color: iconColor }} />
          <span className={`${textColor} mt-1.5`}>{text}</span>
        </div>
      )}
    </div>
  );
};
