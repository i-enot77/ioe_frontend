import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faSortDown,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { navItems } from "../assets/data/navData";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Navbar() {
  const style = {
    menuItem: `font-semibold mr-6`,
    deviceMenu: `flex flex-col absolute left-0 top-[4rem] w-full bg-white z-100 py-2 px-24 oveflow-hidden`,
    userMenu: `flex flex-col items-end absolute right-0 top-[4rem] w-full bg-white z-100 py-2 px-16 oveflow-hidden`,
  };
  return (
    <nav className="w-full bg-white px-8 py-6 flex justify-between">
      <div className="flex">
        <TabGroup>
          <TabList>
            <Tab className={style.menuItem}>
              <Link to="/">Logo</Link>
            </Tab>

            {navItems.map((item, index) => (
              <Tab key={index} className={style.menuItem}>
                <Link to={item.src}>{item.content}</Link>
              </Tab>
            ))}
          </TabList>
        </TabGroup>

        <Menu>
          <MenuButton className={style.menuItem}>
            <span className="pr-1">Devices</span>
            <FontAwesomeIcon icon={faSortDown} />
          </MenuButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-700"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems anchor="bottom" className={style.deviceMenu}>
              <MenuItem>
                <Link to={"/"}>Current active</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/"}>Dead devices</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/"}>All devices</Link>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      <Menu>
        <MenuButton>
          <span className="pr-1.5 font-semibold">Account</span>
          <span>
            <FontAwesomeIcon className="pr-1" icon={faCircleUser} size="xl" />
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems anchor="bottom" className={style.userMenu}>
            <MenuItem>
              <Link to={"/test"} className="mb-1">
                <span>John Doe </span>
                <FontAwesomeIcon icon={faCircleUser} />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/test"}>
                <span>Settings </span>
                <FontAwesomeIcon icon={faGear} />
              </Link>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </nav>
  );
}

export default Navbar;
