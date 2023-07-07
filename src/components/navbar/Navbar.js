"use client"
import MenuIcon from '@mui/icons-material/Menu';
import useBetterMediaQuery from "../util/UseBetterMediaQuery";
import BurgerMenu from "./BurgerMenu";
import {Link} from "react-scroll"
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
                <a href={"/"}>Sinan Koyuncu</a>
                <div className>
                <MenuIcon onClick = {handleMenuClick}/>
                </div>
            </nav>
                {isMenuOpen && <div> <BurgerMenu /></div>}
            </>
            :
            <nav className="grid grid-cols-4 w-[70%] mx-auto items-center  text-black">
            <a href={"/"} className="col-span-1">Sinan Koyuncu</a>
            <ul className="flex flex-row col-span-3 justify-end items-center">
                <li className="mr-5 hover:bg-[#FDC435] p-1 rounded-md cursor-pointer"><Link to="about" spy={true} smooth={true} offset={2} duration={500} >About</Link></li>
                <li className="mr-5 hover:bg-[#FDC435] p-1 rounded-md cursor-pointer"><Link to="projects" spy={true} smooth={true} offset={2} duration={500} >Projects</Link></li>
                <li className="mr-5 hover:bg-[#FDC435] p-1 rounded-md cursor-pointer"><Link to="skills" spy={true} smooth={true} offset={2} duration={500} >Skills</Link></li>
                <li className="hover:bg-[#FDC435] p-1 rounded-md cursor-pointer"><Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link></li>
            </ul>
            </nav>
        }
        </header>
    )

}