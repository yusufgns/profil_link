import React from 'react'
import { Bookmark, BookmarkHeader } from "./bookmark.constant"

export default function index() {
    return (
        <div>
            <h1 className='text-2xl font-bold tracking-[-0.042rem] leading-10'>{BookmarkHeader.title}</h1>
            <h1 className='text-[#4a576f] text-lg break-words mt-3 mb-7'>{BookmarkHeader.description}</h1>
            {Bookmark.map((item, index) => (
                <div key={index}>
                    <span className='flex items-center justify-between mb-3'>
                        <h1 className='text-lg font-semibold'>{item.head}</h1>
                        <h1 className='text-xs opacity-75'>
                            {item.time}
                        </h1>
                    </span>
                    <div className='flex flex-col space-y-4 mb-8'>
                        {item.hero.map((detail, index) => (
                            <div key={index} className='border-b pb-1 hover:border-dashed hover:border-black'>
                                <span className='flex items-center'>
                                    <h1 className='text-black opacity-80 font-semibold'>
                                        {detail.title}
                                    </h1>
                                    
                                    <div className='opacity-40 font-medium'>
                                        {detail.badge}
                                    </div>
                                </span>

                                <span className='opacity-40 flex items-center mt-1'>
                                    <h1 className='text-sm'>
                                        {detail.url}
                                    </h1>
                                    
                                    <h1 className='text-sm'>
                                        {detail.time}
                                    </h1>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
