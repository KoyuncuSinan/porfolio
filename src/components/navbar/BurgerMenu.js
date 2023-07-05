import Link from "next/link"
export default function BurgerMenu(){
    return(
        <div className="bg-[#FDC435]">
            <ul className="flex justify-between bg-[#FDC435] text-white w-[75%] mx-auto py-2">
            <li><Link href={"/"}>About</Link></li>
            <li><Link href={"/"}>Projects</Link></li>
            <li><Link href={"/"}>Skills</Link></li>
            <li><Link href={"/"}>Contacts</Link></li>
        </ul>
        </div>
        
    )
}