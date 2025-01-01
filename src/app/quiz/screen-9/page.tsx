'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={30}
      nextRoute='/quiz/screen-10'
      backRoute='/quiz/screen-8'
      data={{
        id: 1,
        title: 'Do you sometimes experience sudden changes in appetite?',
        description:{
          emoji: "🤔",
          head:"It’s more common than you think...",
          title:"94% of Leaply users report sudden changes in appetite. When crafting your plan, we take a holistic approach, considering physical signals as well."
        },
        options: [
          { emoji: '🍕', text: 'Yes, I eat more' },
          { emoji: '🥺', text: 'Yes, I lose my appetite' },
          { emoji: '🫣', text: "Haven't noticed anything" }
        ],
        correctOption: 'Yes, I eat more'
      }}
    />
  )
}
