import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faAt, faUnlock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/ContextProvider';

const Form = () => {
    const  { isLogged, setIsLogged, errMsg, setErrMsg, authenticate } = useContext(AppContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogged){
        navigate('/dashboard')
    }
    }, [isLogged]);

    const[email, setEmail]=useState("");
    const[emailFocus, setEmailFocus] = useState(false);
    const[password, setPassword]=useState("");
    const[type, setType]=useState(true);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        userRef.current.focus();
    }, [errMsg]);

    const changeEmail = (e)=>setEmail(e.target.value);
    const changePassword = (e)=>setPassword(e.target.value);
    const showPassword = () => setType(!type);

    const validate = () => {
        let result;
        //const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; && email.match(isValidEmail)
        if (!(email.length && !password.length)) {
            result = false;
        }
        result = true;
        return result;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        { validate() ? 
            authenticate (email, password)
            .then(data => {
                const accessToken = data?.accessToken;
                setIsLogged(true);
                setErrMsg("");
                setEmail("");
                setPassword("");
                console.log("logged in", data)
            })
            .catch((err) => {
                if (!err) {
                    setErrMsg('No server response')
                }
            })
            
          :  setErrMsg('Invalid entry'); 
        }
    }

    return(
        <div className='h-screen max-w-full flex items-center justify-center'>
        <div className="max-w-2xl bg-gray-300 rounded p-16 my-0 mx-auto w-1/2 md:w-3/4 md:p-10 sm:w-11/12 sm:p-6">
            <h1 className="uppercase text-center font-medium text-2xl sm:text-lg mb-10 sm:mb-6">member login</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <p className='text-red-700'>{errMsg}</p>
                <div className="bg-gray-200 rounded w-4/5 mb-4 flex items-center">
                    <label className="" htmlFor="email">
                        <FontAwesomeIcon className="px-3" icon={faAt} size="lg" />
                    </label>
                    <input id="email" 
                        className=" w-full p-4 font-normal text-base text-gray-400 focus:text-black focus:font-medium rounded" 
                        type="text" 
                        value={email} 
                        onChange={changeEmail} 
                        placeholder="Email"
                        ref={userRef}
                        autoComplete="off"
                        required
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                </div>

                <div className="relative pl-2 bg-gray-200 rounded w-4/5 flex items-center">
                    <label className="" htmlFor="password">
                        <FontAwesomeIcon className="px-3" icon={faUnlock} size="lg" />
                    </label>
                    <input id="password" 
                        className="w-full p-4 font-normal text-base text-gray-400 focus:text-black rounded" 
                        type={(type ? "password" : "text")}
                        value={password} 
                        onChange={changePassword} 
                        placeholder="Password"
                        required
                    />
                        <FontAwesomeIcon onClick={showPassword} className="absolute top1/2 right-2
                        " icon={(type ? faEyeSlash : faEye)} 
                    />
                </div>

                <button className="text-center bg-red-600 rounded w-1/2 sm:w-3/4 p-4 mb-5 mt-10 text-white text-base font-semibold uppercase">
                    log in   
                </button>
                <a href='#' className="text-red-600 underline pr-6">Forgot Password?</a>       
        </form>   
    </div></div>
    )
}
export default Form;