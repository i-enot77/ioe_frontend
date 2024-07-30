export type JobStatusProp = {
  jobStatus: string;
  statusClass?: string;
};

function JobStatus({ jobStatus, statusClass }: JobStatusProp) {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="0.875em"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
          fill={
            jobStatus === "running"
              ? "#00c738"
              : jobStatus === "waiting"
              ? "#808080"
              : "#dc3545"
          }
        />
      </svg>
      <span className={`${statusClass} pl-1`}>
        {jobStatus === "running"
          ? "running"
          : jobStatus === "waiting"
          ? "waiting"
          : "failing"}
      </span>
    </div>
  );
}

export default JobStatus;
