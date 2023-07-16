import {Link} from "react-scroll"
export default function BurgerMenu(){
    return(
        <div className="bg-[#e68d2e] py-2 mt-2">
            <ul className="flex justify-between bg-[#e68d2e] text-white w-[75%] mx-auto">
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link></li>
            <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >Projects</Link></li>
            <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500} >Skills</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link></li>
        </ul>
        </div>
        
    )
}