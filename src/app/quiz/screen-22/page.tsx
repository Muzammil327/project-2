'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={68}
      nextRoute='/quiz/screen-23'
      backRoute='/quiz/screen-21'
      data={{
        id: 1,
        title:
          'What do you want to get out of this journey to reset your vagus nerve?',
        para: 'Choose all that apply',
        options: [
          { emoji: '😎', text: 'Take control of my life' },
          { emoji: '🔋', text: 'Learn to control my energy levels' },
          { emoji: '🤸‍♂️', text: 'Improve my physical state' },
          { emoji: '🥰', text: 'Improve relationships with others' },
          { emoji: '😌', text: 'Other' }
        ],
        correctOption: 'Other'
      }}
    />
  )
}
