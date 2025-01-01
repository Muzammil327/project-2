'use client'
import { Arrow } from '@/app/page'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CardAuthor({ data, index }: any) {
  const [selected, setSelected] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setSelected(prev => (prev === index ? null : index))
  }
  return (
    <Link href={data.slug}>
      <button
        className={`
                         bg-[#d8e4e1] 
                         ${selected === index
            ? 'btn1 border border-[#3a7967]'
            : 'btn1 border border-transparent'
          }
                       `}
        onClick={() => handleClick(index)}
        key={index}
      >
        <Image
          alt={data.name}
          width='300'
          height='300'
          className='absolute bottom-10 w-[90%] left-1/2 -translate-x-1/2'
          src={data.image}
        />
        <span className='flex items-center justify-center gap-4 w-full rounded-b-xl bg-[#3a7967] py-2 px-1'>
          {data.name} <Arrow />
        </span>
      </button>
    </Link>
  )
}
