"use client"
import React from 'react'
import Link from 'next/link'
import TextReveal from './TextReveal'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  return (
    <div className='w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#f4f4f2]/10 px-6 md:px-[1.7rem] fixed top-0 left-0 h-[8vh] z-50 flex items-center justify-between'>

        <div className="leftNameSide">
            <TextReveal>
                <Link href="/">
                    <h3 className='font-space-grotesk text-[1.1rem] md:text-[1.3rem] tracking-tight text-[#f4f4f2]'>
                        Sujit Kumar
                    </h3>
                </Link>
            </TextReveal>
        </div>

        <div className="rightLinkSide flex items-center gap-8 md:gap-10">
            {navLinks.map((link) => (
                <TextReveal key={link.label}>
                    <Link
                        href={link.href}
                        className="group relative font-manrope text-[0.85rem] tracking-[0.15em] uppercase text-[#f4f4f2]/70 hover:text-[#f4f4f2] transition-colors duration-300"
                    >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#f4f4f2] transition-all duration-300 ease-out group-hover:w-full" />
                    </Link>
                </TextReveal>
            ))}
        </div>

    </div>
  )
}

export default Navbar