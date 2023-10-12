import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import SidebarItem from './SidebarItem';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';
import arrow from '../assets/img/circle-arrow-right-solid.svg'
import Button from './Button';

const style = {
    btn: `bg-red-700 border-2 rounded border-red-900 uppercase font-medium flex items-center justify-center w-full h-12 overflow-hidden`
}

const Sidebar = () => {
    const  { isLogged, setIsLogged, logout, windowWidth } = useContext(AppContext);
    const[showMenu, setShowMenu] = useState(false);
    const navLogin = useNavigate();
    useEffect(() => {
        if (!isLogged){
        navLogin('/')
    }
    }, [isLogged]);

    useEffect(() => {
        if (windowWidth < 800){
            setShowMenu(false)
    }
    }, []);

    const menuItem = [
        {
            path: '/dashboard',
            icon: faCheck,
            name: 'Dashboard',
        },
        {
            path: '/page1',
            icon: faCheck,
            name: 'Page1',
        },
        {
            path: '/page2',
            icon: faCheck,
            name: 'Page2',
        },
        {
            path: '/page3',
            icon: faCheck,
            name: 'Page3',
        },
    ];
    

    const logOut = () => {
        logout ()
            .then(data => {
                setIsLogged(false);
                console.log("logged out", data)
            })
            .catch((err) => {
                console.log("logout failed", err)
            })
    }

  return (
    <aside className={`${showMenu ? "w-72" : "w-24"} duration-[800ms] bg-gray-300 flex  text-xl mr-7 h-screen sticky top-0 z-20`}>
        <div className='w-full relative flex flex-col items-start justify-between uppercase p-4 pl-6'>
            <div className='w-full'>
                <div className='flex items-center justify-center mb-9'>
                    <div className={`${!showMenu && 'scale-0'} duration-500  origin-right`}>logo</div>
                    <img className={`${!showMenu && 'rotate-180'} duration-500 absolute t-0 -right-2.5 w-7 h-7 cursor-pointer`} onClick={() => setShowMenu(!showMenu)} src={arrow} alt="arrow" />
                </div>
                {
                menuItem.map((item, index) => 
                    <SidebarItem content={item} key={index}>
                        <span className={`duration-700 delay-200 ${!showMenu && 'opacity-0 translate-x-11 overflow-hidden'} `}>{item.name}</span>
                        <span className={`${showMenu && 'hidden'} w-0 z-50 absolute left-56 font-semibold text-gray-900 rounded-md drop-shadow-lg px-0 py-0 overflow-hidden group-hover:px-2 group-hover:py-2 group-hover:left-24 group-hover:duration-300 group-hover:min-w-fit group-hover:bg-red-500`}>{item.name}</span>
                    </SidebarItem>
                )}
            </div>
            <Button
                btnName={style.btn}
                handleClick={logOut}>
                <FontAwesomeIcon className={`${!showMenu && 'translate-x-3.5 duration-500 delay-300'}`} icon={faRightFromBracket}/>
                <span className={`${!showMenu && 'opacity-0 scale-0 origin-right duration-200 delay-0'} duration-500 delay-200 w-[50%] opacity-1 transform-none origin-right`}>logout</span>
            </Button>
        </div>
    </aside>
  )
}
export default Sidebar