'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={68}
      nextRoute='/quiz/screen-24'
      backRoute='/quiz/screen-22'
      data={{
        id: 1,
        title:
          'Which of these positive habits would you like to develop?',
        para: 'Choose all that apply',
        options: [
          { emoji: '🌝', text: 'Productive morning routine' },
          { emoji: '🤗', text: 'Positive thinking' },
          { emoji: '😴', text: 'Perfect sleep' },
          { emoji: '🤸‍♂️', text: 'Regular exercise' },
          { emoji: '🍏', text: 'Eating healthy' },
          { emoji: '🚀', text: 'Finishing tasks' },
          { emoji: '🤳', text: 'Device-free time' }
        ],
        checkbox: true,
        correctOption: 'Other'
      }}
    />
  )
}
