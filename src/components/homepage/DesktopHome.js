import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import picture from "../../../public/image.jpg"
import gadgetbox from "../../../public/gadget-box-monitor.png"
import gadgetboxphone from "../../../public/gadget-box-phone.png"
import quickplate from "../../../public/quickplate-desktop.png"
import quickplatephone from "../../../public/quickplate-mobile.png"
import unsplash from "../../../public/unsplash-desktop.png"
import unsplashphone from "../../../public/unsplash-mobile.png"
import ContactForm from './ContactForm';

export default function DesktopHome(){
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
        <section className='grid grid-cols-2 text-black items-center'>
        <div className='col-span-1 mx-auto'>
          <h3 className='text-[#FDC435] uppercase font-bold text-xl'>Full-stack Web Developer</h3>
          <h2 className='font-bold text-[4rem] leading-[120%]'>Hello, my name is Sinan Koyuncu</h2>
          <p>I'm a full-stack web developer who's experienced in Node.js, React and Next.js</p>
          <div className='mx-auto flex flex-row justify-start mt-[2rem] '>
            <button className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg'>Projects</button>
            <button className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black'>LinkedIn</button>
          </div>
        </div>
        <Image src={picture} width={800} height={800} className="mx-auto rounded-full w-[60%]" ></Image>
      </section>

      <section className="text-black text-center mt-20">
        <h2 className="font-bold text-4xl">ABOUT ME</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <p className="text-base font-light mt-4">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
    </section>
    <section className="text-black grid grid-cols-2">
    <div className="mt-12 col-span-1 w-[80%]">
        <h3 className="font-bold text-xl mb-4">Get to know me</h3>
         <p className='leading-loose'>
         I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.
         <div className='mt-2'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.</div>
              <div className='mt-4'>Feel free to Connect or 
              Follow me on my Linkedin where I post useful content related to Web Development and Programming
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</div>
          </p>
         <button className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Contact</button>
    </div>
    <div className="mt-12 col-span-1 w-[80%] mx-auto">
        <h3 className="font-bold text-xl mb-4">My Skills</h3>
        <div className="grid grid-cols-3 text-center items-center ">
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
        <h2 className="font-bold text-4xl">PROJECTS</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <div className="flex flex-row justify-between my-4">
            <h3 onClick={handleFullstackClick} className="font-semibold text-xl">Full-stack Projects</h3>
            <h3 onClick={handleFrontendClick} className="font-semibold text-xl">Frontend Projects</h3>
        </div>
        {showFullstack && <>
            <div className="mt-10 p-2 rounded-md  border-purple-800">
           
            <div className='grid grid-cols-2'>
                <div className="flex justify-between items-center">
                    <Image src={gadgetbox} width={800} height={800} className="w-[60%]"></Image>
                    <Image src={gadgetboxphone} width={800} height={800} className="w-[60%]"></Image>
                </div>
                <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
                <h3 className="font-bold text-3xl">Gadget Box</h3>
                <p className="text-slate-600">Gadget Box is a social platform for gamers, where they connect with community and share their reviews about games.</p>
                <div>
                <Link href={"/gadgetbox"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>
                </div>
            </div>
            </div>
        </div>

        <div className="mt-10 p-2 rounded-md  border-purple-800">
           <div className='grid grid-cols-2'>
               <div className="flex justify-between items-center">
                   <Image src={quickplate} width={800} height={800} className="w-[60%]"></Image>
                   <Image src={quickplatephone} width={800} height={800} className="w-[60%]"></Image>
               </div>
               <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
               <h3 className="font-bold text-3xl">Quickplate</h3>
               <p className="text-slate-600">Gadget Box is a social platform for gamers, where they connect with community and share their reviews about games.</p>
               <div>
               <Link href={"/quickplate"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>
               </div>
           </div>
           </div>
       </div>

        <div className="mt-10 p-2 rounded-md  border-purple-800">
            <div className='grid grid-cols-2'>
                <div className="flex justify-between items-center">
                    <Image src={unsplash} width={800} height={800} className="w-[60%]"></Image>
                    <Image src={unsplashphone} width={800} height={800} className="w-[60%]"></Image>
                </div>
                <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
                <h3 className="font-bold text-3xl">Unsplash</h3>
                <p className="text-slate-600">Gadget Box is a social platform for gamers, where they connect with community and share their reviews about games.</p>
                <div>
                <Link href={"/unsplash"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>
                </div>
            </div>
            </div>
        </div>
        </>}
        {showFrontend && <>
            <div>
            </div>
        </>}
    </section>
    <div className='w-[50%] mx-auto '>
        <ContactForm />

    </div>
      </>
    )
}