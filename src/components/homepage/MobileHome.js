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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderIcon from '@mui/icons-material/Folder';

import { useState } from "react"
import  {Link} from "react-scroll"
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
      <h3 className='text-[#FDC435] uppercase font-bold text-lg'>Full Stack Web Developer</h3>
      <Image src={picture} width={800} height={800} className="mx-auto rounded-full w-[60%] md:w-[50%]" alt="Sinan's picture"></Image>
      <h2 className='font-bold text-[2rem] leading-[120%] mt-2'>Hello, my name is Sinan Koyuncu</h2>
      <p>{"I'm a full stack web developer who's experienced in Node.js, React and Next.js"}</p>
      <div className='mx-auto grid grid-cols-3 xs:flex flex-row xs justify-center mt-[2rem] '>
      <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className='mr-[0.75rem] mx-auto rounded-lg bg-[#FDC435] py-[0.5rem] px-[0.5rem] 
      font-medium text-sm  xs:text-base sm:text-lg focus:bg-[#f37d1d] cursor-pointer flex items-center' >Projects
        <FolderIcon className="ml-2"/>
      </Link>
            <a target="_blank" href ="https://www.linkedin.com/in/sinan-koyuncu/" className='py-[0.5rem] mx-auto mr-[0.75rem] rounded-lg px-[0.5rem] 
            font-medium text-sm border-2 border-black cursor-pointer xs:text-base sm:text-lg flex items-center'>LinkedIn
            <LinkedInIcon className="ml-2"/>
            </a>
            <a target="_blank" href ="https://github.com/KoyuncuSinan" className='py-[0.5rem] mx-auto rounded-lg px-[0.5rem] font-medium text-sm border-2 
            border-black bg-black text-white cursor-pointer xs:text-base sm:text-lg flex items-center'>GitHub
            <GitHubIcon className="ml-2"/>
            </a>
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
        <div className='leading-loose'>
         Welcome to my portfolio website! My name is Sinan Koyuncu, and I am a passionate full stack web developer. With a solid foundation as a web content editor for five years, 
         I have seamlessly transitioned into the world of programming, honing my skills and expertise through self-learning and hands-on experience.
         <p className='mt-2'>Throughout my journey as a web content editor, I developed a deep understanding of the importance of user experience and captivating content. 
                I learned how to create engaging web pages, optimize content for search engines, and ensure a seamless browsing experience for users. 
                This role provided me with valuable insights into the intricacies of web development and fueled my desire to explore the technical side of building websites.
            </p>
              <p className='mt-2'>One of my key strengths lies in my ability to bridge the gap between design and development. Having previously worked as a web content editor, 
              I possess a unique perspective that enables me to understand and effectively collaborate with designers, content creators, and other stakeholders. 
              I thrive in collaborative environments, and I am always eager to contribute my technical expertise while actively seeking opportunities for growth and learning.
            </p>
            <p className='mt-2'>
            This portfolio website showcases some of my recent projects, which highlight my skills as a full stack web developer. 
            I invite you to explore my work and get a glimpse of my coding style, problem-solving abilities, and creativity.
            </p>
            <p className='mt-2'>Thank you for visiting my portfolio. I look forward to connecting with you and discussing for job opportunities.</p>
          </div>
         <div className="mt-4">
         <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg hover:bg-[#f37d1d] hover:text-white ">Contact</Link>
         </div>
    </div>
    <div className="mt-12">
        <h3 className="font-bold text-xl mb-4" id="skills">My Skills / Tech Used</h3>
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
        <h2 className="font-bold text-4xl" id="projects">PROJECTS</h2>
        <hr className="w-[2rem] mx-auto rounded-xl mt-4 border-[#FDC435] border-4"></hr>
        <div className="flex flex-row justify-between my-4">
            <div className="grid grid-cols-5 items-center rounded-lg bg-[#FDC435] py-[0.5rem] px-[1rem] font-semibold text-base cursor-pointer mr-1" onClick={handleFullstackClick}> 
                <h3 className="col-span-4 ">Full Stack Projects</h3>
                {showFullstack ? <ArrowDropUpIcon className="col-span-1" /> : <ArrowDropDownIcon className="col-span-1"/>} 
            </div>
            <div className="grid grid-cols-5 items-center py-[0.5rem] rounded-lg px-[1rem] font-semibold text-base  bg-black text-white cursor-pointer ml-1" onClick={handleFrontendClick} > 
                <h3 className="col-span-4 ">Frontend Projects</h3>
                {showFrontend ? <ArrowDropUpIcon className="col-span-1 mx-auto" /> : <ArrowDropDownIcon className="col-span-1 mx-auto"/>} 
            </div>
        </div>
        {showFullstack && <>
            <div className="mt-4 border-2 p-2 rounded-md border-purple-800 shadow-2xl">
            <h3 className="font-bold mb-4">Gadget Box</h3>
            <div className="flex justify-between items-center">
                <Image src={gadgetbox} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's desktop image"></Image>
                <Image src={gadgetboxphone} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's mobile image"></Image>

            </div>
            <p className="my-10">Gadget Box is a social platform for gamers, where they connect with community and share their reviews about games.</p>
            <div className="mb-5">
            <a href={"/gadgetbox"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</a>

            </div>
        </div>
        <div className="mt-24 border-2 p-2 rounded-md border-purple-800 shadow-2xl" >
            <h3 className="font-bold mb-4">Quickplate</h3>
            <div className="flex justify-between items-center">
                <Image src={quickplate} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's desktop image"></Image>
                <Image src={quickplatephone} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's mobile image"></Image>

            </div>
            <p className="my-10">Quickplate is a platform where other people share their recipes in a short form, helping you to follow them quickly and easily.</p>
            <div className="mb-5">
            <a href={"/quickplate"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</a>

            </div>
        </div>
        <div className="mt-24 border-2 p-2 rounded-md border-purple-800 shadow-2xl">
            <h3 className="font-bold mb-4">My Unsplash</h3>
            <div className="flex justify-between items-center">
                <Image src={unsplash} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's desktop image"></Image>
                <Image src={unsplashphone} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's mobile image"></Image>

            </div>
            <p className="my-10">{"My Unsplash is a platform inspired by the famous Unsplash, where users can share their photos and download others' photos at the same time."}</p>
            <div className="mb-5">
            <a href={"/unsplash"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</a>
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