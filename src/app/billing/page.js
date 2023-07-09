"use client"
import useBetterMediaQuery from "@/components/util/UseBetterMediaQuery";
import BillingDesktop from "@/components/billingPage/BillingDesktop";
import BillingMobile from "@/components/billingPage/BillingMobile";

export default function Home(){
    const isMobile = useBetterMediaQuery("(max-width: 899px)");
return(
    
    <main className='w-[85%] umd:w-[70%] mx-auto mt-8 umd:mt-12'>
        {
            isMobile ? <BillingMobile /> : <BillingDesktop />
        }

    </main>
)
}