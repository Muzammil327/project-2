'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navbar4 } from '@/components/layout/Navbar'

export default function Page () {
  const [buttonBottom, setButtonBottom] = useState(152)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setButtonBottom(4)
      } else {
        setButtonBottom(152)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='main font1'>
      <main className='wrapper2'>
        <Navbar4 bg='' />
        <h2
          className='font-bold font2 text-center mt-16 mb-8'
          style={{
            lineHeight: '1.625rem',
            fontSize: '1.375rem',
            letterSpacing: '.36px'
          }}
        >
          <span className='block text-balance'>
            Enter your email to get your personal
          </span>
          <span className='block text-[#3a7968]'>Vagus Nerve Reset plan!</span>
        </h2>
        <form action=''>
          <label className='block mb-[10px]'>
            <input
              type='email'
              placeholder='Enter your email to get your plan'
              name='email'
              className='text-base w-full min-w-0 caret-[#3a7968] bg-[#fcfcfc] border-[1px] border-solid outline-none border-[#e0deec] focus:border-[#3a7968]'
              style={{
                borderRadius: '.625rem',
                lineHeight: '1.4',
                letterSpacing: '-.025rem',
                appearance: 'none',
                padding: '.875rem .75rem'
              }}
            />
          </label>
        </form>
        <div
          className='flex justify-center items-center gap-[0.625rem]'
          style={{
            marginBlockStart: '1.90rem'
          }}
        >
          <svg
            viewBox='0 0 34 38'
            style={{
              inlineSize: '2.1rem',
              blockSize: '2.1rem',
              flexShrink: 0,
              fill: '#a19ebe'
            }}
          >
            <path d='M25.056 28.833q1.122 0 1.908-.786a2.6 2.6 0 0 0 .786-1.91q0-1.123-.786-1.894a2.62 2.62 0 0 0-1.908-.77q-1.11 0-1.89.78a2.59 2.59 0 0 0-.777 1.896 2.6 2.6 0 0 0 .778 1.9 2.56 2.56 0 0 0 1.889.784m-.006 5.362q1.34 0 2.506-.625a5.24 5.24 0 0 0 1.903-1.723 10.5 10.5 0 0 0-2.14-.91 7.9 7.9 0 0 0-2.263-.326 7.9 7.9 0 0 0-2.264.326 10.5 10.5 0 0 0-2.14.91 5.25 5.25 0 0 0 1.898 1.723 5.2 5.2 0 0 0 2.5.625M8.86 12.583h10.556V8.89q0-2.234-1.538-3.798-1.54-1.563-3.737-1.563t-3.74 1.563Q8.863 6.655 8.863 8.89v3.694ZM3.584 35.75a2.68 2.68 0 0 1-1.963-.816 2.68 2.68 0 0 1-.815-1.962v-17.61q0-1.147.815-1.963a2.68 2.68 0 0 1 1.963-.816h2.5V8.89q0-3.378 2.357-5.759 2.357-2.38 5.7-2.38 3.345 0 5.7 2.38 2.353 2.382 2.353 5.759v3.694h2.5q1.146 0 1.963.816.815.816.815 1.962v1.584q0 .599-.45.987a1.25 1.25 0 0 1-1.063.29 4 4 0 0 0-.625-.035q-.32.008-.64.008-4.458.11-7.506 3.284-3.05 3.174-3.049 7.632 0 1.32.326 2.576.327 1.258.924 2.396.306.57-.007 1.118t-.91.549zm21.472 1.5q-3.348 0-5.743-2.396t-2.396-5.743q0-3.347 2.396-5.743t5.743-2.396q3.346 0 5.743 2.396 2.395 2.396 2.395 5.743t-2.395 5.743q-2.397 2.396-5.743 2.396'></path>
          </svg>
          <p className='leading-4 text-[#706d8c] text-[.75rem]'>
            We respect your privacy and are committed to protecting your
            personal data. You’ll receive a link to access personalized plan for
            your convenience.
          </p>
        </div>
        <button
          className="fixed left-0 right-0 z-50 mx-auto w-full max-w-[23rem] btn4"
          style={{ bottom: `${buttonBottom}px` }}
          onClick={() => {
            router.push('/quiz/screen-36')
          }}
        >
          See My Results
        </button>
     
      </main>
    </div>
  )
}
