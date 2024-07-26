import React from 'react'

const Input = ({text,position,padding,min}) => {
  return (
    <div className="rounded-md border-[1.5px] overflow-hidden border-slate_500 relative inputs">
        <span className={`${position} absolute bg-slate_100 font-bold text-slate_700 p-3 py-2 `}>{text}</span>
        <input type="number" className={`w-full bg-transparent transition-all outline-none  font-inherit ${padding} block text-left py-2`} min={min}/>
    </div>
    
  )
}

export default Input
