import { Field, Form, Formik, FormikHelpers } from "formik";
import { useAppDispatch } from "../../services/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { modemSchema } from "@/components/schema";
import { ModemsProps, useUpdateModemItemMutation } from "@/services/modemApi";
import { initModemItem } from "@/services/slices/modems";
import { style } from "../config/style";

function EditModem() {
  const dispatch = useAppDispatch();
  const modemItem = useSelector((state: RootState) => state.modems.modemItem);
  const [editModem] = useUpdateModemItemMutation();

  const editModemSubmit = (
    values: ModemsProps,
    actions: FormikHelpers<ModemsProps>
  ) => {
    editModem(values).then(() => {
      actions.setSubmitting(false);
      dispatch(initModemItem());
    });
  };

  return (
    <div className="bg-white px-16 py-6 rounded-md">
      <Formik
        initialValues={modemItem}
        validationSchema={modemSchema}
        onSubmit={editModemSubmit}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <Form className="">
            <div className={style.field}>
              <label htmlFor="modemName">Modem Name:</label>
              <Field
                id="modemName"
                type="text"
                name="modemName"
                className={style.input}
              />
              {errors.modemName && touched.modemName ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="imei">Imei:</label>
              <Field
                id="imei"
                type="text"
                name="imei"
                className={style.input}
              />
              {errors.imei && touched.imei ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="ip">IP:</label>
              <Field id="ip" type="text" name="ip" className={style.input} />
              {errors.ip && touched.ip ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="version">Version:</label>
              <Field
                id="version"
                type="text"
                name="version"
                className={style.input}
              />
              {errors.version && touched.version ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="config">Config information:</label>
              <Field
                as="textarea"
                id="config"
                name="config"
                className={style.input}
                maxlength={100}
              />
            </div>

            <div className={style.field}>
              <label htmlFor="location">Location:</label>
              <Field
                id="location"
                type="text"
                name="location"
                className={style.input}
              />
              {errors.location && touched.location ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className={style.field}>
              <label htmlFor="type">Type:</label>
              <Field
                id="type"
                type="text"
                name="type"
                className={style.input}
              />
              {errors.type && touched.type ? (
                <div className={style.error}>Pole jest wymagane</div>
              ) : null}
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-[#2A254B] rounded px-8 py-2  uppercase font-medium text-white mx-auto mt-4"
              >
                Save changes
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* <Form formClass={"flex flex-col"} submit={editModemSubmit}>
        {modemData.map((item, index) => (
          <InputItem
            key={index}
            label={item.label}
            type={item.type}
            inputName={item.inputName}
            placeholder={item.placeholder}
            id={item.id}
            inputValue={modemItem[item.inputName] ?? ""}
            onChangeInputHandler={handleChange}
            inputClassName={style.inputClass}
            labelClassName={style.labelClass}
          />
        ))}
        <TextareaItem
          textareaName="config"
          placeholderItem="Enter modem login info as JSON type"
          label="Config"
          id="config"
          itemValue={modemItem.config}
          onChangeHandler={handleChange}
          textareaClassName={style.inputClass}
          labelClassName={style.labelClass}
          maxlength={100}
        />

        <Button buttonClass={style.btn}>Save</Button>
      </Form> */}
    </div>
  );
}

export default EditModem;
