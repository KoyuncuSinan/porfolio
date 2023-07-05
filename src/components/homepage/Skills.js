import Image from "next/image";
import useBetterMediaQuery from "../util/UseBetterMediaQuery";
export default function Skills(){
    const isMobile = useBetterMediaQuery("(max-width: 899px)");

    return(
        <>
            {isMobile ? 
            <section className="text-center">
                <h2 className="font-bold leading-[4.5rem] text-3xl">Skills</h2>
            </section>
            
            :
            
            <section>

            </section>}
        </>
    )
}