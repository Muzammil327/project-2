'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={26}
      nextRoute='/quiz/screen-9'
      backRoute='/quiz/screen-7'
      data={{
        id: 1,
        title: 'Have you been feeling uneasy in your stomach lately?',
        options: [
          { emoji: '🥺', text: 'Yes, quite often' },
          { emoji: '😔', text: 'Yes, sometimes' },
          { emoji: '🫣', text: 'Yes, but rarely' },
          { emoji: '🧐', text: "I'm not sure" },
          { emoji: '😊', text: "No, never" }
        ],
        correctOption: 'Yes, but rarely'
      }}
    />
  )
}
