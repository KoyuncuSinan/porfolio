import Image from "next/image";
import Link from "next/link";
import interactive from "../../../public/interactive-card-desktop.png"
import interactiveMobile from "../../../public/interactive-card-mobile.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DesktopInteractive(){
    return(
        <section>
        <Link href={"/"} className="text-black border-2 rounded-full p-5 border-[#FDC435] hover:bg-black hover:text-white hover:border-none sticky top-0"><ArrowBackIcon /></Link>
             <section className="text-black text-center mt-10">
            <h2 className="font-bold text-4xl">Interactive Card</h2>
            <div className="grid grid-cols-2 items-center mt-10">
                <div className="col-span-1">
                    <h3 className="font-semibold text-2xl">About</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <p className="mt-5 text-gray-600 text-left">Credit card design that reflects the entered credit card information interactively 
                    on the screen. *Developed specifically for <b>375px</b> and <b>1080px</b> for a challenge.</p>
                    <div className='mx-auto flex flex-row justify-center mt-[2rem]'>
                        <a target="_blank" href={"https://interactive-credit-card-delta.vercel.app/"} className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg flex items-center hover:bg-[#f37d1d] hover:text-white'>See Live</a>
                        <a href={"https://github.com/KoyuncuSinan/interactive-credit-card"}  target="_blank" className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black hover:bg-black hover:text-white'>GitHub</a>
                     </div>
                </div>
                <div className="flex justify-between items-center col-span-1">
                <Image src={interactive} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's desktop image" priority></Image>
                <Image src={interactiveMobile} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's mobile image" priority></Image>
            </div>
            </div>
                <div>
                    <h3 className="mt-10 font-semibold text-2xl">Used Technologies</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <div className="grid grid-cols-2 text-center items-center lg:grid-cols-3 2xl:grid-cols-4 mt-5">
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2" >HTML</span>
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
        </section>
    )
}