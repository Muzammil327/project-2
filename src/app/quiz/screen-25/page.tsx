'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={73}
      nextRoute='/quiz/screen-26'
      backRoute='/quiz/screen-24'
      data={{
        id: 1,
        title:
          'Are you familiar with Vagus Nerve Stimulation techniques?',
        options: [
          { emoji: undefined, text: 'Yes'},
          { emoji: undefined, text: 'No'},
          { emoji: undefined, text: "I'm not sure"},
        ],
        correctOption: 'Yes'
      }}
    />
  )
}
