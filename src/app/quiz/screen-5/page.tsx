'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={15}
      nextRoute='/quiz/screen-6'
      backRoute='/quiz/screen-4'
      data={{
        id: 1,
        title: "Do you sometimes feel off balance or disoriented?",
        options: [
          { emoji: '😊', text: 'Never' },
          { emoji: '😊', text: 'Rarely' },
          { emoji: '😔', text: 'Often' },
          { emoji: '🙁', text: 'All the time' }
        ],
        correctOption: 'All the time'
      }}
    />
  )
}
