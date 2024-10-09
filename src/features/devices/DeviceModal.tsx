import { Field, Form, Formik, FormikHelpers } from "formik";
import { useAppDispatch } from "../../services/hooks";
import { initOption } from "../../services/slices/option";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { deviceSchema } from "../../components/schema";
import {
  DevProps,
  useAddDevItemMutation,
  useUpdateDevItemMutation,
} from "../../services/deviceApi";
import TimezoneSelectField from "@/components/TimezoneSelectField";
import { initDevData } from "@/services/slices/devices";

// const style = {
//   inputClass: `border border-[#EEF3F8] rounded px-4 py-1 mt-1 placeholder:text-sm placeholder:text-[#808080]`,
//   labelClass: `text-sm text-black flex flex-col mb-4 last:mb-0`,
//   btn: `bg-[#87C4E7] rounded-lg text-white w-full py-1 text-base font-bold mt-3`,
//   wrapper: `bg-white px-16 py-6 rounded-md`,
// };

const DeviceModal: React.FC<{ isEdit: boolean }> = ({ isEdit }) => {
  const dispatch = useAppDispatch();
  const deviceData = useSelector((state: RootState) => state.device.deviceData);

  const [addDev] = useAddDevItemMutation();
  const [updateDev] = useUpdateDevItemMutation();

  const addDeviceSubmit = (
    values: DevProps,
    actions: FormikHelpers<DevProps>
  ) => {
    const { id, ...devValues } = values;
    addDev(devValues).then(() => {
      // dispatch(setDeviceData(values));
      actions.setSubmitting(false);
      dispatch(initOption());
      dispatch(initDevData());
    });
  };

  const editDeviceSubmit = (
    values: DevProps,
    actions: FormikHelpers<DevProps>
  ) => {
    updateDev(values).then(() => {
      actions.setSubmitting(false);
      dispatch(initDevData());
    });
  };

  const initialValues: DevProps =
    isEdit && deviceData
      ? deviceData
      : {
          id: "",
          serialNumber: "",
          modem: "",
          devName: "",
          type: "",
          loginInfo: null,
          timezone: "",
          site: "",
        };

  const style = {
    header: `text-lg font-medium my-1`,
    field: `flex flex-col mb-2 last:mb-0`,
    label: ``,
    input: `px-2 py-1 rounded border border-stone-400 mt-1`,
    error: `text-red-600 self-end text-sm pr-2`,
    wrapper: ``,
  };

  return (
    <div
      className={`bg-white px-8 rounded-md w-[30vw] overflow-y-auto flex flex-col justify-between ${
        isEdit ? "h-full" : "h-[70vh] "
      }`}
    >
      <h2 className="title py-2">
        {isEdit ? "Edit a device:" : "Add a device:"}
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={deviceSchema}
        onSubmit={isEdit ? editDeviceSubmit : addDeviceSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="py-3">
            <div className={style.field}>
              <label htmlFor="serialNumber">Serial number:</label>
              <Field
                id="serialNumber"
                type="text"
                name="serialNumber"
                value={values.serialNumber}
                className={style.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("serialNumber", e.target.value)
                }
              />
              {errors.serialNumber && touched.serialNumber ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="modem">Modem:</label>
              <Field
                id="modem"
                type="text"
                name="modem"
                value={values.modem}
                className={style.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("modem", e.target.value)
                }
              />
              {errors.modem && touched.modem ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="devName">Device name:</label>
              <Field
                id="devName"
                type="text"
                name="devName"
                value={values.devName}
                className={style.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("devName", e.target.value)
                }
              />
              {errors.devName && touched.devName ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="type">Device type:</label>
              <Field
                id="type"
                type="text"
                name="type"
                value={values.type}
                className={style.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("type", e.target.value)
                }
              />
              {errors.type && touched.type ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="loginInfo">Login information:</label>
              <Field
                as="textarea"
                id="loginInfo"
                name="loginInfo"
                value={values.loginInfo || ""}
                className={style.input}
                maxLength={100}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFieldValue("loginInfo", e.target.value)
                }
              />
            </div>

            <div className={style.field}>
              <label htmlFor="site">Site:</label>
              <Field
                id="site"
                type="text"
                name="site"
                value={values.site}
                className={style.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("site", e.target.value)
                }
              />
              {errors.site && touched.site ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <TimezoneSelectField name="timezone" />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-[#2A254B] rounded px-8 py-2  uppercase font-medium text-white mx-auto mt-4"
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
export default DeviceModal;
