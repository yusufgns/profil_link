import React from 'react';
import Headers, { IHeader } from "./header.constant";
import Link from 'next/link';

export default function Index() {
    const Header = Headers();

    return (
        <main className='flex items-center text-[#8C99AF] justify-between'>
            <section className='flex items-center'>
                <div className='w-[40px] h-[40px] bg-slate-400 rounded-full mr-3'></div>
                <h1 className='font-medium'>Yusuf Gunes</h1>
            </section>
            <section className='space-x-6'>
                {Header.map((item, index) => (
                    <HeadersItem key={index} {...item} />
                ))}
            </section>
        </main>
    );
}

function HeadersItem(item: IHeader) {
    return (
        <Link href={item.href} key={item.title}>
            <div className='hover:text-black transition-colors font-medium'>
                {item.title}
            </div>
        </Link>
    );
}
