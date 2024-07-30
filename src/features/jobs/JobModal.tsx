import { Field, Form, Formik, FormikHelpers } from "formik";
import { useAppDispatch } from "../../services/hooks";
import { initOption } from "../../services/slices/option";
import {
  useAddJobItemMutation,
  useUpdateJobItemMutation,
} from "../../services/jobsApi";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { JobProp } from "@/services/jobsApi";
import { initJobData } from "@/services/slices/jobs";
import DatePickerField from "@/components/DatePickerField";
import { jobSchema } from "@/components/schema";

const JobModal: React.FC<{ isEdit: boolean }> = ({ isEdit }) => {
  const dispatch = useAppDispatch();
  const jobData = useSelector((state: RootState) => state.jobs.jobData);

  const [addJob] = useAddJobItemMutation();
  const [updateJob] = useUpdateJobItemMutation();

  const addJobSubmit = (values: JobProp, actions: FormikHelpers<JobProp>) => {
    addJob(values).then(() => {
      actions.setSubmitting(false);
      dispatch(initOption());
      dispatch(initJobData());
    });
  };

  const editJobSubmit = (values: JobProp, actions: FormikHelpers<JobProp>) => {
    updateJob(values).then(() => {
      actions.setSubmitting(false);
      dispatch(initJobData());
    });
  };

  const style = {
    header: "text-lg font-medium my-1",
    field: "flex flex-col mb-2 last:mb-0",
    label: "",
    input: "px-2 py-1 rounded border border-stone-400 mt-1",
    error: "text-red-600 self-end text-sm pr-2",
    wrapper: "",
  };

  const initialValues: JobProp =
    isEdit && jobData
      ? {
          ...jobData,
          startDate: jobData.startDate
            ? new Date(jobData.startDate)
            : new Date(),
          stopDate: jobData.stopDate ? new Date(jobData.stopDate) : new Date(),
        }
      : {
          deviceName: "",
          period: 0,
          read: 0,
          readParams: null,
          status: "",
          type: "",
          startDate: new Date(),
          stopDate: new Date(),
        };

  return (
    <div
      className={`bg-white px-8 rounded-md w-[30vw] overflow-y-auto flex flex-col justify-between ${
        isEdit ? "h-full" : "h-[75vh] "
      }`}
    >
      <h2 className="title py-2">{isEdit ? "Edit a job" : "Add a job"}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={jobSchema}
        onSubmit={isEdit ? editJobSubmit : addJobSubmit}
        enableReinitialize
      >
        {({ setFieldValue, errors, touched, values }) => (
          <Form className="py-3">
            <div className={style.field}>
              <label htmlFor="deviceName">Device:</label>
              <Field
                id="deviceName"
                type="text"
                name="deviceName"
                value={values.deviceName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("deviceName", e.target.value)
                }
                className={style.input}
              />
              {errors.deviceName && touched.deviceName ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="period">Period:</label>
              <Field
                id="period"
                type="number"
                name="period"
                value={values.period}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("period", e.target.value)
                }
                className={style.input}
              />
              {errors.period && touched.period ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="read">Read:</label>
              <Field
                id="read"
                type="number"
                name="read"
                value={values.read}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("read", e.target.value)
                }
                className={style.input}
              />
              {errors.read && touched.read ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="readParams">Read Params:</label>
              <Field
                as="textarea"
                id="readParams"
                name="readParams"
                value={values.readParams?.params || ""}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFieldValue("readParams", { params: e.target.value })
                }
                className={style.input}
                maxLength={50}
              />
            </div>

            <div className={style.field}>
              <label htmlFor="jobStatus">Status:</label>
              <Field
                id="jobStatus"
                type="text"
                name="status"
                value={values.status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("status", e.target.value)
                }
                className={style.input}
              />
              {errors.status && touched.status ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="jobType">Job type:</label>
              <Field
                id="jobType"
                type="text"
                name="type"
                value={values.type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("type", e.target.value)
                }
                className={style.input}
              />
              {errors.type && touched.type ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="startDate">Start Date:</label>
              <DatePickerField name="startDate" className={style.input} />
              {errors.startDate && touched.startDate ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="stopDate">Stop Date:</label>
              <DatePickerField name="stopDate" className={style.input} />
              {errors.stopDate && touched.stopDate ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-[#2A254B] rounded px-8 py-2 uppercase font-medium text-white mx-auto mt-4"
              >
                {isEdit ? "Save changes" : "Create"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobModal;

// import { Field, Form, Formik, FormikHelpers } from "formik";
// import { useAppDispatch } from "../../services/hooks";
// import { initOption } from "../../services/slices/option";
// import {
//   useAddJobItemMutation,
//   useUpdateJobItemMutation,
// } from "../../services/jobsApi";
// import { useSelector } from "react-redux";
// import { RootState } from "@/services/store";
// import { JobProp } from "@/services/jobsApi";
// import { initJobData } from "@/services/slices/jobs";
// import { JobSchema, jobSchema } from "@/components/schema";
// import DatePickerField from "@/components/DatePickerField";

// const JobModal: React.FC<{ isEdit: boolean }> = ({ isEdit }) => {
//   const dispatch = useAppDispatch();
//   const jobData = useSelector((state: RootState) => state.jobs.jobData);

//   const [addJob] = useAddJobItemMutation();
//   const [updateJob] = useUpdateJobItemMutation();

//   const addJobSubmit = (
//     values: JobSchema,
//     actions: FormikHelpers<JobSchema>
//   ) => {
//     // Convert dates to string before sending to server
//     const jobValues = {
//       ...values,
//       startDate: values.startDate.toISOString(),
//       stopDate: values.stopDate.toISOString(),
//     };
//     addJob(jobValues).then(() => {
//       actions.setSubmitting(false);
//       dispatch(initOption());
//       dispatch(initJobData());
//     });
//   };

//   const editJobSubmit = (
//     values: JobSchema,
//     actions: FormikHelpers<JobSchema>
//   ) => {
//     // Convert dates to string before sending to server
//     const jobValues = {
//       ...values,
//       startDate: values.startDate.toISOString(),
//       stopDate: values.stopDate.toISOString(),
//     };
//     updateJob(jobValues).then(() => {
//       actions.setSubmitting(false);
//       dispatch(initJobData());
//     });
//   };

//   const style = {
//     header: `text-lg font-medium my-1`,
//     field: `flex flex-col mb-2 last:mb-0`,
//     label: ``,
//     input: `px-2 py-1 rounded border border-stone-400 mt-1`,
//     error: `text-red-600 self-end text-sm pr-2`,
//     wrapper: ``,
//   };

//   return (
//     <div>
//       <h2 className="title mb-5">{isEdit ? "Edit a job" : "Add a job"}</h2>
//       <Formik
//         initialValues={{
//           ...jobData,
//           startDate: jobData.startDate
//             ? new Date(jobData.startDate)
//             : new Date(),
//           stopDate: jobData.stopDate ? new Date(jobData.stopDate) : new Date(),
//         }}
//         validationSchema={jobSchema}
//         onSubmit={isEdit ? editJobSubmit : addJobSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form className="">
//             <div className={style.field}>
//               <label htmlFor="deviceName">Device:</label>
//               <Field
//                 id="deviceName"
//                 type="text"
//                 name="deviceName"
//                 value={jobData.deviceName}
//                 className={style.input}
//               />
//               {errors.deviceName && touched.deviceName ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className={style.field}>
//               <label htmlFor="period">Period:</label>
//               <Field
//                 id="period"
//                 type="number"
//                 name="period"
//                 value={jobData.period}
//                 className={style.input}
//               />
//               {errors.period && touched.period ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div>
//               <label htmlFor="startDate">Start date:</label>
//               <Field
//                 name="startDate"
//                 value={jobData.startDate}
//                 component={DatePickerField}
//               />
//             </div>

//             <div>
//               <label htmlFor="stopDate">Stop date:</label>
//               <Field
//                 name="stopDate"
//                 value={jobData.stopDate}
//                 component={DatePickerField}
//               />
//             </div>

//             <div className={style.field}>
//               <label htmlFor="read">Read:</label>
//               <Field
//                 id="read"
//                 type="number"
//                 name="read"
//                 value={jobData.read}
//                 className={style.input}
//               />
//               {errors.read && touched.read ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className={style.field}>
//               <label htmlFor="readParams">Read Params:</label>
//               <Field
//                 as="textarea"
//                 id="readParams"
//                 name="readParams"
//                 value={jobData.readParams}
//                 className={style.input}
//                 maxLength={50}
//               />
//             </div>

//             <div className={style.field}>
//               <label htmlFor="jobStatus">Status:</label>
//               <Field
//                 id="jobStatus"
//                 type="text"
//                 name="jobStatus"
//                 value={jobData.status}
//                 className={style.input}
//               />
//               {errors.status && touched.status ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className={style.field}>
//               <label htmlFor="jobType">Job type:</label>
//               <Field
//                 id="jobType"
//                 type="text"
//                 name="jobType"
//                 value={jobData.type}
//                 className={style.input}
//               />
//               {errors.type && touched.type ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className="flex justify-between">
//               <button
//                 type="submit"
//                 className="bg-[#2A254B] rounded px-8 py-2  uppercase font-medium text-white mx-auto mt-4"
//               >
//                 {isEdit ? "Save changes" : "Create"}
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default JobModal;

// import { Field, Form, Formik, FormikHelpers } from "formik";
// import { useAppDispatch } from "../../services/hooks";
// import { initOption } from "../../services/slices/option";
// import {
//   useAddJobItemMutation,
//   useUpdateJobItemMutation,
// } from "../../services/jobsApi";
// import { useSelector } from "react-redux";
// import { RootState } from "@/services/store";
// import { JobProp } from "@/services/jobsApi";
// import { initJobData } from "@/services/slices/jobs";
// import { jobSchema } from "@/components/schema";
// import DatePickerField from "@/components/DatePickerField";

// const JobModal: React.FC<{ isEdit: boolean }> = ({ isEdit }) => {
//   const dispatch = useAppDispatch();
//   const jobData = useSelector((state: RootState) => state.jobs.jobData);

//   const [addJob] = useAddJobItemMutation();
//   const [updateJob] = useUpdateJobItemMutation();

//   // const handleChange = (e: EditInputProp) => {
//   //   const { name, value } = e.target;
//   //   dispatch(updatePeriodicJobInput({ ...periodicJobData, [name]: value }));
//   // };

//   // const addJobSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   dispatch(initOption());
//   //   addJob(periodicJobData);
//   // };

//   const addJobSubmit = (values: JobProp, actions: FormikHelpers<JobProp>) => {
//     addJob(values).then(() => {
//       // dispatch(setDeviceData(values));
//       actions.setSubmitting(false);
//       dispatch(initOption());
//       dispatch(initJobData());
//     });
//   };

//   const editJobSubmit = (values: JobProp, actions: FormikHelpers<JobProp>) => {
//     updateJob(values).then(() => {
//       actions.setSubmitting(false);
//       dispatch(initJobData());
//     });
//   };

//   const style = {
//     header: `text-lg font-medium my-1`,
//     field: `flex flex-col mb-2 last:mb-0`,
//     label: ``,
//     input: `px-2 py-1 rounded border border-stone-400 mt-1`,
//     error: `text-red-600 self-end text-sm pr-2`,
//     wrapper: ``,
//   };

//   return (
//     <div>
//       <h2 className="title mb-5">{isEdit ? "Edit a job" : "Add a job"}</h2>
//       <Formik
//         initialValues={jobData}
//         validationSchema={jobSchema}
//         onSubmit={isEdit ? editJobSubmit : addJobSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form className="">
//             <div className={style.field}>
//               <label htmlFor="deviceName">Device:</label>
//               <Field
//                 id="deviceName"
//                 type="text"
//                 name="deviceName"
//                 className={style.input}
//               />
//               {errors.deviceName && touched.deviceName ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className={style.field}>
//               <label htmlFor="period">Period:</label>
//               <Field
//                 id="period"
//                 type="number"
//                 name="period"
//                 className={style.input}
//               />
//               {errors.period && touched.period ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div>
//               <label htmlFor="startDate">Start date:</label>
//               <Field name="startDate" component={DatePickerField} />
//             </div>

//             <div>
//               <label htmlFor="stopDate">Stop date:</label>
//               <Field name="stopDate" component={DatePickerField} />
//             </div>

//             <div className={style.field}>
//               <label htmlFor="read">Read:</label>
//               <Field
//                 id="read"
//                 type="number"
//                 name="read"
//                 className={style.input}
//               />
//               {errors.read && touched.read ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className={style.field}>
//               <label htmlFor="readParams">Read Params:</label>
//               <Field
//                 as="textarea"
//                 id="readParams"
//                 name="readParams"
//                 className={style.input}
//                 maxLength={50}
//               />
//             </div>

//             <div className={style.field}>
//               <label htmlFor="jobStatus">Status:</label>
//               <Field
//                 id="jobStatus"
//                 type="text"
//                 name="jobStatus"
//                 className={style.input}
//               />
//               {errors.status && touched.status ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className={style.field}>
//               <label htmlFor="jobType">Job type:</label>
//               <Field
//                 id="jobType"
//                 type="text"
//                 name="jobType"
//                 className={style.input}
//               />
//               {errors.type && touched.type ? (
//                 <div className={style.error}>Pole jest wymagane</div>
//               ) : null}
//             </div>

//             <div className="flex justify-between">
//               <button
//                 type="submit"
//                 className="bg-[#2A254B] rounded px-8 py-2  uppercase font-medium text-white mx-auto mt-4"
//               >
//                 {isEdit ? "Save changes" : "Create"}
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default JobModal;
