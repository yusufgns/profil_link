import React from 'react'
import MainLayout from "@/components/Layout/MainHeader"
import { Work } from "@/components/Works/works.constant"
import { useTranslations } from 'next-intl'

export default function page({ params }: { params: { id: string } }) {
     const ID = params.id
     const data = Work().filter((item) => item.id === ID)
     const t = useTranslations('works_page')
     const tt = useTranslations('Works')

     return (
          <MainLayout>
               {data.map((item, index) => (
                    <main key={index} className='space-y-16'>
                         <section>
                              <h1 className='text-2xl font-bold tracking-[-0.042rem] leading-10 mb-3'>{item.title}</h1>
                              <h1 className='text-[#4a576f] text-lg break-words'>
                              <p>{item.description}</p>
                              </h1>
                         </section>

                         <section>
                              {item.image ? <img alt='' src={item.image} className='w-full h-full rounded-lg'></img> : <div className='w-full h-[240px] bg-gray-500 rounded-lg'></div>}
                              <div className='my-7 flex space-x-9'>
                                   <div className='max-w-[250px] break-words'>
                                        <h1 className='font-semibold text-sm'>{t('responsibilities')}</h1>
                                        <h1 className='text-sm'>
                                             {item.responsibilities}
                                        </h1>
                                   </div>
                                   <div className='max-w-[250px] break-words'>
                                        <h1 className='font-semibold text-sm'>{t('role')}</h1>
                                        <h1 className='text-sm'>
                                             {item.role}
                                        </h1>
                                   </div>
                                   <div className='max-w-[250px] break-words'>
                                        <h1 className='font-semibold text-sm'>{t('timeline')}</h1>
                                        <h1 className='text-sm'>
                                             {item.start_time} - {item.end_time}
                                        </h1>
                                   </div>
                              </div>
                         </section>

                         <hr />

                         <section>
                              {item.work_page?.introduction
                                   ?
                                   <div className='space-y-5'>
                                        <h1 className='text-2xl font-semibold leading-8 mb-5'>{t('introduction')}</h1>
                                        <p>{item.work_page.introduction}</p>
                                        <p>{item.work_page.introduction_2}</p>
                                   </div>
                                   :
                                   ""
                              }
                         </section>

                         {item.work_page?.introduction ? <hr /> : ""}
                    </main>
               ))}
          </MainLayout>
     )
}