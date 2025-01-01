'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={73}
      nextRoute='/quiz/screen-29'
      backRoute='/quiz/screen-27'
      data={{
        id: 1,
        title:
          'How motivated are you to overcome these challenges?',
        options: [
          { emoji: '🥺', text: "I'm determined to take control of my life!"},
          { emoji: '🫣', text: "I want to but I don't know how"},
          { emoji: '😔', text: "I don't think it's even possible"},
          { emoji: '🧐', text: "I'm not sure"},
        ],
        correctOption: "I'm not sure"
      }}
    />
  )
}
