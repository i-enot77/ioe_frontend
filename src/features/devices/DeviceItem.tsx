import { DevProps } from "@/services/deviceApi";
import { HtmlHTMLAttributes, useState } from "react";
import clsx from "clsx";

interface DeviceItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
  device: DevProps;
  isDraggable?: boolean;
}

export default function DeviceItem({
  device,
  isDraggable,
  className,
  ...rest
}: DeviceItemProps) {
  const [dragging, setDragging] = useState(false);

  console.log(isDraggable);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    data: DevProps
  ) => {
    setDragging(true);
    console.log("Start dragging:", data);

    if (data) {
      const str = JSON.stringify(data);
      console.log("Data to be transferred:", str);
      e.dataTransfer.setData("application/json", str);
    } else {
      console.log("No device data available.");
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    console.log("End dragging");
  };

  return (
    <div
      className={clsx(className, { "bg-blue-200": dragging })}
      draggable={isDraggable}
      onDragStart={isDraggable ? (e) => handleDragStart(e, device) : undefined}
      onDragEnd={isDraggable ? handleDragEnd : undefined}
      {...rest}
    >
      <div className="text-[rgba(0, 0, 0, 0.78)]">{device.serialNumber}</div>
      <div className="text-[rgba(0, 0, 0, 0.78)]">{device.modem}</div>
      <div className="text-[rgba(0, 0, 0, 0.78)]">{device.devName}</div>
      <div className="text-[rgba(0, 0, 0, 0.78)]">{device.type}</div>
      <div className="text-[rgba(0, 0, 0, 0.78)]">
        {typeof device.timezone === "object" && device.timezone !== null
          ? device.timezone.label
          : device.timezone}
      </div>
      <div className="text-[rgba(0, 0, 0, 0.78)]">{device.site}</div>
    </div>
  );
}

// import { DevProps } from "@/services/deviceApi";
// import { HtmlHTMLAttributes, useState } from "react";
// import clsx from "clsx";

// interface DeviceItemProps extends HtmlHTMLAttributes<HTMLDivElement> {
//   device: DevProps;
//   isDraggable?: boolean;
// }

// export default function DeviceItem({
//   device,
//   isDraggable,
//   className,
//   ...rest
// }: DeviceItemProps) {
//   const [dragging, setDragging] = useState(false);

//   const handleDragStart = (
//     e: React.DragEvent<HTMLDivElement>,
//     item: DevProps
//   ) => {
//     setDragging(true);
//     e.dataTransfer.setData("application/json", JSON.stringify(device));
//   };

//   const handleDragEnd = () => {
//     setDragging(false);
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       className={clsx(className, { "bg-blue-200": dragging })}
//       draggable={isDraggable}
//       onDragStart={isDraggable ? (e) => handleDragStart(e, device) : undefined}
//       onDragEnd={isDraggable ? handleDragEnd : undefined}
//       onDragOver={isDraggable ? handleDragOver : undefined}
//       {...rest}
//     >
//       <div className="text-[rgba(0, 0, 0, 0.78)]">{device.serialNumber}</div>
//       <div className="text-[rgba(0, 0, 0, 0.78)]">{device.modem}</div>
//       <div className="text-[rgba(0, 0, 0, 0.78)]">{device.devName}</div>
//       <div className="text-[rgba(0, 0, 0, 0.78)]">{device.type}</div>
//       <div className="text-[rgba(0, 0, 0, 0.78)]">
//         {typeof device.timezone === "object" && device.timezone !== null
//           ? device.timezone.label
//           : device.timezone}
//       </div>
//       <div className="text-[rgba(0, 0, 0, 0.78)]">{device.site}</div>
//     </div>
//   );
// }
