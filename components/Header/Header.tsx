import React from 'react'
import Headers, { IHeader } from "./header.constant"
import Link from 'next/link'

export default function Index() {
    const Test = Headers()
    return (
        <main className='flex items-center text-[#8C99AF] justify-between'>
            <section className='flex items-center'>
                <div className='w-[40px] h-[40px] bg-slate-400 rounded-full mr-3'></div>
                <h1 className='font-medium'>Yusuf Gunes</h1>
            </section>
            <section className='space-x-6'>
                {Test.map((item, index) => (
                    <Header.Item key={index} {...item} />
                ))}
            </section>
        </main>
    )
}


// eslint-disable-next-line react/display-name
Header.Item = (item: IHeader, index: number) => {
    return (
        <Link key={index} href={item.href} className='hover:text-black transition-colors font-medium'>
            {item.title}
        </Link>
    )
}