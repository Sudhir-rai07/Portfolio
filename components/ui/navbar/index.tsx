import React from 'react'
import ConnectButton from '../connect-button'
import { navLinks } from '@/lib/constants'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-between px-4 lg:px-16 py-4'>
                <div className='flex items-baseline'>
                    <h1 className='text-2xl'>S</h1>
                    <span>udhir</span>
                </div>
                <div>
                    <NavLinks />
                </div>
                <div>
                    <ConnectButton />
                </div>
            </nav>
        </header>
    )
}


const NavLinks = () => {
    return (
        <div className='flex gap-4'>
            {navLinks.map((item, index) => (
                <Link href={item.url} key={item.url} className=''>{item.name}</Link>
            ))}
        </div>
    )
}