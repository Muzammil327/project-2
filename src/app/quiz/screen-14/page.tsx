'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={53}
      nextRoute='/quiz/screen-15'
      backRoute='/quiz/screen-13'
      data={{
        id: 1,
        title: 'Do you agree with the following statement?',
        para: '"My physical health influences my mind and my mood."',
        description:{
          title: 'The hidden mind-body link was found in the vagus nerve, where physical state may impact your mental state. Our plan leverages this connection to help you get rid of these symptoms and improve your overall well-being.',
          head: 'This fact might surprise you...',
          emoji:"😲"  ,
        },
        options: [
          { emoji: undefined, text: 'Strongly disagree' },
          { emoji: undefined, text: 'Somewhat disagree' },
          { emoji: undefined, text: 'Somewhat agree' },
          { emoji: undefined, text: 'Strongly agree' }
        ],
        correctOption: 'Often'
      }}
    />
  )
}
