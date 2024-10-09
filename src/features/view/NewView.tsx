import { useCallback, useState } from "react";
import { useAppDispatch } from "@/services/hooks";
import { Field, Formik } from "formik";
import { identifierSchema } from "@/components/schema";
import debounce from "lodash/debounce";
import Button from "@/components/Button";
import { useCreateViewMutation, ViewWithoutID } from "@/services/viewApi";
import { DevProps } from "@/services/deviceApi";
import { toggleViewModal } from "@/services/slices/option";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { addDevice, setDevArr } from "@/services/slices/devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NewView = () => {
  const [viewDevices, setViewDevices] = useState<DevProps[]>([]);
  const [identifier, setIdentifier] = useState("");

  const availableDevices = useSelector(
    (state: RootState) => state.device.devices
  );

  const dispatch = useAppDispatch();
  const [create] = useCreateViewMutation();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    if (data) {
      try {
        const item = JSON.parse(data);
        const existingItem = viewDevices.find(
          (device) => device.id === item.id
        );
        if (!existingItem) {
          setViewDevices([...viewDevices, item]);
          dispatch(
            setDevArr(
              availableDevices.filter((device) => device.id !== item.id)
            )
          );
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else console.log("no data");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const debouncedDispatch = useCallback(
    debounce((value: string) => setIdentifier(value), 500),
    [dispatch]
  );

  const initialValues = { identifier: identifier || "" };

  const createView = (item: ViewWithoutID) => {
    create(item);
    setIdentifier("");
    setViewDevices([]);
    dispatch(toggleViewModal(false));
  };

  const deleteDevice = (viewDev: DevProps) => {
    setViewDevices(viewDevices.filter((device) => device.id !== viewDev.id));
    dispatch(addDevice(viewDev));
  };

  const style = {
    field: `flex flex-col mb-2 last:mb-0`,
    input: `px-2 py-1 rounded border border-stone-400 mt-1`,
    error: `text-red-600 self-end text-sm pr-2`,
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-md p-5">
      <div>
        <h2 className="title pb-5">New View:</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={identifierSchema}
          enableReinitialize
          onSubmit={() => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
          }}
        >
          {({ errors, touched, handleChange }) => (
            <div className="py-3">
              <div className={style.field}>
                <label htmlFor="identifier">Add view identifier:</label>
                <Field
                  id="identifier"
                  type="text"
                  name="identifier"
                  className={style.input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    debouncedDispatch(e.target.value);
                  }}
                />
                {errors.identifier && touched.identifier ? (
                  <div className={style.error}>Pole jest wymagane</div>
                ) : null}
              </div>
            </div>
          )}
        </Formik>
      </div>

      <div
        className="flex-grow"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {viewDevices.length ? (
          viewDevices.map((item) => (
            <div
              key={item.id}
              className="w-full flex items-center justify-between mb-2 last:mb-0"
            >
              <div className="w-full grid grid-rows-1 grid-cols-3 gap-2">
                <div>{item.serialNumber}</div>
                <div>{item.devName}</div>
                <div>{item.type}</div>
              </div>
              <Button onClick={() => deleteDevice(item)}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "#000000" }}
                  size="lg"
                />
              </Button>
            </div>
          ))
        ) : (
          <div className="w-full h-full">Drag and drop devices</div>
        )}
      </div>
      <Button
        className="bg-[#2A254B] rounded px-8 py-2 uppercase font-medium text-white w-1/2 mx-auto"
        onClick={() => createView({ identifier, devices: viewDevices })}
      >
        Create
      </Button>
    </div>
  );
};

export default NewView;
