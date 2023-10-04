import { useState, createContext, useEffect } from "react"
import axios from "axios"
import { ChildrenProp } from "../components/types"
import {
  OnClickContext,
  DevArrProps,
  ModemsArrProps,
  JobProp,
} from "./types/onClickContext"
// import { initPeriodicJob, initJob, jobReducer } from "./reducer/jobs"

export const EventsContext = createContext({} as OnClickContext)

export const EventsContextProvider = ({ children }: ChildrenProp) => {
  //open modals on click
  // const [option, setOption] = useState("")
  // assign device modal
  // const [devicesArr, setDevicesArr] = useState<DevArrProps[]>([])
  // const [modemsArr, setModemsArr] = useState<ModemsArrProps[]>([])
  // const [selectedItems, setSelectedItems] = useState<string[]>([])
  // const [initSearchArr, setInitSearchArr] = useState<DevArrProps[]>([])
  // //add/edit device modal
  // const [deviceData, setDeviceData] = useState<DevArrProps>({
  //   id: undefined,
  //   serialNumber: "",
  //   modem: "",
  //   devName: "",
  //   type: "",
  //   loginInfo: {},
  //   timezone: "",
  //   site: "",
  // })
  // // change deviceData state
  // const handleChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   setDeviceData({ ...deviceData, [e.target.name]: e.target.value })
  // }

  // //add device button handler
  // const addDevice = () => {
  //   setOption("add")
  //   console.log(option)
  // }

  // // add device submit button
  // const addDeviceSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setOption("")

  //   const response = await axios.post(
  //     "http://localhost:3500/devices",
  //     deviceData
  //   )
  //   setDevicesArr([...devicesArr, response.data])
  //   setDeviceData({
  //     id: undefined,
  //     serialNumber: "",
  //     modem: "",
  //     devName: "",
  //     type: "",
  //     loginInfo: {},
  //     timezone: "",
  //     site: "",
  //   })
  // }
  // //fetching devices & modems arrays
  // const fetchDevicesModems = () => {
  //   axios
  //     .all([
  //       axios.get("http://localhost:3500/devices"),
  //       axios.get("http://localhost:3500/modems"),
  //     ])
  //     .then(
  //       axios.spread((data1, data2) => {
  //         setDevicesArr(data1.data)
  //         setInitSearchArr(data1.data)
  //         setModemsArr(data2.data)
  //       })
  //     )
  // }
  // //assign device
  // const assignDevice = () => {
  //   setOption("assign")
  //   fetchDevicesModems()
  // }
  // // edit button click handler
  // const editDevice = () => {
  //   setOption("edit")
  //   console.log(option)
  //   const fetchDevices = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3500/devices")
  //       setDevicesArr(response.data)
  //       setInitSearchArr(response.data)
  //       if (!response.data.length) {
  //         console.log("no results")
  //       }
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fetchDevices()
  // }
  // // update device handler
  // const updateDevice = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("edit device")
  //   // setOption("")
  //   console.log(option)
  //   try {
  //     const res = await axios.put(
  //       `http://localhost:3500/devices/${deviceData.id}`,
  //       deviceData
  //     )
  //     setDevicesArr(
  //       devicesArr.map((post) =>
  //         post.id === deviceData.id ? { ...res.data } : post
  //       )
  //     )
  //     setDeviceData({
  //       id: 0,
  //       serialNumber: "",
  //       modem: "",
  //       devName: "",
  //       type: "",
  //       loginInfo: {},
  //       timezone: "",
  //       site: "",
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // delete button click handler
  // const deviceDelete = async () => {
  //   setOption("delete")
  //   console.log(option)

  //   try {
  //     const response = await axios.get("http://localhost:3500/devices")
  //     setDevicesArr(response.data)
  //     console.log(devicesArr)
  //     if (!response.data.length) {
  //       console.log("no results")
  //     }
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // // delete device handler
  // const deleteDevHandler = async (id: number | undefined) => {
  //   try {
  //     await axios.delete(`http://localhost:3500/devices/${id}`)
  //     setDevicesArr(devicesArr.filter((item) => item.id !== id))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  //jobs
  //parse time from string
  // const getTimeString = (time: string | undefined): Date | void => {
  //   if (time) {
  //     const parsedTime = new Date(time)
  //     return parsedTime
  //   } else return
  // }

  //get jobs array
  // const [jobsArr, setJobsArr] = useState<JobProp[]>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3500/jobs")
  //       setJobsArr(response.data)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fetchData()
  // }, [])
  // //add/edit jobs modal
  // const addJob = () => {
  //   setOption("addJob")
  // }

  // //edit button click
  // const editJobClick = () => {
  //   setOption("editJob")
  // }

  // //delete button click
  // const deleteJobClick = () => {
  //   setOption("deleteJob")
  // }

  //delete modal handler
  // const deleteHandler = (id: number | undefined) => {
  //   try {
  //     axios.delete(`http://localhost:3500/jobs/${id}`)
  //     const newArr = jobsArr.filter((item) => item.id !== id)
  //     setJobsArr(newArr)
  //     setOption("")
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const value: OnClickContext = {
    // option,
    // setOption,
    // // addDevice,
    // assignDevice,
    // editDevice,
    // deviceDelete,
    // devicesArr,
    // setDevicesArr,
    // modemsArr,
    // selectedItems,
    // setSelectedItems,
    // initSearchArr,
    // setInitSearchArr,
    // deviceData,
    // setDeviceData,
    // handleChange,
    // updateDevice,
    // addDeviceSubmit,
    // deleteDevHandler,
    // fetchDevicesModems,
    //jobs
    // jobsArr,
    // setJobsArr,
    // addJob,
    // initPeriodicJob,
    // initJob,
    // jobReducer,
    // editJobClick,
    // deleteJobClick,
    // deleteHandler,
  }

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  )
}
