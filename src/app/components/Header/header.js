"use client"
import Logo from "../Logo/logo";
import Image from "next/image";
import "./header.css";
import { useEffect, useRef, useState } from "react";
import LoginWarn from "../LoginWarn/login-warn";
import Link from "next/link";

export default function Header() {
    const [openMobile, setOpenMobile] = useState(false);
    const [mobileClass, setMobileClass] = useState("");
    const [mobileImg, setMobileImg] = useState("menu.svg");
    const [loginWarnIsOpen, setLoginWarnIsOpen] = useState(false)

    useEffect(() => {
        console.log(openMobile)
        if (!openMobile) {
            setMobileClass('')
            setMobileImg('menu.svg')
        } else {
            setMobileClass('open')
            setMobileImg('close.svg')
        }
    }, [openMobile])

    return (
        <header id="header">
            <LoginWarn isOpen={loginWarnIsOpen} setIsOpen={setLoginWarnIsOpen} />
            <nav className="menu">
                <section className="logo">
                    <Logo />
                </section>
                <section className="menu-list">
                    <ul>
                        <li className="menu-item"><Link href={"/"} className="menu-link">Home</Link></li>
                        <li className="menu-item"><Link href={"/pages/agendar"} className="menu-link common-btn-outline">Agende já seu reparo!</Link></li>
                        <li className="menu-item"><Link href={"/pages/login"} id="btnEntrar" className="menu-link common-btn">Login</Link></li>
                    </ul>
                </section>

                <section className="menu-btn">
                </section>


                <section className="mobile-menu-icon">
                    <button onClick={() => setOpenMobile(prev => !prev)}><Image alt={(openMobile ? "Open " : "Close ") + 'menu'} objectFit="contain" width={32} height={32} className="icon" src={"/assets/" + mobileImg} /></button>
                </section>

            </nav>
            <section className={"mobile-menu " + mobileClass}>
                <ul>
                        <li className="menu-item"><Link href={"/"} className="menu-link">Home</Link></li>
                        <li className="menu-item"><Link href={"/pages/agendar"} className="menu-link common-btn-outline">Agende já seu reparo!</Link></li>
                        <li className="menu-item"><Link href={"/pages/login"} id="btnEntrar" className="menu-link common-btn">Login</Link></li>
                    </ul>
            </section>
        </header>
    );
}