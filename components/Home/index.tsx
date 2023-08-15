import React from 'react'
import { Feature, FeatureHeader } from "./home.constant"
import Image from 'next/image'

export default function index() {
    const Features = Feature()
    return (
        <div>
            <h1 className='font-bold text-[#8C99AF] mb-5'>{FeatureHeader.title}</h1>
            <div className='flex items-center justify-between gap-y-8 flex-wrap'>
                {Features.map((item, index) => (
                    <div key={index} className='flex text-start flex-col max-w-[344px] min-w-[344px] space-y-2 hover:cursor-pointer'>
                        <span>
                            {item.image && <Image alt='' src={item.image} width={344} height={344} className='w-[344px] h-[344px] rounded-lg'></Image>}
                            {item.image === "" && <div className='w-[344px] h-[344px] bg-gray-500 rounded-lg'></div>}
                        </span>

                        <span className='text-lg font-semibold'>
                            {item.title}
                        </span>

                        <span className='text-[#8C99AF] font-semibold text-[15px] max-w-[344px] break-words'>
                            {item.description}
                        </span>

                        <span className='text-[#8C99AF] opacity-75 text-[13px]'>
                            {item.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
