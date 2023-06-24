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
    <div className='flex flex-col' >
        <div className={`flex flex-col ${props.class} `}>
            <p className="">{props.Questions}</p>
            <p className={`flex flex-col ${props.class} `}>{props.Answer}</p>
<Image src={errow} alt={''}/>
        </div>
    </div>
  )
}