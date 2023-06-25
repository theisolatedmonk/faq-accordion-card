'use client'
import React, { useState } from 'react'
import errow from '@/app/components/images/icon-arrow-down.svg'
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from 'next/image'
import useOnclickOutside from 'react-cool-onclickoutside'
import clsx from 'clsx';

type FAQTypes = {
    Questions : string
    Answer : string
    class : string
}

 export default function 
(props:FAQTypes) {

    const [isDropDownOpen, setDropDown] = useState(false);
    const [bold, setBold] = useState(false);

    const [animationParent] = useAutoAnimate();
    const ref = useOnclickOutside(() => {
      setDropDown(false);
    }); 
  
    function openDropDown() {
      console.log("drop down clicked", isDropDownOpen.toString());
      setDropDown(!isDropDownOpen);
      setBold(!bold);
    }

  return (
   <section  ref={animationParent}
   onClick={openDropDown}
   className="relative cursor-pointer   ">
 <div className={`flex flex-col w-full border-b `}>
           <div className="flex items-center gap-2"> 
           <p  
                className={bold ? "text-[hsl(237,12%,33%)] font-bold" : "text-[hsl(240,6%,50%)]"}
 
           >{props.Questions}</p>
           <Image src={errow} alt={''} className={clsx(" transition-all", {
              "rotate-180 ": isDropDownOpen,
            })}/>
           </div>
           {isDropDownOpen && (
            <p className={`flex flex-col text-[hsl(240,6%,50%)] `}>{props.Answer}</p>)}

        </div>
        {/* "text-[hsl(237,12%,33%)]" hsl(240,6%,50%)   */}
   </section>
       
    
  )
}

