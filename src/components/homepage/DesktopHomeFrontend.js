import Image from "next/image";
import Link from "next/link";
import billingpagedesktop from "../../../public/billing-page-desktop.png"
import interactiveCardDesktop from "../../../public/interactive-card-desktop.png"
import interactiveCardMobile from "../../../public/interactive-card-mobile.png"
import newsLandingDesktop from "../../../public/news-landing-desktop.png"
import newsLandingMobile from "../../../public/news-landing-mobile.png"
export default function DesktopHomeFrontend(){
return(
    <>
    <div className="mt-10 p-2 rounded-md">
   
    <div className='grid grid-cols-2'>
        <div className="flex justify-between items-center">
            <Image src={interactiveCardDesktop} width={800} height={800} className="w-[60%]" alt="Website's desktop image" priority></Image>
            <Image src={interactiveCardMobile} width={800} height={800} className="w-[60%]" alt="Website's mobile image" priority></Image>
        </div>
        <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
        <h3 className="font-bold text-3xl">Interactive Card</h3>
        <p className="text-slate-600">Card design that reflects the entered credit card information interactively on the screen.</p>
        <div>
        <Link href={"/interactivecard"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white">Go to project</Link>
        </div>
    </div>
    </div>
</div>

<div className="mt-10 p-2 rounded-md  border-purple-800">
   <div className='grid grid-cols-2'>
       <div className="flex justify-between items-center">
           <Image src={newsLandingDesktop} width={800} height={800} className="w-[60%] object-cover" alt="Website's desktop image" priority></Image>
           <Image src={newsLandingMobile} width={800} height={800} className="w-[60%] object-cover" alt="Website's mobile image" priority></Image>
       </div>
       <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
       <h3 className="font-bold text-3xl">News Website Landing Page</h3>
       <p className="text-slate-600">An example of a homepage that a technology news website could use.</p>
       <div>
       <Link href={"/newslanding"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white">Go to project</Link>
       </div>
   </div>
   </div>
</div>

<div className="mt-10 p-2 rounded-md  border-purple-800">
    <div className='grid grid-cols-2'>
        <div className="flex justify-center items-center">
            <Image src={billingpagedesktop} width={800} height={800} className="w-[60%] object-cover" alt="Website's desktop image" priority></Image>
        </div>
        <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
        <h3 className="font-bold text-3xl">Billing Page</h3>
        <p className="text-slate-600">A billing page that shows your billing history, payments and card details in a modern way.</p>
        <div>
        <Link href={"/billing"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white">Go to project</Link>
        </div>
    </div>
    </div>
</div>
</>
)
}