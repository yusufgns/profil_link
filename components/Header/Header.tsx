import React from 'react';
import Headers, { IHeader } from "./header.constant";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Index() {
    const Header = Headers();
    const t = useTranslations('Hero')

    return (
        <main className='flex items-center text-[#8C99AF] justify-between'>
            <section className='flex items-center'>
                <div className='w-[40px] h-[40px] bg-slate-400 rounded-full mr-3'></div>
                <h1 className='font-medium'>{t('name')}</h1>
            </section>
            <section className='space-x-6 flex items-center'>
                {Header.map((item, index) => (
                    <HeadersItem key={index} {...item} />
                ))}
            </section>
        </main>
    );
}

function HeadersItem(item: IHeader) {
    return (
        <Link href={item.href || ""} key={item.title}>
            <div className='hover:text-black transition-colors font-medium'>
                {item.title}
            </div>
        </Link>
    );
}
