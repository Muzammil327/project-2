'use client'
import React from 'react'
import { Navbar4 } from '@/components/layout/Navbar'
import { useRouter } from 'next/navigation'
import { Typewriter } from 'react-simple-typewriter'

export default function Page () {
  const router = useRouter()
  const description = {
    emoji: '☝️',
    head: 'High stress level',
    title:
      'High levels of vagal stress can lead to chronic fatigue, procrastination, brain fog, sleep disorders, and emotional eating.'
  }
  return (
    <div className='!bg-[#f6f7f9] main font1'>

      <main className='wrapper'>
        <React.Fragment>
          <Navbar4 bg='bg-[#f6f7f9]' />
          <div className='end'>
            <h2 className='font2' style={{
              fontSize: '1.375rem',
              fontWeight: '700',
              lineHeight: '1',
              textAlign: 'center',
              marginBlockEnd: '1.5rem'
            }}>
            Summary of your profile
            </h2>
            <div className="anxiety">
              sdc
            </div>
            <div className='description mb-3'>
              <span className='text-base'>{description.emoji}</span>
              <div>
                <h3
                  style={{
                    fontSize: '.875rem',
                    fontWeight: '700',
                    letterSpacing: '-.025em'
                  }}
                >
                  <span>{description.head}</span>
                </h3>

                <article
                  style={{
                    fontSize: '.75rem',
                    fontWeight: '400',
                    letterSpacing: '-.025em'
                  }}
                >
                  <Typewriter
                    words={[description.title]}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </article>
              </div>
            </div>
            <button
              className='fixed bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-[23rem] btn2'
              onClick={() => {
                router.push('/quiz/screen-30')
              }}
            >
              Continue
            </button>
          </div>
        </React.Fragment>
      </main>
    </div>
  )
}
