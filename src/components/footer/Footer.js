"use client"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer(){
    return(
        <footer className="bg-gray-200 mt-20 p-10 umd:px-80">
            <div className="flex justify-between text-black">
            <p className="font-bold text-lg">Sinan Koyuncu</p>
                <div className="flex">
                <a href={"https://www.linkedin.com/in/sinan-koyuncu/"} className="mr-5" target="_blank">
                <LinkedInIcon />
                </a> 
                <a href={"https://github.com/KoyuncuSinan"} className target="_blank">
                <GitHubIcon />
                </a>

                </div>
            </div>
        </footer>
    )
}