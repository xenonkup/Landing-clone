'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
// import { useState } from "react"

export default function Navbar() {

    // const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();

    // สร้าง Object Nav
    const navLinks = [
        { href: '#', label: 'Demos' },
        { href: '#', label: 'Pages' },
        { href: '#', label: 'Support' },
        { href: '#', label: 'Contact' },
    ]

    return (
        <header className="w-full ">
            <nav className="container mx-auto flex flex-row items-center justify-between p-6 lg:px-8 ">
                
                {/* Logo */}
                <div className="flex items-center gap-10">
                    <h3 className="text-2xl font-bold">Brainwave.io</h3>
                    {/* Desktop Menu */}
                    <ul className="hidden gap-6 md:flex">
                        {navLinks.map((link, index) => (
                            <li key={index} >
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? 'active' : ''}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden gap-6 md:flex">
                    {/* Button อยู่ขวา*/}
                    <button className="text-white font-medium bg-blue-700 p-2 rounded-md ">
                        <Link href="#">Get started a project</Link>
                    </button>
                </div>
            </nav>
        </header>
    )
}