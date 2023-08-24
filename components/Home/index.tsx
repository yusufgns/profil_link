'use client';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Work, WorkHeader } from '@/components/Works/works.constant'

export default function Index() {
    const router = useRouter()
    const works = Work()
    return (
        <div>
            <h1 className='font-bold text-[#8C99AF] mb-5'>{WorkHeader.title}</h1>
            <div className='flex items-center justify-between gap-y-8 flex-wrap'>
                {works.map((item, index) => (
                    <div key={index} className='flex text-start flex-col max-w-[344px] min-w-[344px] space-y-1 hover:cursor-pointer' onClick={() => router.push(`/works/${item.id}`)}>
                        <span>
                            {item.image && <Image alt='' src={item.image} width={344} height={344} className='w-[344px] h-[344px] rounded-lg'></Image>}
                            {item.image === "" && <div className='w-[344px] h-[344px] bg-gray-500 rounded-lg'></div>}
                        </span>

                        <span className='font-semibold'>
                            {item.title}
                        </span>

                        <span className='text-[#8C99AF] font-semibold text-[14px] max-w-[344px] break-words'>
                            {item.description}
                        </span>

                        <span className='text-[#8C99AF] opacity-75 text-[13px]'>
                            {item.start_time} - {item.end_time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}