'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={65}
      nextRoute='/quiz/screen-21'
      backRoute='/quiz/screen-18'
      data={{
        id: 1,
        title:
          'Have you ever heard about the Vagus Nerve?',
        options: [
          { emoji: '🤗', text: 'Sure, I know a lot' },
          { emoji: '😌', text: 'Yes, a bit' },
          { emoji: '🤔', text: "Never, but I'm intrigued" }
        ],
        correctOption: 'Yes, a bit'
      }}
    />
  )
}
