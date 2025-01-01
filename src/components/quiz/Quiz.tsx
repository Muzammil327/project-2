'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

interface QuizProps {
  id: number
  title: string
  description?: {
    head: string | undefined
    title: string | undefined
    emoji: string | undefined
    para: string | undefined
  }
  options: { emoji: string | undefined; text: string }[]
  correctOption: string
  handleOptionClick: (index: number) => void
  nextRoute: string
  checkbox?: boolean
}

export default function Quiz ({
  title,
  description,
  options,
  correctOption,
  handleOptionClick,
  nextRoute,
  checkbox = false
}: QuizProps) {
  const router = useRouter()
  const [localSelectedOption, setLocalSelectedOption] = useState<number | null>(
    null
  )

  const handleClick = (index: number) => {
    setLocalSelectedOption(index)
    handleOptionClick(index)
    if (description?.head === undefined && description?.title === undefined) {
      setTimeout(() => {
        router.push(nextRoute)
      }, 1500)
    }
  }

  const handleSubmit = () => {
    router.push(nextRoute)
  }

  return (
    <div>
      <h2 className='h21 font2 mb-8 text-center mt-10'>{title}</h2>

      {description && description.para && (
        <p className='text-center -mt-3 mb-8 px-3'>{description.para}</p>
      )}
      {description && description.head && description.title && (
        <div className='description mb-3'>
          <span className='text-base'>{description.emoji}</span>
          <div>
            <h3
              style={{
                fontSize: '.875rem',
                fontWeight: '700',
                letterSpacing: '-.025em'
              }}
            >
              <span>{description.head}</span>
            </h3>

            <article
              style={{
                fontSize: '.75rem',
                fontWeight: '400',
                letterSpacing: '-.025em'
              }}
            >
              <Typewriter
                words={[description.title]}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </article>
          </div>
        </div>
      )}

      {/* Render options */}
      {options.map((option, index) => (
        <button
          key={index}
          className={`btn3 ${
            localSelectedOption === index
              ? 'border-4 !border-black'
              : 'border border-gray-300'
          } 
          ${checkbox ? 'flex items-center justify-between' : ''}
          ${index === options.length - 1 ? 'mb-20' : ''}`}
          onClick={() => handleClick(index)}
          disabled={localSelectedOption !== null}
        >
          <div className='flex items-center'>
            <span className='icon mr-2'>{option.emoji}</span>
            <span>{option.text}</span>
          </div>

          {checkbox && (
            <div className='checkbox'>
              <input
                type='checkbox'
                name='sleepIssues'
                value='sleep-well'
                checked={localSelectedOption === index}
              />
            </div>
          )}
        </button>
      ))}

      {/* Show Submit button only if description exists */}
      {(description && description.head && description.title) ||
      (description && description.para) ? (
        <button
          className='fixed bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-[23rem] btn2'
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : null}
    </div>
  )
}
