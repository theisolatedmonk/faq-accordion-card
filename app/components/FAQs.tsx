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
    // const [isBold, setBold] = useState(false);

    const [animationParent] = useAutoAnimate();
    const ref = useOnclickOutside(() => {
      setDropDown(false);
    }); 
  
    function openDropDown() {
      console.log("drop down clicked", isDropDownOpen.toString());
  
      setDropDown(!isDropDownOpen);
       
    }

  return (
   <section  ref={animationParent}
   onClick={openDropDown}
   className="relative cursor-pointer ">
 <div className={`flex flex-col w-full`}>
           <div className="flex items-center gap-2"> 
           <p className={` ${props.class} `}>{props.Questions}</p>
           <Image src={errow} alt={''} className={clsx(" transition-all", {
              "rotate-180 ": isDropDownOpen,
            })}/>
           </div>
           {isDropDownOpen && (
            <p className={`flex flex-col ${props.class} `}>{props.Answer}</p>)}

        </div>

   </section>
       
    
  )
}

