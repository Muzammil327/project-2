'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return ( 
    <QuizLayout
      progressValue={85}
      nextRoute='/quiz/screen-33'
      backRoute='/quiz/screen-30'
      data={{
        id: 1,
        title:
          'How much time are you willing to spend to improve your vagal tone?',
        options: [
          { emoji: undefined, text: "5 min/day"},
          { emoji: undefined, text: "10 min/day"},
          { emoji: undefined, text: "15 min/day"},
          { emoji: undefined, text: "20+ min/day"},
       ],
        correctOption: "In a week"
      }}
    />
  )
}
