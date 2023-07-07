import {Link} from "react-scroll"
export default function BurgerMenu(){
    return(
        <div className="bg-[#FDC435]">
            <ul className="flex justify-between bg-[#FDC435] text-white w-[75%] mx-auto py-2">
            <li><Link to="about" spy={true} smooth={true} offset={2} duration={500} >About</Link></li>
            <li><Link to="projects" spy={true} smooth={true} offset={2} duration={500} >Projects</Link></li>
            <li><Link to="skills" spy={true} smooth={true} offset={2} duration={500} >Skills</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={2} duration={500} >Contact</Link></li>
        </ul>
        </div>
        
    )
}