import React from 'react'
import { Skills } from "@/components/Skills/skill.constant"
import { Dot } from "lucide-react"
import { useTranslations } from 'next-intl'

export default function Index() {
  const skill = Skills()
  const t = useTranslations('Home')
  return (
    <div>
      <h1 className='font-bold text-[#8C99AF] mb-5'>
        {t('skills')}
      </h1>
      <div className='flex items-center transition-all break-words flex-wrap text-start gap-2'>
        {skill.map((item, index) => (
          <div key={index} className='text-[#8C99AF] hover:text-black transition-all flex items-center'>
            <Dot />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}
