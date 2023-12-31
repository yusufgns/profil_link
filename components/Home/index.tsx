import React from 'react'
import Image from 'next/image'
import { Work, WorkHeader } from '@/components/Works/works.constant'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Index() {
    const works = Work()
    const t = useTranslations('Home')
    return (
        <div>
            <h1 className='font-bold text-[#8C99AF] mb-5'>
                {t('works')}
            </h1>
            <div className='flex items-center justify-between gap-y-8 flex-wrap'>
                {works.map((item, index) => (
                    <Link href={`/works/${item.id}`} key={index} className='flex text-start flex-col max-w-[344px] min-w-[344px] space-y-1 hover:cursor-pointer'>
                        <span>
                            {item.image && <Image alt='WorkImage' src={item.image} height={344} width={720} className='w-[344px] h-[344px] rounded-lg object-cover'></Image>}
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
                    </Link>
                ))}
            </div>
        </div>
    )
}