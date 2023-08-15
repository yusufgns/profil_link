'use client'
import React from 'react'
import { Work, WorkHeader } from "./works.constant"
import Image from 'next/image'
import { Dot } from 'lucide-react/dist/esm/lucide-react'
import { useRouter } from 'next/navigation'

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    return (
        <div>
            <h1 className='text-3xl font-bold tracking-[-0.042rem] leading-10'>{WorkHeader.title}</h1>
            <h1 className='text-[#4a576f] text-lg break-words mt-3 mb-7'>{WorkHeader.description}</h1>
            <div className='flex items-center justify-between gap-y-8 flex-wrap'>
                {Work.map((item, index) => (
                    <div key={index} className='flex text-start flex-col max-w-[344px] min-w-[344px] space-y-1 hover:cursor-pointer' onClick={() => router.push(`works/${item.id}`)}>
                        <span>
                            {item.image && <Image alt='' src={item.image} width={344} height={344} className='w-[344px] h-[344px] rounded-lg'></Image>}
                            {item.image === "" && <div className='w-[344px] h-[344px] bg-gray-500 rounded-lg'></div>}
                        </span>

                        <span className='text-lg font-semibold'>
                            {item.title}
                        </span>

                        <span className='text-[#8C99AF] font-medium text-[15px] max-w-[344px] break-words'>
                            {item.description}
                        </span>

                        <span className='text-[#8C99AF] font-medium text-[15px] max-w-[344px] break-words flex items-center'>
                            <h1>{item.start_time}</h1>
                            <Dot />
                            <h1>{item.end_time}</h1>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
