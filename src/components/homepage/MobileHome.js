import picture from "../../../public/image.jpg"
import gadgetbox from "../../../public/gadget-box-monitor.png"
import gadgetboxphone from "../../../public/gadget-box-phone.png"
import quickplate from "../../../public/quickplate-desktop.png"
import quickplatephone from "../../../public/quickplate-mobile.png"
import unsplash from "../../../public/unsplash-desktop.png"
import unsplashphone from "../../../public/unsplash-mobile.png"
import MobileHomeFrontend from "./MobileHomeFrontend"
import ContactForm from "./ContactForm"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
export default function MobileHome(){
    const [showFullstack, setShowFullStack] = useState(false)
    const [showFrontend, setShowFrontEnd] = useState(false)

    const handleFullstackClick = () => {
        setShowFrontEnd(false)
        showFullstack ? setShowFullStack(false) : setShowFullStack(true);
      };
      
      const handleFrontendClick = () => {
        setShowFullStack(false);
        showFrontend ? setShowFrontEnd(false) : setShowFrontEnd(true);
      }
    return(
        <>
    <section className=' text-black items-center min-h-screen mt-16'>
    <div className='mx-auto text-center'>
      <h3 className='text-[#FDC435] uppercase font-bold text-lg'>Full-stack Web Developer</h3>
      <Image src={picture} width={800} height={800} className="mx-auto rounded-full w-[60%]" ></Image>
      <h2 className='font-bold text-[2rem] leading-[120%] mt-2'>Hello, my name is Sinan Koyuncu</h2>
      <p className="">I'm a full-stack web developer who's experienced in Node.js, React and Next.js</p>
      <div className='mx-auto flex flex-row justify-center mt-[2rem] '>
        <button className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg'>Projects</button>
        <button className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black'>LinkedIn</button>
      </div>
    </div>
  </section>
    <section className="text-black text-center mt-20">
        <h2 className="font-bold text-4xl" id="about">ABOUT ME</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <p className="text-base font-light mt-4">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
    </section>
    <section className="umd:flex text-black">
    <div className="mt-12">
        <h3 className="font-bold text-xl">Get to know me</h3>
         <p>lorem</p>
         <button className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Contact</button>
    </div>
    <div className="mt-12">
        <h3 className="font-bold text-xl mb-4" id="skills">My Skills</h3>
        <div className="grid grid-cols-2 text-center items-center xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2" >HTML</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">CSS</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2 ">JavaScript</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">React</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Next.js</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Node.js</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Express.js</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GIT</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GitHub</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">TailwindCSS</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Material UI</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">MongoDB</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">MongoDB Atlas</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">MySQL</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">AWS S3</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Cloudinary</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Python Basics</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">SEO</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Responsive Design</span>

        </div>
    </div>
    </section>
    <section className="text-center text-black mt-20"> 
        <h2 className="font-bold text-4xl" id="projects">PROJECTS</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <div className="flex flex-row justify-between my-4">
            <h3 onClick={handleFullstackClick} className="font-semibold text-xl">Full-stack Projects</h3>
            <h3 onClick={handleFrontendClick} className="font-semibold text-xl">Frontend Projects</h3>
        </div>
        {showFullstack && <>
            <div className="mt-4 border-2 p-2 rounded-md border-purple-800 shadow-2xl">
            <h3 className="font-bold mb-4">Gadget Box</h3>
            <div className="flex justify-between items-center">
                <Image src={gadgetbox} width={800} height={800} className="w-[50%] h-[50%]"></Image>
                <Image src={gadgetboxphone} width={800} height={800} className="w-[50%] h-[50%]"></Image>

            </div>
            <p className="my-10">adasdasdasdasdasdasadasd</p>
            <div className="mb-5">
            <Link href={"/gadgetbox"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>

            </div>
        </div>
        <div className="mt-24 border-2 p-2 rounded-md border-purple-800 shadow-2xl" >
            <h3 className="font-bold mb-4">Quickplate</h3>
            <div className="flex justify-between items-center">
                <Image src={quickplate} width={800} height={800} className="w-[50%] h-[50%]"></Image>
                <Image src={quickplatephone} width={800} height={800} className="w-[50%] h-[50%]"></Image>

            </div>
            <p className="my-10">adasdasdasdasdasdasadasd</p>
            <div className="mb-5">
            <Link href={"/quickplate"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>

            </div>
        </div>
        <div className="mt-24 border-2 p-2 rounded-md border-purple-800 shadow-2xl">
            <h3 className="font-bold mb-4">Unsplash Demo</h3>
            <div className="flex justify-between items-center">
                <Image src={unsplash} width={800} height={800} className="w-[50%] h-[50%]"></Image>
                <Image src={unsplashphone} width={800} height={800} className="w-[50%] h-[50%]"></Image>

            </div>
            <p className="my-10">adasdasdasdasdasdasadasd</p>
            <div className="mb-5">
            <Link href={"/unsplash"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>
            </div>

        </div>
        </>}
        {showFrontend && <>
            <div>
            <MobileHomeFrontend />
            </div>
        </>}
    </section>
    <section>
    <ContactForm />
    </section>
        </>

    )
}