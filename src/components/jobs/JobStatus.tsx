interface StatusProp {
  jobStatus: string | undefined
  statusClass?: string
}

function JobStatus({ jobStatus, statusClass }: StatusProp) {
  return (
    <>
      {jobStatus === "running" && (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.875em"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              fill="#00c738"
            />
          </svg>
          <span className={`${statusClass} pl-1`}>running</span>
        </div>
      )}
      {jobStatus === "waiting" && (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.875em"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              fill="#808080"
            />
          </svg>
          <span className={`${statusClass} pl-1`}>waiting</span>
        </div>
      )}
      {jobStatus === "failing" && (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.875em"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              fill="#dc3545"
            />
          </svg>
          <span className={`${statusClass} pl-1`}>failing</span>
        </div>
      )}
    </>
  )
}

export default JobStatus
