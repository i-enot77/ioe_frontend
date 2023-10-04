import { useState, useEffect } from "react"
import axios from "axios"

export default function useFetchData(axiosProp: any) {
  const [dataArr, setDataArr] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(axiosProp)
        setDataArr(response.data)
        console.log(dataArr)
        console.log("hello world")
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])
  return {
    dataArr,
    setDataArr,
  }
}
