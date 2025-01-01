'use client'
import React from 'react'
import Endscreen from '@/components/quiz/Endscreen'

export default function page () {
  return (
    <Endscreen
      image='/end-1.webp'
      head='The reasons for feeling off are deeper than you might think.'
      para={
        <p>
          Research shows that stress, tension, fatigue, procrastination, brain
          fog, and emotional eating are often caused by{' '}
          <strong className='font-bold text-[#ba4949]'>irritation of the Vagus Nerve</strong>.
        </p>
      }
      nextpage='/quiz/screen-20'
    />
  )
}
