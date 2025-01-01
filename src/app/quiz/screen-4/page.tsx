'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={12}
      nextRoute='/quiz/screen-5'
      backRoute='/quiz/screen-3'
      data={{
        id: 1,
        title: "I'm often fatigued and my energy levels aren't steady.",
        description: {
          emoji: '🤔',
          head: 'Recent studies show that...',
          title:
            '73% of people who experience stress also report fatigue and unstable energy levels. When developing your personalized Vagus Nerve Reset plan, we account for these hidden patterns as well.'
        },
        options: [
          { emoji: undefined, text: 'Strongly disagree' },
          { emoji: undefined, text: 'Somewhat disagree' },
          { emoji: undefined, text: 'Somewhat agree' },
          { emoji: undefined, text: 'Strongly agree' }
        ],
        correctOption: 'Somewhat disagree'
      }}
    />
  )
}
