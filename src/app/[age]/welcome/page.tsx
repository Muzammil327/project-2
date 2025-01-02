'use client'
import { Navbar2 } from '@/components/layout/Navbar'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Page () {
  const pathname = usePathname()
  return (
    <div className='main font1'>
      <main className='wrapper'>
        <Navbar2 progress={false} progressValue={5} />
        <div className='flex flex-col justify-between gap-4 h-full'>
          <div className='mt-10'>
            <h2
              className='font2'
              style={{
                lineHeight: '1',
                textAlign: 'center',
                fontWeight: '700',
                maxInlineSize: '325px',
                color: '#3a7968',
                marginBlockEnd: '0.375em',
                letterSpacing: '0.36px',
                marginInline: 'auto',
                fontSize: '1.875rem'
              }}
            >
              250 000+ people
            </h2>
            <p
              className='font2'
              style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                marginInline: 'auto',
                marginBlockEnd: '10dvh',
                lineHeight: '1',
                textAlign: 'center',
                letterSpacing: '-.025em',
                maxInlineSize: '325px'
              }}
            >
              have trusted Leaply
            </p>
            {pathname === '/men/welcome' ? (
              <Image src='/1-1-1.webp' alt='' className='img1' height={400} width={400} />
            ) : (
              <Image src='/2-2-2.webp' alt='' className='img1' height={400} width={400} />
            )}
          </div>

          <Link href='/quiz'>
            <button
              type='button'
              className='fixed bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-[23rem] btn2'
            >
              Continue
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
