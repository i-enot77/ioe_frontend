type HeaderStyleProp = {
  styleProp: string
}

function JobDetailsHeader({ styleProp }: HeaderStyleProp) {
  const jobTitles = [
    "Read",
    "Start date",
    "Stop date",
    "Status",
    "Period",
    "Type",
  ]

  return (
    <div className={`${styleProp} bg-[#F3F2EF]`}>
      {jobTitles.map((title, index) => (
        <span key={index}>{title}</span>
      ))}
    </div>
  )
}

export default JobDetailsHeader
