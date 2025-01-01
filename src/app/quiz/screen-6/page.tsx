'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={19}
      nextRoute='/quiz/screen-7'
      backRoute='/quiz/screen-5'
      data={{
        id: 1,
        title: 'Do you find it difficult to relax or unwind?',
        description: {
          emoji: '🤔',
          head: 'You might wonder why we ask...',
          title:
            "The difficulty to relax might be linked to the vagus nerve, which plays a key role in your body's relaxation response. A tailored approach might help you get your vagus nerve under control, allowing you to switch to the rest mode whenever you need to."
        },
        options: [
          { emoji: undefined, text: 'Almost always' },
          { emoji: undefined, text: 'Sometimes' },
          { emoji: undefined, text: 'Almost never' }
        ],
        correctOption: 'Sometimes'
      }}
    />
  )
}
