import Image from "next/image";
import Link from "next/link";
import billing from "../../../public/billing-page-desktop.png"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function BillingMobile(){
    return(
        <>
        <Link href={"/"} className="text-black border-2 rounded-full p-2 border-[#FDC435] hover:bg-black hover:text-white hover:border-none"><ArrowBackIcon /></Link>
        <section className="text-black text-center mt-8">
            <h2 className="font-bold text-4xl">Billing Page</h2>
            <div className="flex justify-between items-center mt-5">
                <Image src={billing} width={800} height={800} className="w-[100%] h-[100%]" alt="Website's mobile image"></Image>
               
                
            </div>
            <div className='mx-auto flex flex-row justify-center mt-[2rem]'>
                    <a target="_blank" href={"https://billing-page-nine.vercel.app/"} className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg flex items-center hover:bg-[#f37d1d] hover:text-white'>See Live</a>
                    <a href={"https://github.com/KoyuncuSinan/billing-page"}  target="_blank" className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black hover:bg-black hover:text-white'>GitHub</a>
                </div>
            <h3 className="mt-5 font-semibold text-2xl">About</h3>
            <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
            <p className="mt-5 text-gray-600">A billing page that shows your billing history, 
                    payments and card details in a modern way. *Develeped specifically for <b>1080px</b> for a challenge.</p>
            
                <div>
                    <h3 className="mt-10 font-semibold text-2xl">Used Technologies</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <div className="grid grid-cols-2 text-center items-center xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 mt-5">
                    <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">CSS</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2 ">JavaScript</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">React</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Next.js</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GIT</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GitHub</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">TailwindCSS</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Material UI</span>

        </div>
                </div>
                

        </section>
        </>
    )
}