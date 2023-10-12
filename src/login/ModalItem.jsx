
const ModalItem = ({content:{inputLabel, labelValue, inputName, inputValue}, change}) => {
  return (
    <div className='flex justify-center items-center mb-4'>
        <label className='w-40' htmlFor={inputLabel}>{labelValue}</label>
        <input name={inputName} 
                className=" w-96 p-2 font-normal text-base text-black rounded border-2 border-gray-400 focus:text-black focus:font-medium " 
                type="text" 
                value={inputValue}
                onChange={change}
                />
                
    </div>
  )
}

export default ModalItem