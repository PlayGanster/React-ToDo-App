import React from 'react';
import {BsCheckLg} from 'react-icons/bs';

const Check = ({isCompleted}) => {
  return (
    <div className={`w-2 h-2 rounded-2xl border-2 p-2 ${isCompleted ? 'bg-white' : ''} flex justify-center items-center`}>
        {isCompleted && <BsCheckLg size={18} className='text-black shrink-0'/>}
    </div>
  )
}

export default Check