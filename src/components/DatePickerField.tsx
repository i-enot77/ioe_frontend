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
