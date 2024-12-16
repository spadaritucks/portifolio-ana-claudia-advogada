'use client'

import Link from "next/link"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './component.scss'
import { useState } from "react";
import Image from "next/image";
import logo from '@/../public/logo.png'


export default function Navbar () {

    const [toogleOpen, setToogleOpen] = useState<boolean>(false)

    const handleOpenMenu = () => {
        setToogleOpen(!toogleOpen)
    }

    return(
        <nav className="nav-area">
            <Image src={logo} width={70} height={70} alt="Logo" className="logo" />
            <ul className={`nav-links ${toogleOpen ? 'open': ''}`}>
                <li><Link href='#home' >Home</Link></li>
                <li><Link href='#area-de-atuacao' >Area de Atuação</Link></li>
                <li><Link href='#sobre-mim' >Sobre mim</Link></li>
                <li><Link href='#clientes' >Projetos e Artigos</Link></li>
            </ul>
            
            {toogleOpen ? <div className="hamburguer-menu" onClick={handleOpenMenu}><CloseIcon sx={{fontSize: 50}}/></div> : 
            <div className="hamburguer-menu" onClick={handleOpenMenu}><MenuIcon sx={{fontSize: 50}}/></div>}
        </nav>
    )
}