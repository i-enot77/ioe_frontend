import { useField, useFormikContext } from "formik";
import TimezoneSelect, { ITimezone } from "react-timezone-select";

interface TimezoneSelectFieldProps {
  name: string;
}

const TimezoneSelectField = ({ name }: TimezoneSelectFieldProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (timezone: ITimezone) => {
    setFieldValue(name, timezone);
  };

  return (
    <>
      <label htmlFor={name}>Timezone</label>
      <TimezoneSelect value={field.value} onChange={handleChange} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TimezoneSelectField;

// import { useState } from "react";
// import TimezoneSelect, { ITimezone } from "react-timezone-select";

// export const TimezonePicker = () => {
//   const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
//     Intl.DateTimeFormat().resolvedOptions().timeZone
//   );
//   return (
//     <div>
//       <h2 className="text-sm text-black mb-1">Timezone</h2>
//       <div className="select-wrapper text-sm">
//         <TimezoneSelect
//           value={selectedTimezone}
//           onChange={setSelectedTimezone}
//         />
//       </div>
//       {/* <div><pre>{JSON.stringify(selectedTimezone, null, 2)}</pre></div> */}
//     </div>
//   );
// };
