'use client'
import React from 'react'
import MainLayout from "@/components/Layout/MainHeader"
import { Work } from "@/components/Works/works.constant"
import Image from 'next/image'


export default function page({ params }: { params: { id: string } }) {
    const ID = params.id
    const data = Work().filter((item) => item.id === ID)

    return (
        <MainLayout>
            {data.map((item, index) => (
                <main key={index} className='space-y-16'>
                    <section>
                        <h1 className='text-2xl font-bold tracking-[-0.042rem] leading-10 mb-3'>{item.title}</h1>
                        <h1 className='text-[#4a576f] text-lg break-words mt-3 mb-7'>{item.description}</h1>
                    </section>

                    <section>
                        {item.image ? <Image alt='' src={item.image} className='w-full h-full rounded-lg'></Image> : <div className='w-full h-[240px] bg-gray-500 rounded-lg'></div>}
                    </section>

                    <hr />

                    <section>
                        {item.work_page?.introduction
                            ? <div>
                                <h1 className='text-2xl font-semibold leading-8'>Introduction</h1>
                                <p>{item.work_page.introduction}</p>
                            </div>
                            : ""
                        }
                    </section>
                </main>
            ))}
        </MainLayout>
    )
}
