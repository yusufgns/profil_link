import React from 'react';
import Headers, { IHeader } from "./header.constant";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl'
import Translate from './translate';
import { Me } from "./header.constant"
import Image from 'next/image';

export default function Index() {
    const Header = Headers();
    const t = useTranslations('Header')
    const me = Me()

    return (
        <main className='flex items-center text-[#8C99AF] justify-between'>
            <section className='flex items-center'>
                {me.avatar ? <Image src={me.avatar} alt='Avatar' width={40} height={40} className='rounded-full mr-3'></Image> : <div className='w-[40px] h-[40px] bg-slate-400 rounded-full mr-3'></div>}
                <h1 className='font-medium'>{me.name}</h1>
            </section>
            <section className='space-x-6 flex items-center'>
                {Header.map((item, index) => (
                    <HeadersItem key={index} {...item} />
                ))}
                <Translate />
            </section>
        </main>
    );
}

const HeadersItem = (item: IHeader) => {
    const t = useTranslations('Header')
    return (
        <Link href={item.href || ""} key={item.title}>
            <div className='hover:text-black transition-colors font-medium'>
                {t(item.title)}
            </div>
        </Link>
    );
}
