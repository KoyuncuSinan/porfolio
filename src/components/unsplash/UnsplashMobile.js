import Image from "next/image";
import unsplash from "../../../public/unsplash-desktop.png"
import unsplashPhone from "../../../public/unsplash-mobile.png"
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function UnsplashMobile(){
    return(
        <>
        <Link href={"/"} className="text-black border-2 rounded-full p-2 border-[#FDC435] hover:bg-black hover:text-white hover:border-none"><ArrowBackIcon /></Link>
        <section className="text-black text-center mt-8">
            <h2 className="font-bold text-4xl">My Unsplash</h2>
            <div className="flex justify-between items-center mt-5">
                <Image src={unsplash} width={800} height={800} className="w-[50%] h-[50%] " alt="Website's desktop image"></Image>
                <Image src={unsplashPhone} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's mobile image"></Image>
                
            </div>
            <div className='mx-auto flex flex-row justify-center mt-[2rem]'>
                        <a target="_blank" href={"https://myunsplash-slcn.onrender.com/"} className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg flex items-center hover:bg-[#f37d1d] hover:text-white'>See Live</a>
                        <a href={"https://github.com/KoyuncuSinan/unsplash-demo"}  target="_blank" className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black hover:bg-black hover:text-white'>GitHub</a>
                     </div>
                <div className="mt-2 flex flex-col w-[70%] xs:w-[60%] sm:w-[45%] md:w-[40%] mx-auto p-3 bg-slate-300 rounded-md font-light">
              <span>Demo</span>
              <span>email: test1@test.com</span>
              <span> password: test1</span>
              <span className="font-semibold text-xs">**Free hosting is used for backend, therefore first connection will be slower.</span>
            </div>
            <h3 className="mt-5 font-semibold text-2xl">About</h3>
            <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
            <div className="mt-5 text-gray-600 text-left">Welcome to My Unsplash, a user-friendly web application 
                    inspired by the renowned Unsplash platform. My Unsplash
                     provides individuals with a simple and intuitive space to showcase <b>their photography 
                     skills</b> and share stunning images with the world.
                    <p className="mt-2">My Unsplash offers a seamless user experience with pure CSS, allowing users to easily create an account, 
                    log in, and <b>upload their own photos and images</b>. By leveraging <b>AWS S3</b> for storage, 
                    My Unsplash ensures secure and efficient handling of media files. 
                    Users can also browse and download images uploaded by others, fostering a community of photography enthusiasts.</p>
                    <p className="mt-2">The design of My Unsplash follows a <b>masonry</b> layout,
                    allowing for a visually appealing and organized presentation of images. 
                    The <b>responsive and mobile-first</b> approach ensures that the website adapts flawlessly across various devices, 
                    providing an immersive experience for both desktop and mobile users.</p>
                    <p className="mt-2">At its core, My Unsplash prioritizes simplicity and convenience. By providing an easy-to-use interface, 
                    users can focus on showcasing their artistic talents and expressing their unique perspectives through stunning visual content.</p>
                    <p className="mt-2">Thank you for visiting My Unsplash!</p>
                    
                    
                    </div>
            
                <div>
                    <h3 className="mt-10 font-semibold text-2xl">Used Technologies</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <div className="grid grid-cols-2 text-center items-center xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 mt-5">
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2" >HTML</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">CSS</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2 ">JavaScript</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">React</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Node.js</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Express.js</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GIT</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GitHub</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Material UI</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Mongoose</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">MongoDB Atlas</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Multer</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Morgan</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">AWS S3</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Bcrypt</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Helmet</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">JWT</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Responsive Design</span>

            </div>
                </div>
                

        </section>
        </>
    )
}