import { dropProps } from "./navbar/navTypes"
import { ChildrenProp } from "./types"

const Dropdown = ({
  drop,
  dropClassName,
  children,
}: dropProps & ChildrenProp) => {
  return drop ? <div className={dropClassName}>{children}</div> : null
}

export default Dropdown
