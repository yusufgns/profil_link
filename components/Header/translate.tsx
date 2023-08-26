'use client'
import React from 'react'
import { usePathname } from "next-intl/client"
import { useRouter, useParams } from "next/navigation"
import TranslateArray from "./translate.constant"

export default function Translate() {
  const pathname = usePathname()
  const router = useRouter()
  const handleTranslate = (lang: string) => {
    router.replace(`/${lang}${pathname}`)
  }
  const locales = useParams().locale as string
  return (
    <section className='flex items-center space-x-1.5'>
      {TranslateArray(locales).map((item, index) => (
        <div
          key={index}
          className={`text-xs hover:text-black font-bold ${item.isActive ? ' text-black text-base' : 'opacity-60'}`}
          onClick={() => {
            if (item.href) {
              handleTranslate(item.href);
            }
          }}
        >
          {item.title}
        </div>
      ))}
    </section>
  )
}
