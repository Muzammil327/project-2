'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={80}
      nextRoute='/quiz/screen-31'
      backRoute='/quiz/screen-29'
      data={{
        id: 1,
        title:
          'Do you have an important event coming up?',
          para:'It will help us customise your personal plan',
        options: [
          { emoji: '🥳', text: "Brithday"},
          { emoji: '✈️', text: "Holiday"},
          { emoji: '👴', text: "Retirement planning"},
          { emoji: '💰', text: "Financial deadline"},
          { emoji: '🚀', text: "Personal goal"},
          { emoji: '🍼', text: "Birth of a child"},
          { emoji: '🙅‍♂️', text: "No special event any time soon"},
        ],
        correctOption: "Brithday"
      }}
    />
  )
}
