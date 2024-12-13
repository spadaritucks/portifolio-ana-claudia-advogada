'use client'

import Link from "next/link"
import './component.scss'


export default function Navbar () {

    return(
        <nav className="nav-area">
            <h1>Dra Ana Claudia</h1>
            <ul className="nav-links">
                <li><Link href='#home' >Home</Link></li>
                <li><Link href='#area-de-atuacao' >Area de Atuação</Link></li>
                <li><Link href='#sobre-mim' >Sobre mim</Link></li>
                <li><Link href='#projetos-artigos' >Projetos e Artigos</Link></li>
            </ul>
        </nav>
    )
}