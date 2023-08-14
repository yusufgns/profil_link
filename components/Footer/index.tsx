import React from 'react'
import { Hero as SocialMedia } from "@/components/Hero/hero.constant"
import Link from 'next/link'

export default function index() {
    const HeroIcon = SocialMedia()
    return (
        <div className='flex items-center space-x-5 justify-center flex-col mt-16'>
            <span className='flex items-center space-x-5 justify-center mb-4'>
                {HeroIcon.map((item, index) => (
                    <Link key={index} href={item.socialMedia.href} target='_blank'>
                        {item.socialMedia.icon}
                    </Link>
                ))}
            </span>

            <h1 className="text-[#919CB2]">Istanbul, Turkey</h1>
        </div>
    )
}