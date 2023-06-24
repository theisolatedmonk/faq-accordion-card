
import React from 'react'
import errow from '@/app/components/images/icon-arrow-down.svg'
import Image from 'next/image'

type FAQTypes = {
    Questions : string
    Answer : string
    class : string
}

 export default function 
(props:FAQTypes) {
  return (
   
        <div className={`flex flex-col w-full`}>
           <div className="flex items-center gap-2"> 
           <p className="">{props.Questions}</p>
           <Image src={errow} alt={''} className='cursor-auto'/>
           </div>
            <p className={`flex flex-col ${props.class} `}>{props.Answer}</p>

        </div>
    
  )
}