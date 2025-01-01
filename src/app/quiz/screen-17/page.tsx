'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={60}
      nextRoute='/quiz/screen-18'
      backRoute='/quiz/screen-16'
      data={{
        id: 1,
        title: 'How do these issues affect your life?',
        para: 'Choose all that apply',
        options: [
          { emoji: '😵‍💫', text: "Poor performance" },
          { emoji: '😟', text: "My life became too complicated" },
          { emoji: '😔', text: "I miss out on opportunities" },
          { emoji: '💔', text: "My relationships are affected" },
          { emoji: '😟', text: "I feel lost in my life" },
          { emoji: '😰', text: "I gain unwanted weight" },
          { emoji: '🙁', text: "My life feels dull" },
          { emoji: '🤔', text: "Something else" },
        ],
        checkbox: true,
        correctOption: 'Something else'
      }}
    />
  )
}
