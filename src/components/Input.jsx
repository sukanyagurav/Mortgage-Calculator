import React,{forwardRef} from 'react'

const Input = (({text,position,padding,errors,register,name,valueAsNumber,min,max}) => {
  function onInput(e){
    if(e.key=='e'){
      e.preventDefault()
    }
  }
  return (
    <>    <div className={` rounded-md border-[1.5px] overflow-hidden relative inputs ${errors ?  'border-red' : 'border-slate_500'}`}>
        <span className={`${position} absolute  font-bold  p-3 py-2 ${errors ?  'bg-red' : 'bg-slate_100'} `}>{text}</span>
        <input type="number" className={`w-full bg-transparent transition-all outline-none  font-inherit  ${padding} block text-left py-2`} name={name} onKeyDown={onInput} {...register(name,{valueAsNumber,require:true})} min={min} max={max}/>
       
    </div>
    </>
  )
})

export default Input
