'use client'
import React from 'react'
import Endscreen from '@/components/quiz/Endscreen'

export default function page () {
  return (
    <Endscreen
      image='/end-3.webp'
      head='Your plan is developed by certified experts'
      para={
        <p>
          Scientific studies has shown that non-invasive Vagus Nerve Stimulation
          techniques
          <strong className='font-bold text-[#3a7968]'>
            significantly reduce negative effects
          </strong>{' '}
          and improve overall well-being.
        </p>
      }
      nextpage='/quiz/screen-28'
    />
  )
}
