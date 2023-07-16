"use client"
import Image from 'next/image'
import {Link} from "react-scroll"
import { useState } from 'react';
import picture from "../../../public/image.jpg"
import gadgetbox from "../../../public/gadget-box-monitor.png"
import gadgetboxphone from "../../../public/gadget-box-phone.png"
import quickplate from "../../../public/quickplate-desktop.png"
import quickplatephone from "../../../public/quickplate-mobile.png"
import unsplash from "../../../public/unsplash-desktop.png"
import unsplashphone from "../../../public/unsplash-mobile.png"
import ContactForm from './ContactForm';
import DesktopHomeFrontend from './DesktopHomeFrontend';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderIcon from '@mui/icons-material/Folder';

export default function DesktopHome(){
    const [showFullstack, setShowFullStack] = useState(false)
  const [showFrontend, setShowFrontEnd] = useState(false)
  const [drop,setDrop] = useState(false)

  const handleFullstackClick = () => {
      setShowFrontEnd(false)
      showFullstack ? setShowFullStack(false) : setShowFullStack(true);
      setDrop(!drop)
    };

    
    const handleFrontendClick = () => {
      setShowFullStack(false);
      showFrontend ? setShowFrontEnd(false) : setShowFrontEnd(true);
      setDrop(!drop)
    }
    return(
        <>
        <section className='grid grid-cols-3 lg:grid-cols-2 text-black min-h-screen items-center -mt-24'>
        <div className='col-span-2  lg:col-span-1 mx-auto'>
          <h3 className='text-[#FDC435] uppercase font-bold text-xl '>Full Stack Web Developer</h3>
          <h2 className='font-bold text-[4rem] leading-[120%]'>Hello, my name is Sinan Koyuncu</h2>
          <p>{"I'm a full stack web developer who's experienced in Node.js, React and Next.js"}</p>
          <div className='mx-auto flex flex-row justify-start mt-[2rem] items-center'>
            <Link to="projects" spy={true} smooth={true} offset={2} duration={500} className='mr-[0.75rem] flex rounded-lg bg-[#FDC435] py-[0.5rem] px-[1rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white cursor-pointer' >Projects
                <FolderIcon className='ml-2'/>
            </Link>
            <a target="_blank" href ="https://www.linkedin.com/in/sinan-koyuncu/" className='py-[0.5rem] mr-[0.75rem] rounded-lg px-[1rem] font-medium text-lg border-2 border-black hover:bg-black hover:text-white cursor-pointer flex items-center'>LinkedIn
                <LinkedInIcon className='ml-2' />
            </a>
            <a target="_blank" href ="https://github.com/KoyuncuSinan" className='py-[0.5rem] rounded-lg px-[1rem] font-medium text-lg border-2 border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer flex items-center'>GitHub
            <GitHubIcon className='ml-2'/>
            </a>
            
          </div>
        </div>
        <div className=" w-[100%] lg:w-[70%] col-span-1 flex justify-end mx-auto" >
        <Image src={picture} width={800} height={800} className="rounded-full object-cover" priority alt="Sinan's picture"></Image>
        </div>
      </section>

      <section className="text-black text-center mt-20">
        <h2 className="font-bold text-4xl" id='about'>ABOUT ME</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <p className="text-base font-light mt-4">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
    </section>
    <section className="text-black grid grid-cols-2">
    <div className="mt-12 col-span-1 w-[80%]">
        <h3 className="font-bold text-xl mb-4">Get to know me</h3>
         <div className='leading-loose'>
         Welcome to my portfolio website! My name is Sinan Koyuncu, and I am a passionate <b>full stack web developer.</b> With a solid foundation as a web content editor for five years, 
         I have seamlessly transitioned into the world of programming, honing my skills and expertise through self-learning and <b>hands-on experience.</b>
         <p className='mt-2'>Throughout my journey as a web content editor, I developed a deep understanding of the importance of <b>user experience</b> and captivating content. 
                I learned how to create engaging web pages, <b>optimize content for search engines</b>, and ensure a seamless browsing experience for users. 
                This role provided me with valuable insights into the intricacies of web development and fueled my desire to explore the technical side of building websites.
            </p>
              <p className='mt-2'>One of my key strengths lies in my ability to bridge the gap between design and development. Having previously worked as a web content editor, 
              I possess a unique perspective that enables me to understand and <b>effectively collaborate with designers, content creators, and other stakeholders.</b> I thrive in collaborative environments, and I am always eager to contribute my technical expertise while actively seeking opportunities for growth and learning.
            </p>
            <p className='mt-2'>
            This portfolio website showcases some of my recent projects, which highlight my skills as a full stack web developer. 
            I invite you to explore my work and get a glimpse of my coding style, problem-solving abilities, and creativity.
            </p>
            <p className='mt-2'>Thank you for visiting my portfolio. I look forward to connecting with you and discussing for job opportunities.</p>
          </div>
          <div className='mt-4'>
         <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white cursor-pointer">Contact</Link>
          </div>
    </div>
    <div className="mt-12 col-span-1 w-[100%]">
        <h3 className="font-bold text-xl mb-4" id='skills'>My Skills / Tech Used</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center items-center">
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
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Postman</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Python Basics</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">SEO</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Responsive Design</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Adobe Photoshop</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Figma</span>
        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Adobe Premiere</span>
        </div>
    </div>
    </section>
    <section className="text-center text-black mt-20"> 
        <h2 className="font-bold text-4xl" id='projects'>PROJECTS</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <div className="flex flex-row justify-between my-4 w-[70%] mx-auto">
            <div className="grid grid-cols-5 items-center rounded-lg bg-[#FDC435] py-[1rem] px-[1.5rem] font-semibold text-base cursor-pointer mr-1 hover:bg-[#f37d1d] hover:text-white" onClick={handleFullstackClick} > 
                <h3 className="col-span-4 ">Full Stack Projects</h3>
                {showFullstack ? <ArrowDropUpIcon className="col-span-1 mx-auto" /> : <ArrowDropDownIcon className="col-span-1 mx-auto"/>} 
            </div>
            <div className="grid grid-cols-5 items-center py-[1rem] rounded-lg px-[1.5rem] font-semibold text-base  bg-black text-white hover:bg-gray-600 cursor-pointer ml-1 " onClick={handleFrontendClick}> 
                <h3  className="col-span-4 ">Frontend Projects</h3>
                {showFrontend ? <ArrowDropUpIcon className="col-span-1 mx-auto" /> : <ArrowDropDownIcon className="col-span-1 mx-auto"/>} 
            </div>
        </div>
        {showFullstack && <>
            <div className="mt-10 p-2 rounded-md">
           
            <div className='grid grid-cols-2'>
                <div className="flex justify-between items-center">
                    <Image src={gadgetbox} width={800} height={800} className="w-[60%]" alt="Website's desktop image" priority></Image>
                    <Image src={gadgetboxphone} width={800} height={800} className="w-[60%]" alt="Website's mobile image" priority></Image>
                </div>
                <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
                <h3 className="font-bold text-3xl">Gadget Box</h3>
                <p className="text-slate-600 mb-2">Gadget Box is a social platform for gamers, where they connect with community and share their reviews about games.</p>
                <div>
                <a href={"/gadgetbox"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white cursor-pointer">Go to project</a>
                </div>
            </div>
            </div>
        </div>

        <div className="mt-10 p-2 rounded-md  border-purple-800">
           <div className='grid grid-cols-2'>
               <div className="flex justify-between items-center">
                   <Image src={quickplate} width={800} height={800} className="w-[60%]" alt="Website's desktop image" priority></Image>
                   <Image src={quickplatephone} width={800} height={800} className="w-[60%]" alt="Website's mobile image" priority></Image>
               </div>
               <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
               <h3 className="font-bold text-3xl">Quickplate</h3>
               <p className="text-slate-600 mb-2">Quickplate is a platform where other people share their recipes in a short form, helping you to follow them quickly and easily.</p>
               <div>
               <a href={"/quickplate"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white cursor-pointer">Go to project</a>
               </div>
           </div>
           </div>
       </div>

        <div className="mt-10 p-2 rounded-md  border-purple-800">
            <div className='grid grid-cols-2'>
                <div className="flex justify-between items-center">
                    <Image src={unsplash} width={800} height={800} className="w-[60%]" alt="Website's desktop image" priority></Image>
                    <Image src={unsplashphone} width={800} height={800} className="w-[60%]" alt="Website's mobile image" priority></Image>
                </div>
                <div className='flex flex-col items-center justify-around px-10 2xl:px-32'>
                <h3 className="font-bold text-3xl">My Unsplash</h3>
                <p className="text-slate-600 mb-2">{"My Unsplash is a platform inspired by the famous Unsplash, where users can share their photos and download others' photos at the same time."}</p>
                <div>
                <a href={"/unsplash"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white cursor-pointer ">Go to project</a>
                </div>
            </div>
            </div>
        </div>
        </>}
        {showFrontend && <>
            <div>
            <DesktopHomeFrontend />
            </div>
        </>}
    </section>
    <div className='w-[50%] mx-auto ' id='contact'>
        <ContactForm />

    </div>
      </>
    )
}