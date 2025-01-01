'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={62}
      nextRoute='/quiz/screen-19'
      backRoute='/quiz/screen-17'
      data={{
        id: 1,
        title:
          'When was the last time you felt free from stress and full of energy?',
        description: {
          emoji: '✊',
          head: "Don't worry, we got you here...",
          title:
            'Our research shows that different approaches are needed based on the duration of the problem. Our personalized plan takes this into account to help you feel better.'
        },
        options: [
          { emoji: '🤔', text: 'Within a week' },
          { emoji: '😯', text: 'Within a month' },
          { emoji: '😬', text: 'Less than a year ago' },
          { emoji: '🫠', text: 'Over 2 years ago' },
          { emoji: '🤷‍♂️', text: "I can't remember" }
        ],
        checkbox: true,
        correctOption: 'Within a month'
      }}
    />
  )
}
