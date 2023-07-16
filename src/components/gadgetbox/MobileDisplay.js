import Image from "next/image";
import Link from "next/link";
import gadgetbox from "../../../public/gadget-box-monitor.png"
import gadgetboxphone from "../../../public/gadget-box-phone.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function MobileDisplay(){
    return(
        <>
        <Link href={"/"} className="text-black border-2 rounded-full p-2 border-[#FDC435] hover:bg-black hover:text-white hover:border-none sticky top-0"><ArrowBackIcon /></Link>
        <section className="text-black text-center mt-8">
            <h2 className="font-bold text-4xl">Gadget Box</h2>
            <div className="flex justify-between items-center mt-5">
                <Image src={gadgetbox} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's desktop image"></Image>
                <Image src={gadgetboxphone} width={800} height={800} className="w-[50%] h-[50%] " alt="Website's mobile image"></Image>
                
            </div>
            <div className='mx-auto flex flex-row justify-center mt-[2rem]'>
            <a
                target="_blank"
                href={"https://gadget-box.vercel.app/"}
                className="mr-[0.75rem] rounded-lg bg-[#FDC435] py-[0.5rem] px-[1.5rem] font-medium text-lg flex items-center hover:bg-[#f37d1d] hover:text-white"
              >
                See Live
              </a>
              <a
                href={"https://github.com/KoyuncuSinan/gadget-box"}
                target="_blank"
                className="py-[0.5rem] rounded-lg px-[1.5rem] font-medium text-lg border-2 border-black hover:bg-black hover:text-white"
              >
                GitHub
              </a>
                </div>
                <div className="mt-2 flex flex-col w-[70%] xs:w-[60%] sm:w-[45%] md:w-[40%] mx-auto p-3 bg-slate-300 rounded-md font-light">
              <span>Demo</span>
              <span>email: test1@test.com</span>
              <span className="ml-2"> password: test1</span>
            </div>
            <h3 className="mt-5 font-semibold text-2xl">About</h3>
            <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
            <div className="mt-5 text-gray-600 text-left">
              Welcome to Gadget Box, a dynamic and immersive 
               <b> gaming-themed web app</b> designed to bring gamers together and
              foster a vibrant community of game enthusiasts. With a focus on
              sharing game reviews, ratings, and connecting with like-minded
              individuals, Gadget Box offers an engaging platform for gamers to
              express their opinions, discover new games, and connect with
              fellow players.
              <p className="mt-2">
                My web app utilizes the powerful rawg.io <b>API</b>, ensuring
                that users have access to an extensive collection of games,
                including the latest releases, popular titles, and hidden gems.
                With the integrated search bar, you can easily find your
                favorite games or explore new ones that pique your interest.
              </p>
              <p className="mt-2">
                The heart of Gadget Box lies in the user-generated reviews and
                ratings. By sharing your experiences and thoughts, you can help
                fellow gamers discover new adventures or steer clear of
                potential disappointments.
              </p>
              <p className="mt-2">
                In addition to the review and rating system, Gadget Box offers a
                comprehensive social platform. Each user has their own{" "}
                <b>profile page</b>, allowing you to personalize your gaming
                identity, showcase your favorite games, and connect with other
                users who share similar gaming interests. You can follow other
                gamers, explore their profiles, and stay updated with their
                latest gaming experiences.
              </p>
              <p className="mt-2">
                Our website is built with a{" "}
                <b>responsive and mobile-first design</b>, ensuring that you can
                access Gadget Box seamlessly across various devices. Whether
                you're on your desktop computer, tablet, or smartphone, you can
                enjoy a consistent and optimized user experience.
              </p>
              <p className="mt-2">
                To enhance the security and user experience, Gadget Box employs{" "}
                <b>NextAuth</b> for authentication, utilizing session storage to
                ensure a seamless and reliable login process.{" "}
              </p>
              <p className="mt-2">Thank you for visiting Gadget Box!</p>
            </div>
            
                <div>
                    <h3 className="mt-10 font-semibold text-2xl">Used Technologies</h3>
                    <hr className="w-[2rem] mx-auto rounded-xl mt-2 border-[#FDC435] border-4"></hr>
                    <div className="grid grid-cols-2 text-center items-center xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 mt-5">
                    <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  HTML
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  CSS
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2 ">
                  JavaScript
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  React
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Next.js
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Node.js
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  NextAuth
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Cloudinary
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  GIT
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  GitHub
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  TailwindCSS
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Material UI
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  MongoDB
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  MongoDB Atlas
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Formidable
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Bcrypt
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Mongoose
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Babel
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Sharp
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Responsive Design
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  Mobile-first
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  ESLint
                </span>
                <span className="py-[0.5rem] px-[0.5rem] bg-slate-300 rounded-md mr-2 mb-2">
                  React-Select
                </span>

        </div>
                </div>
                

        </section>
        </>
    )
}