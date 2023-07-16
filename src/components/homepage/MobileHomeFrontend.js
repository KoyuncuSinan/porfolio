import Image from "next/image";
import Link from "next/link";
import billingpagedesktop from "../../../public/billing-page-desktop.png"
import interactiveCardDesktop from "../../../public/interactive-card-desktop.png"
import interactiveCardMobile from "../../../public/interactive-card-mobile.png"
import newsLandingDesktop from "../../../public/news-landing-desktop.png"
import newsLandingMobile from "../../../public/news-landing-mobile.png"
export default function MobileHomeFrontend(){
return(
    <>
            <div className="mt-4 border-2 p-2 rounded-md border-purple-800 shadow-2xl">
            <h3 className="font-bold mb-4">Interactive Card</h3>
            <div className="flex justify-between items-center">
                <Image src={interactiveCardDesktop} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's desktop image" priority></Image>
                <Image src={interactiveCardMobile} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's mobile image " priority></Image>

            </div>
            <p className="my-10">Card design that reflects the entered credit card information interactively on the screen.</p>
            <div className="mb-5">
            <Link href={"/interactivecard"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>

            </div>
        </div>
        <div className="mt-24 border-2 p-2 rounded-md border-purple-800 shadow-2xl" >
            <h3 className="font-bold mb-4">News Website Landing Page</h3>
            <div className="flex justify-between items-center">
                <Image src={newsLandingDesktop} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's desktop image" priority></Image>
                <Image src={newsLandingMobile} width={800} height={800} className="w-[50%] h-[50%]" alt="Website's mobile image" priority></Image>

            </div>
            <p className="my-10">An example of a homepage that a technology news website could use.</p>
            <div className="mb-5">
            <Link href={"/newslanding"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>

            </div>
        </div>
        <div className="mt-24 border-2 p-2 rounded-md border-purple-800 shadow-2xl">
            <h3 className="font-bold mb-4">Billing Page</h3>
            <div className="flex items-center">
                <Image src={billingpagedesktop} width={800} height={800} alt="Website's desktop image" priority></Image>

            </div>
            <p className="my-10">A billing page that shows your billing history, payments and card details in a modern way.</p>
            <div className="mb-5">
            <Link href={"/billing"} className="rounded-lg bg-[#FDC435] py-[0.5rem] px-[3rem] font-medium text-lg">Go to project</Link>
            </div>

        </div>
        </>
)
}