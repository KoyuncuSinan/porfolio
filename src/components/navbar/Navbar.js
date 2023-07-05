"use client"
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import useBetterMediaQuery from "../util/UseBetterMediaQuery";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useBetterMediaQuery("(max-width: 899px)");

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }
     
    return(
        <header className="mt-3">
            {isMobile ?
            <>
            <nav className="text-black w-[85%] mx-auto flex items-center justify-between">
                <span>Sinan Koyuncu</span>
                <div className>
                <MenuIcon onClick = {handleMenuClick}/>
                </div>
            </nav>
                {isMenuOpen && <div> <BurgerMenu /></div>}
            </>
            :
            <nav className="grid grid-cols-4 w-[70%] mx-auto items-center  text-black">
            <span className="col-span-1">Sinan Koyuncu</span>
            <ul className="flex flex-row col-span-3 justify-end items-center">
                <li className="mr-5"><Link href={"/"}>About</Link></li>
                <li className="mr-5"><Link href={"/"}>Projects</Link></li>
                <li className="mr-5"><Link href={"/"}>Skills</Link></li>
                <li><Link href={"/"}>Contacts</Link></li>
            </ul>
            </nav>
        }
        </header>
    )

}