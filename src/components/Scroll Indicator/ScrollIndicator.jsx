import React, { useEffect, useState } from 'react'
import LoadMore from '../Load-More-Data/LoadMore'
const ScrollIndicator = () => {
  let [width, setWidth] = useState(0);
  let HandleScroll = () =>{
    let howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setWidth(howMuchScrolled*100/height);
  }
  useEffect(()=>{
    // onMounting
    window.addEventListener("scroll",HandleScroll);

    // onUnmounting
    return (window.removeEventListener("scroll",()=>{}));
  },[])

  return (
    <div className='box flex flex-col w-full'>
        <div className="scroll-indicator flex flex-col w-full fixed z-10">
          <h1 className='text flex items-center justify-center text-white bg-slate-900 font-semibold text-2xl h-14 w-full'>Scroll Indicator</h1>
          <div className="indicator w-full bg-lime-400 h-2">
            <div className="data h-2 bg-cyan-500" style={{width: `${width}%`}}></div>
          </div>
        </div>
        <div className="products mt-16">
          <LoadMore />
        </div>
    </div>
  )
}

export default ScrollIndicator
