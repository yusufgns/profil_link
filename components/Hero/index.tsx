import React from 'react'
import { Hero, HeroMe } from './hero.constant'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useTranslations } from 'next-intl'

export default function Index() {
  const HeroIcon = Hero()
  const t = useTranslations('Home')
  return (
    <div>
      <h1 className='text-2xl'>
        {t('title')}
      </h1>
      <Badge variant={'outline'} className='my-8 text-[#8C99AF] rounded-2xl w-fit flex items-center text-sm'>
        <div className="w-1.5 h-1.5 border-[1px] border-green-700 bg-green-400 rounded-full animate-ping mr-2"></div>
        {t('social')}
      </Badge>
      <div className='flex items-center space-x-5'>
        <span className='flex items-center space-x-5'>
          {HeroIcon.map((item, index) => (
            <Link key={index} href={item.socialMedia.href || ""} target='_blank'>
              {item.socialMedia.icon}
            </Link>
          ))}
        </span>
        <Link href={HeroMe.cv || ""} target='_blank'>
          <Button variant={'outline'}>
            {t('resum')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
