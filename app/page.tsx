import Image from 'next/image'
import patternDesktop from '@/app/components/images/bg-pattern-desktop.svg'
import patternMobile from '@/app/components/images/bg-pattern-mobile.svg'
import errow from '@/app/components/images/icon-arrow-down.svg'
import box from '@/app/components/images/illustration-box-desktop.svg'
import womenDesktop from '@/app/components/images/illustration-woman-online-desktop.svg'
import womenMobile from '@/app/components/images/illustration-woman-online-mobile.svg'
import FAQs from './components/FAQs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40  bg-gradient-to-r from-[hsl(273,75%,66%)] to-[hsl(240,73%,65%)] font-KumbhSans">
     
    <div className="flex sm:flex-row flex-col p-10 bg-white text-black w-[70%]  h-96 rounded-2xl text-sm justify-end ">
    <div className=" flex items-cente ">
<Image src={womenDesktop} alt={''} className='absolute  h-80 w-80 top-44 left-60 z-30'/>
<Image src={box} alt={''} className='absolute  h-32 w-32  left-60 top-80 z-40 '/>
<Image src={patternDesktop} alt={''} className='absolute   top-48  left-44  h-96 w-96  z-20'/>
{/* <Image src={box} alt={''} className='bg-yellow-300'/> */}
{/* <Image src={patternDesktop} alt={''} className='bg-green-300'/> */}
     </div>
     <div className="flex flex-col     w-[55%] h-full justify-between">
      <p className=" text-[hsl(237,12%,33%)] font-bold">FAQ</p>
      <FAQs Questions={'How many team members can I invite?'} Answer={'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. '} class={''}/>
      <FAQs Questions={'What is the maximum file upload size?'} Answer={'No more than 2GB. All files in your account must fit your allotted storage space.'} class={''}/>
      <FAQs Questions={'How do I reset my password?'} Answer={'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. '} class={''}/>
      <FAQs Questions={'Can I cancel my subscription? '} Answer={'Yes! Send us a message and we’ll process your request no questions asked. '} class={''}/>
      <FAQs Questions={'Do you provide additional support? '} Answer={'Chat and email support is available 24/7. Phone lines are open during normal business hours. '} class={''}/>
     </div>
    </div>
    </main>
  )
}
