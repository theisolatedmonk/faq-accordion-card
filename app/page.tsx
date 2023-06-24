import Image from 'next/image'
import patternDesktop from '@/app/components/images/bg-pattern-desktop.svg'
import patternMobile from '@/app/components/images/bg-pattern-mobile.svg'
import errow from '@/app/components/images/icon-arrow-down.svg'
import box from '@/app/components/images/illustration-box-desktop.svg'
import womenDesktop from '@/app/components/images/illustration-woman-online-desktop.svg'
import womenMobile from '@/app/components/images/illustration-woman-online-mobile.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-[hsl(273,75%,66%)] to-[hsl(240,73%,65%)]">
     
    <div className="flex gap-2 p-4">
    <div className="bg-white flex flex-col">
<Image src={womenDesktop} alt={''} className=' bg-black'/>
{/* <Image src={box} alt={''} className='bg-yellow-300'/> */}
{/* <Image src={patternDesktop} alt={''} className='bg-green-300'/> */}
     </div>
     <div className="flex flex-col">
      <p className="">FAQ</p>
      <FAQs/>
     </div>
    </div>
    </main>
  )
}
