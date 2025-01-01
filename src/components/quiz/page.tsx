'use client'
import React from 'react'
import Navbar3 from './Navbar3'
import Quiz from './Quiz'

export function QuizLayout ({
  progressValue,
  bg = 'bg-[#f6f7f9]',
  nextRoute = '/',
  backRoute = '/',
  data,
}: {
  progress?: boolean
  progressValue?: number
  bg?: string
  nextRoute: string
  backRoute: string
  data: {
    id: number
    title: string
    description?: {
      head: string
      title: string
      emoji?: string
    }
    para?: string
    options: { emoji: string | undefined; text: string }[]
    correctOption: string
    checkbox?: boolean
  }
}) {
  return (
    <React.Fragment>
      <div className={`${bg} main font1`}>
        <main className='wrapper'>
          <Navbar3
            progressValue={progressValue}
            bg={bg}
            backRoute={backRoute}
          />
          <Quiz
            id={data.id}
            title={data.title}
            description={{
              head: data.description?.head,
              title: data.description?.title,
              emoji: data.description?.emoji,
              para: data?.para
            }}
            options={data.options}
            correctOption={data.correctOption}
            checkbox={data.checkbox}
            handleOptionClick={(index: any) =>
              console.log('Selected option index:', index)
            }
            nextRoute={nextRoute}
          />
        </main>
      </div>
    </React.Fragment>
  )
}
