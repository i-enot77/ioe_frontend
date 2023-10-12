import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import ModalItem from "./ModalItem";
import Button from './Button';
import { ItemContext } from '../context/ItemsContext';

const style = {
  btn: `rounded border-2 border-gray-400 w-32 h-10 flex justify-center items-center mr-5`
}

const Modal = ( {open, close, onChange, update, add, item, list } ) => {
  const  
    { ifEdit } = useContext(ItemContext);

  return ( 
    open ?
     <div onClick={close} className='fixed z-20 inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-gray-200 p-6 rounded' onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-between items-center'>
            { ifEdit ? 
              <p className='mb-4'>Editing the item</p>
                : 
              <p className='mb-4'>Adding the item</p>
            }
            
            <FontAwesomeIcon className='cursor-pointer' onClick={close} icon={faXmark} size="lg" style={{color: "#343537",}} />
          </div>
          
          <form onSubmit={(e)=>e.preventDefault()} className='bg-white p-3'>
            {list.map((item, index) => 
            <ModalItem content={item} key={index} change={onChange}/>
              )}
            <div className='flex justify-center'>
              { ifEdit ? 

              <Button
                btnName={style.btn}
                handleClick={()=>update(item.id)}
              >
                <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#046c06",}} />
                <span className='pl-1 uppercase'>save</span>
              </Button>
              :
              <Button
                btnName={style.btn}
                handleClick={add}
              >
                <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "#046c06",}} />
                <span className='pl-1 uppercase'>add</span>
              </Button>
              }
              
              <Button
                btnName={style.btn}
                handleClick={close}
              >
                <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#a80000",}} />
                <span className='pl-1 uppercase'>cancel</span>
              </Button>
            </div>
          </form>
        </div>
    </div>
    : null
  )
}

export default Modal