import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"

const SidebarItem = ({content:{path, },children}) => {
  return (
    <NavLink to={path} className='group w-full flex items-center justify-start gap-3 mb-1.5 rounded-md p-3 duration-500 hover:bg-red-500'>
        <FontAwesomeIcon icon={faImage} size="xl" />
       {children}
    </NavLink>
  )
}
export default SidebarItem