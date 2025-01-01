'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={5}
      nextRoute='/quiz/screen-2'
      backRoute='/quiz'
      data={{
        id: 1,
        title: 'Do you experience brain fog or difficulty concentrating?',
        options: [
          { emoji: '😊', text: 'Never' },
          { emoji: '🧐', text: 'Rarely' },
          { emoji: '😔', text: 'Often' },
          { emoji: '🙁', text: 'All the time' }
        ],
        correctOption: 'Often'
      }}
    />
  )
}
