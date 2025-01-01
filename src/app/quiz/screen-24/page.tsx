'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={70}
      nextRoute='/quiz/screen-25'
      backRoute='/quiz/screen-23'
      data={{
        id: 1,
        title:
          'Are there any habits you would like to quit?',
        para: 'Choose all that apply',
        options: [
          { emoji:'📱', text: 'Excessive screen time'},
          { emoji: '🍔', text: 'Junk food'},
          { emoji: '😞', text: 'Procrastination'},
          { emoji: '🥺', text: 'Self-doubt'},
          { emoji: '😵‍💫', text: 'Staying up late'},
          { emoji: '🚬', text: 'Smoking'},
          { emoji: '☕', text: 'Excessive caffeine intake'},
          { emoji: '🍷', text: 'Drinking alcohol'},
        ],
        checkbox: true,
        correctOption: 'Other'
      }}
    />
  )
}
