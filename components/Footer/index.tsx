import React from 'react'
import { Hero as SocialMedia } from "@/components/Hero/hero.constant"
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Index() {
    const HeroIcon = SocialMedia()
    const t = useTranslations('Footer')
    return (
        <main className='flex items-center justify-center flex-col mt-16'>
            <section className='flex items-center space-x-5 justify-center mb-4'>
                {HeroIcon.map((item, index) => (
                    <Link key={index} href={item.socialMedia.href || ''} target='_blank'>
                        {item.socialMedia.icon}
                    </Link>
                ))}
            </section>

            <div className="text-[#919CB2]">{t('city')}, {t('country')}</div>
        </main>
    )
}
