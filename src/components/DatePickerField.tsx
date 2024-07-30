import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <div>
      <DatePicker
        {...field}
        selected={field.value}
        onChange={(val) => setFieldValue(field.name, val)}
        className={className}
        showTimeSelect
        dateFormat="Pp"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-600 self-end text-sm pr-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default DatePickerField;

// import React, { useEffect, useState } from "react";
// import { useField, useFormikContext } from "formik";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { format, isValid } from "date-fns";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// interface DatePickerFieldProps {
//   name: string;
// }

// const DatePickerField: React.FC<DatePickerFieldProps> = ({ name }) => {
//   const { setFieldValue } = useFormikContext();
//   const [field, meta] = useField(name);
//   const [date, setDate] = useState<Date | undefined>(
//     field.value ? new Date(field.value) : undefined
//   );

//   useEffect(() => {
//     if (date && isValid(date)) {
//       setFieldValue(name, date);
//     } else {
//       setFieldValue(name, undefined);
//     }
//   }, [date, setFieldValue, name]);

//   return (
//     <div>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             variant={"outline"}
//             className={cn(
//               "w-[240px] justify-start text-left font-normal",
//               !date && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             {date && isValid(date) ? (
//               format(date, "PPP")
//             ) : (
//               <span>Pick a date</span>
//             )}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0" align="start">
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={setDate}
//             initialFocus
//           />
//         </PopoverContent>
//       </Popover>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// export default DatePickerField;
