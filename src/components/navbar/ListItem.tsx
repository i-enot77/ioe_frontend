import { Link } from "react-router-dom"
import { navProps } from "./navTypes"

const ListItem = ({ listData: { src, content } }: navProps) => {
  return <Link to={src}>{content}</Link>
}

export default ListItem
