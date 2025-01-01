'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={38}
      nextRoute='/quiz/screen-12'
      backRoute='/quiz/screen-10'
      data={{
        id: 1,
        title: 'Do you sometimes experience any of the following sleep issues?',
        options: [
          { emoji: '🫠', text: 'Waking up tired and weak' },
          { emoji: '😵‍💫', text: 'Poor sleep' },
          { emoji: '⏰', text: 'Unstable sleep hours' },
          { emoji: '😥', text: "Difficulty falling asleep" },
          { emoji: '😌', text: 'I sleep well'},
        ],
        para:"Choose all that apply",
        checkbox: true,
        correctOption: 'Often',
      }}
    />
  )
}
