"use client"
import useBetterMediaQuery from "@/components/util/UseBetterMediaQuery";
import MobileDisplay from "@/components/gadgetbox/MobileDisplay";
import DesktopDisplay from "@/components/gadgetbox/DesktopDisplay";

export default function Home(){
    const isMobile = useBetterMediaQuery("(max-width: 899px)");
return(
    
    <main className='w-[85%] umd:w-[70%] mx-auto mt-8 umd:mt-12'>
        {
            isMobile ? <MobileDisplay /> : <DesktopDisplay />
        }

    </main>
)
}