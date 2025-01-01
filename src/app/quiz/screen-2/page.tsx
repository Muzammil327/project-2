'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={7}
      nextRoute='/quiz/screen-3'
      backRoute='/quiz/screen-1'
      data={{
        id: 1,
        title: 'Do you have trouble remembering things or feel forgetful?',
        options: [
          { emoji: undefined, text: 'Never' },
          { emoji: undefined, text: 'Rarely' },
          { emoji: undefined, text: 'Often' },
          { emoji: undefined, text: 'All the time' }
        ],
        correctOption: 'Rarely'
      }}
    />
  )
}
