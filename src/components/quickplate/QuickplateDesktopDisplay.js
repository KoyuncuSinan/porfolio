import Image from "next/image";
import quickplate from "../../../public/quickplate-desktop.png"
import quickplateFull from "../../../public/quickplate-full-desktop.png"
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import quickplatephone from "../../../public/quickplate-mobile.png"

export default function QuickplateDesktopDisplay(){
    return(
        <section>
                <Link href={"/"} className="text-black border-2 rounded-full p-5 border-[#FDC435] hover:bg-black hover:text-white hover:border-none"><ArrowBackIcon /></Link>
             <section className="text-black text-center mt-10">
            <h2 className="font-bold text-4xl">Quickplate</h2>
            <div className="flex justify-between items-center col-span-2">
                <Image src={quickplateFull} width={1920} height={1080} className="w-[80%] mt-10 rounded-md object-cover mx-auto shadow-2xl "></Image>
            </div>
            <div className="grid grid-cols-2 items-center gap-6 mt-10">
                <div className="col-span-1">
                    <h3 className="font-semibold text-2xl">About</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <div className="mt-5 text-gray-600 text-left">
                     Welcome to Quickplate, a vibrant <b>social platform</b> dedicated to sharing quick and easy-to-make recipes.
                    Quickplate provides a space for food enthusiasts to discover, create, and share delicious recipes that can be made in no time. 
                    The platform emphasizes simplicity, convenience, and the joy of cooking, offering a community-driven hub for culinary inspiration.
                        <p className="mt-2">With an intuitive and <b>user-friendly</b> interface, you can easily register and log in to Quickplate, 
                        unlocking a world of culinary inspiration. Once you're part of the Quickplate family, you can create your own recipes, 
                        upload mouthwatering images, and share your cooking triumphs with others.</p>
                        <p className="mt-2">To ensure seamless user experience and efficient image storage, Quickplate integrates with <b>AWS S3 server</b>, 
                        allowing you to upload and display enticing visuals alongside your recipes. </p>
                        <p className="mt-2"> it's also a community of food enthusiasts. <b>Users can engage with recipes through comments</b>, 
                        providing feedback, suggestions, and personal anecdotes. You can <b>bookmark</b> your favorite recipes, 
                        creating a personalized collection of go-to dishes for future reference. 
                        In addition, users can upvote recipes they love, showcasing popular and highly-rated dishes within the community.</p>
                        <p className="mt-2">Each recipe and user has its own dedicated page, providing a personalized showcase for your culinary adventures.
                        Quickplate also offers a display of your own recipes and bookmarked favorites, 
                        making it easy to revisit and recreate your culinary successes.
                        </p>
                        <p className="mt-2">Quickplate boasts a responsive and <b>mobile-first design</b>, 
                        ensuring a seamless browsing experience across devices. Our authentication system leverages local storage, 
                        providing a secure and hassle-free login experience.</p>
                        <p className="mt-2">Thank you for visiting Quickplate!</p>
                    
                    
                    </div>
                    
                </div>
                <div className="col-span-1 h-[100%]">
                <div className='mx-auto flex flex-row justify-center'>
                        <a target="_blank" href={"https://gadget-box.vercel.app/"} className='mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg flex items-center hover:bg-[#f37d1d] hover:text-white'>See Live</a>
                        <a href={"https://github.com/KoyuncuSinan/recipe-project"}  target="_blank" className='py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black hover:bg-black hover:text-white'>GitHub</a>
                     </div>
                     <div className="mt-2 flex flex-col w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[40%] mx-auto p-3 bg-slate-300 rounded-md font-light">
                            <span>Demo</span>
                            <span>email: test1@test.com</span>
                            <span className="ml-2"> password: test1</span>
                    </div>
                    <h3 className="font-semibold text-2xl mt-10">Used Technologies</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <div className="grid grid-cols-2 text-center items-center lg:grid-cols-3 2xl:grid-cols-4 mt-5">
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2" >HTML</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">CSS</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2 ">JavaScript</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">React</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Node.js</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Express.js</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">React Router</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GIT</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">GitHub</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">TailwindCSS</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Material UI</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">MongoDB</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">MongoDB Atlas</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Multer</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">AWS S3</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">SEO</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Bcrypt</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Helmet</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">JWT</span>
                        <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">Responsive Design</span>

            </div>
            </div>
                </div>
                
        </section>
        </section>
    )
}