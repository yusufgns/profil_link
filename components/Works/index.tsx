'use client'
import React from 'react'
import { Work, WorkHeader } from "./works.constant"
import Image from 'next/image'
import { Dot } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Index() {
    const router = useRouter()
    const data = Work()
    const t = useTranslations('works_page')
    return (
        <div>
            <h1 className='text-2xl font-bold tracking-[-0.042rem] leading-10'>{t('title')}</h1>
            <h1 className='text-[#4a576f] text-lg break-words mt-3 mb-7'>{t('description')}</h1>
            <div className='flex items-center justify-between gap-y-8 flex-wrap'>
                {data.map((item, index) => (
                    <div key={index} className='flex text-start flex-col max-w-[344px] min-w-[344px]hover:cursor-pointer' onClick={() => router.push(`/works/${item.id}`)}>
                        <span className='my-1'>
                            {item.image && <Image alt='' src={item.image} width={344} height={344} className='w-[344px] h-[344px] rounded-lg'></Image>}
                            {item.image === "" && <div className='w-[344px] h-[344px] bg-gray-500 rounded-lg'></div>}
                        </span>

                        <span className='font-semibold'>
                            {item.title}
                        </span>

                        <span className='text-[#8C99AF] font-semibold text-[14px] max-w-[344px] break-words mb-1'>
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
