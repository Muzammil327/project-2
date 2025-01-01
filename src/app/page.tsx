import React from 'react'
import CardAuthor from '@/components/card/CardAuthor'
import Navbar from '@/components/layout/Navbar'

export default function Home () {
  return (
    <div className='main font1'>
      <main className='wrapper'>
        <Navbar />
        <div
          style={{
            maxWidth: 'calc(-2rem + 100vw)',
            opacity: '1',
            willChange: 'auto'
          }}
        >
          <div className='flex gap-9 flex-col h-full'>
            <div>
              <h1 className='h1 font2 pt-3'>Vagus nerve reset program</h1>
              <p className='p1'>
                A step-by-step plan to <b>reduce stress, STOP WORRYING</b> and{' '}
                <b>get out of survival mode</b>
              </p>
              <p className='p2'>1-minute quiz</p>
              <div className='grid grid-cols-2 gap-3'>
                {data.map((data: any, index) => {
                  return <CardAuthor data={data} index={index} key={index} />
                })}
              </div>
            </div>
            <CopyRight />
          </div>
        </div>
      </main>
    </div>
  )
}

export const data = [
  {
    id: 0,
    name: 'Plan for Men',
    image: '/1.webp',
    slug: '/men',
    menu: [
      {
        name: '18-29',
        image: '/1-1.webp',
        slug: '/men/welcome'
      },
      {
        name: '30-39',
        image: '/1-2.webp',
        slug: '/men/welcome'
      },
      {
        name: '40-50',
        image: '/1-3.webp',
        slug: '/men/welcome'
      },
      {
        name: '50+',
        image: '/1-4.webp',
        slug: '/men/welcome'
      }
    ]
  },
  {
    id: 1,
    name: 'Plan for Women',
    image: '/2.webp',
    slug: '/women',
    menu: [
      {
        name: '18-29',
        image: '/2-1.webp',
        slug: '/women/welcome'
      },
      {
        name: '30-39',
        image: '/2-2.webp',
        slug: '/women/welcome'
      },
      {
        name: '40-50',
        image: '/2-3.webp',
        slug: '/women/welcome'
      },
      {
        name: '50+',
        image: '/2-4.webp',
        slug: '/women/welcome'
      }
    ]
  }
]

export function Arrow () {
  return (
    <svg
      width='9'
      height='14'
      fill='none'
      viewBox='0 0 9 14'
      aria-hidden='true'
    >
      <path
        stroke='#FCFCFC'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m1.833 1.167 5.803 5.802-5.803 5.803'
      ></path>
    </svg>
  )
}

function CopyRight () {
  return (
    <p
      className='text-center mx-auto'
      style={{
        fontSize: '.75rem',
        lineHeight: '1rem',
        color: '#8696a6',
        letterSpacing: '-.025em'
      }}
    >
      By clicking “Plan for Men” or “Plan for Women” you agree with our:{' '}
      <a
        href='https://legal.tryleaply.com/terms-of-use'
        target='_blank'
        className='a1'
      >
        Terms of Use
      </a>
      ,{' '}
      <a
        href='https://legal.tryleaply.com/privacy-policy'
        target='_blank'
        className='a1'
      >
        Privacy Policy
      </a>
      ,{' '}
      <a
        href='https://legal.tryleaply.com/subscription-policy'
        target='_blank'
        className='a1'
      >
        Subscription Policy
      </a>
      , and{' '}
      <a
        href='https://legal.tryleaply.com/cookie-policy'
        target='_blank'
        className='a1'
      >
        Cookie Policy
      </a>
      .
    </p>
  )
}
