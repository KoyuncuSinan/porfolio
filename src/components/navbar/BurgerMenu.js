import Link from "next/link"
export default function BurgerMenu(){
    return(
        <ul className="flex flex-col">
            <li><Link href={"/"}>About</Link></li>
            <li><Link href={"/"}>Projects</Link></li>
            <li><Link href={"/"}>Skills</Link></li>
            <li><Link href={"/"}>Contacts</Link></li>
        </ul>
    )
}