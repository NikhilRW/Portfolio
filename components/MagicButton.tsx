import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import "@/app/globals.css"
function MagicButton({title,className,handleClick}:{title:string,className?:string,handleClick?:()=>void}) {
  return (
    <button onClick={handleClick} className="myText2 relative inline-flex h-12 overflow-hidden rounded-xl p-[1px]  focus:outline-none">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={`inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-xl ${className?"":"bg-slate-950"} myText2 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl`}>
    {title}
    <FaLocationArrow size={20}/>
  </span>
</button>
  )
}

export default MagicButton