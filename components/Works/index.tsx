import React from 'react'
import { Work, WorkHeader } from "./works.constant"
import Image from 'next/image'
import { Dot } from 'lucide-react/dist/esm/lucide-react'
import { useRouter } from 'next/navigation'

export default function Index() {
    const router = useRouter()
    return (
        <div>
            <h1 className='text-3xl font-bold tracking-[-0.042rem] leading-10'>{WorkHeader.title}</h1>
            <h1 className='text-[#4a576f] text-lg break-words mt-3 mb-7'>{WorkHeader.description}</h1>
            <div className='flex items-center justify-between gap-y-8 flex-wrap'>
                
            </div>
        </div>
    )
}
