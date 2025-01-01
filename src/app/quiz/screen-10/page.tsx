'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={34}
      nextRoute='/quiz/screen-11'
      backRoute='/quiz/screen-9'
      data={{
        id: 1,
        title:
          'Have you experienced physical changes, such as tension or heaviness in your head?',
        options: [
          { emoji: undefined, text: 'Never' },
          { emoji: undefined, text: 'Rarely' },
          { emoji: undefined, text: 'Often' },
          { emoji: undefined, text: 'All the time' }
        ],
        correctOption: 'Often'
      }}
    />
  )
}
