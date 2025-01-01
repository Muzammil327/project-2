'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={48}
      nextRoute='/quiz/screen-14'
      backRoute='/quiz/screen-12'
      data={{
        id: 1,
        title: 'What usually stresses you out the most?',
        options: [
          { emoji: '💸', text: 'Money' },
          { emoji: '💔', text: 'Relationships' },
          { emoji: '🫣', text: 'How I look' },
          { emoji: '🍏', text: 'Health' },
          { emoji: '💼', text: 'Work' },
          { emoji: '😬', text: 'Family responsibilities' },
        ],
        correctOption: 'Often',
      }}
    />
  )
}
