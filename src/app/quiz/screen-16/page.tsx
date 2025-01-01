'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={57}
      nextRoute='/quiz/screen-17'
      backRoute='/quiz/screen-15'
      data={{
        id: 1,
        title: "Why do you think your overall state isn't improving?",
        options: [
          { emoji: '🤔', text: "I'm not sure where to start" },
          { emoji: '😵‍💫', text: 'I feel too overwhelmed' },
          { emoji: '😬', text: 'I tend to procrastinate' },
          { emoji: '😞', text: "Everything I tried didn't work for me" },
          { emoji: '🫣', text: "It's too much to handle" },
          { emoji: '😕', text: "I'm stuck and have no idea" }
        ],
        checkbox: true,
        correctOption: 'I tend to procrastinate'
      }}
    />
  )
}
