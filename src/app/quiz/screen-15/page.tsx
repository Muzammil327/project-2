'use client'
import React from 'react';
import { QuizLayout } from '@/components/quiz/page';

export default function page () {
  return (
    <QuizLayout
      progressValue={55}
      nextRoute='/quiz/screen-16'
      backRoute='/quiz/screen-14'
      data={{
        id: 1,
        title: 'I feel like my overall state is getting worse over time.',
        options: [
          { emoji: undefined, text: 'Strongly disagree' },
          { emoji: undefined, text: 'Somewhat disagree' },
          { emoji: undefined, text: 'Somewhat agree' },
          { emoji: undefined, text: 'Strongly agree' }
        ],
        correctOption: 'Strongly agree'
      }}
    />
  )
}
