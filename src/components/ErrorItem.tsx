import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import { SerializedError } from "@reduxjs/toolkit"

type ErrorProp = {
  error: FetchBaseQueryError | SerializedError | undefined
}

function ErrorItem({ error }: ErrorProp) {
  const errorToString = JSON.stringify(error)
  return <>{error ? <div>Error: {errorToString}</div> : null}</>
}

export default ErrorItem
