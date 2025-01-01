'use client'
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={43}
      nextRoute='/quiz/screen-13'
      backRoute='/quiz/screen-11'
      data={{
        id: 1,
        title: 'Do you agree with the following statement?',
        options: [
          { emoji: '🫠', text: 'Waking up tired and weak' },
          { emoji: '😵‍💫', text: 'Poor sleep' },
          { emoji: '⏰', text: 'Unstable sleep hours' },
          { emoji: '😥', text: "Difficulty falling asleep" },
          { emoji: '😌', text: 'I sleep well'},
        ],
        para:'"I feel like stress affects my focus and productivity."',
        description: {
          emoji: '📚',
          head:"We know how this might feel...",
          title:"Stress and worry may often affect other aspects of our lives. We've analyzed over 500 scientific studies to identify the most effective methods that specifically focus on the root cause, not just the consequences."
        },
        checkbox: true,
        correctOption: 'Often',
      }}
    />
  )
}
