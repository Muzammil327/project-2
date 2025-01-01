'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={22}
      nextRoute='/quiz/screen-8'
      backRoute='/quiz/screen-6'
      data={{
        id: 1,
        title: 'Have you had a feeling of your stomach ‘dropping’ in a moment of fear or receiving bad news?',
       options: [
          { emoji: '🥺', text: 'Often' },
          { emoji: '😔', text: 'Sometimes' },
          { emoji: '🫣', text: 'Rarely' },
          { emoji: '🧐', text: "I'm not sure" }
        ],
        correctOption: 'Sometimes'
      }}
    />
  )
}
