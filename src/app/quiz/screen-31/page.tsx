'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return ( 
    <QuizLayout
      progressValue={83}
      nextRoute='/quiz/screen-32'
      backRoute='/quiz/screen-30'
      data={{
        id: 1,
        title:
          'When is your event?',
          para:'We will keep the important event in mind when crafting your plan',
        options: [
          { emoji: undefined, text: "In a week"},
          { emoji: undefined, text: "In a month"},
          { emoji: undefined, text: "In a few month"},
          { emoji: undefined, text: "In the coming year"},
          { emoji: undefined, text: "Skip this step"},
        ],
        correctOption: "In a week"
      }}
    />
  )
}
