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
                <Image src={unsplash} width={800} height={800} className="w-[50%] h-[50%] "></Image>
                <Image src={unsplashPhone} width={800} height={800} className="w-[50%] h-[50%]"></Image>
                
            </div>
            <div className='mx-auto flex flex-row justify-center mt-[2rem]'>
                    <button className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg'>See Live</button>
                    <button className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black'>GitHub</button>
                </div>
            <h3 className="mt-5 font-semibold text-2xl">About</h3>
            <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
            <p className="mt-5 text-gray-600">aşsidkaşsldkalşsdkasşldal</p>
            
                <div>
                    <h3 className="mt-10 font-semibold text-2xl">Used Technologies</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <div className="grid grid-cols-2 text-center items-center xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 mt-5">
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
        </>
    )
}