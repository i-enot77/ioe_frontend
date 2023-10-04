type SkeletonProp = {
  classes: string
}

const SkeletonItem = ({ classes }: SkeletonProp) => {
  return (
    <div
      className={`${classes} bg-[#D9D9D9] mx-1 h-6 rounded-md animate-pulse`}
    ></div>
  )
}

export default SkeletonItem
