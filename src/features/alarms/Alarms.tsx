import { AlarmItem } from "./AlarmItem";
import { useGetAlarmsQuery } from "../../services/alarmApi";

const style = {
  main: `rounded-md px-6 pb-5 bg-white`,
  item: `flex flex-wrap justify-between items-center border border-[#E4E6EB] p-2 mb-2 last:mb-0 rounded-md`,
  title: `font-bold text-lg mb-3 sticky top-0 bg-white pt-5 pb-3`,
};

export default function Alarms() {
  const { data: alarmsData } = useGetAlarmsQuery();

  const getTimeString = (time: string): Date => {
    const parsedTime = new Date(time);
    return parsedTime;
  };

  return (
    <>
      {alarmsData?.map((item) => (
        <AlarmItem
          key={item.id}
          deviceName={item.deviceName}
          job={item.job}
          status={item.status}
          time={getTimeString(item.time)}
        />
      ))}
    </>
  );
}
