'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={75}
      nextRoute='/quiz/screen-27'
      backRoute='/quiz/screen-25'
      data={{
        id: 1,
        title:
          'Did a professional refer you to Leaply?',
        options: [
          { emoji: undefined, text: 'Yes'},
          { emoji: undefined, text: 'No'},
          { emoji: undefined, text: "I'm a professional"},
        ],
        correctOption: 'Yes'
      }}
    />
  )
}
