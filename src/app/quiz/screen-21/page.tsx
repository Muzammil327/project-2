'use client'
import React from 'react'
import Endscreen from '@/components/quiz/Endscreen'

export default function page () {
  return (
    <Endscreen
      image='/end-2.webp'
      head="Quick science moment: What's the Vagus Nerve anyway?"
      para={
        <>
          <p>
            The Vagus Nerve is like{' '}
            <strong className='font-bold text-[#3a7968]'>
              your body's superhighway,
            </strong>{' '}
            connecting your brain to many important organs. When it's not
            working properly, it contributes to stress, fatigue, brain fog, and
            even digestive issues.
          </p>
          <p className='mt-4'>
            Our plan will help you{' '}
            <strong className='font-bold text-[#3a7968]'>
              lower your stress levels
            </strong>{' '}
            by soothing your Vagus Nerve and enable your body to
            <strong className='font-bold text-[#3a7968]'>
              switch to rest mode.
            </strong>{' '}
          </p>
        </>
      }
      nextpage='/quiz/screen-22'
    />
  )
}
