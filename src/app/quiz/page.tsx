// 'use client'
// import React, { useState } from 'react'
// import { Navbar2 } from '@/components/layout/Navbar'
// import { Typewriter } from 'react-simple-typewriter'
// import Image from 'next/image'

// export const quizData = [
//   {
//     id: 1,
//     title: 'How often do you feel stressed or anxious?',
//     description:
//       'Memory lapses can sometimes be caused by stress, fatigue, or lack of focus.',
//     options: ['Never', 'Rarely', 'Often', 'All the time'],
//     correctOption: 'Often'
//   },
//   {
//     id: 2,
//     title: 'Do you experience brain fog or difficulty concentrating?',
//     description:
//       'Memory lapses can sometimes be caused by stress, fatigue, or lack of focus.',
//     options: ['Never', 'Rarely', 'Often', 'All the time'],
//     correctOption: 'Rarely'
//   },
//   {
//     id: 3,
//     title: 'Do you have trouble remembering things or feel forgetful?',
//     description:
//       'Memory lapses can sometimes be caused by stress, fatigue, or lack of focus.',
//     options: ['Never', 'Sometimes', 'Often', 'Always'],
//     correctOption: 'Never'
//   },
//   {
//     id: 4,
//     title: "I'm often fatigued and my energy levels aren't steady.",
//     description:
//       'Fatigue can result from poor sleep, diet, or underlying health issues.',
//     options: ['Never', 'Sometimes', 'Often', 'Always'],
//     correctOption: 'Sometimes'
//   },
//   {
//     id: 5,
//     title: 'Do you sometimes feel dizzy or groggy?',
//     description:
//       'Fatigue can result from poor sleep, diet, or underlying health issues.',
//     options: ['Never', 'Sometimes', 'Often', 'Always'],
//     correctOption: 'Sometimes'
//   },

//   {
//     id: 6,
//     title: 'Do you sometimes feel off balance or disoriented?',
//     description:
//       'Memory lapses can sometimes be caused by stress, fatigue, or lack of focus.',
//     options: ['Never', 'Rarely', 'Often', 'All the time'],
//     correctOption: 'Often'
//   },
//   {
//     id: 7,
//     title: 'Do you find it difficult to relax or unwind?',
//     description:
//       'Memory lapses can sometimes be caused by stress, fatigue, or lack of focus.',
//     options: ['Never', 'Rarely', 'Often', 'All the time'],
//     correctOption: 'Often'
//   },
//   {
//     id: 8,
//     title: 'Do you find it difficult to relax or unwind?',
//     description:
//       'Memory lapses can sometimes be caused by stress, fatigue, or lack of focus.',
//     options: ['Never', 'Rarely', 'Often', 'All the time'],
//     correctOption: 'Often'
//   }
// ]

// const QuizComponent = () => {
//   const [selectedOption, setSelectedOption] = useState<number | null>(null)
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
//   const [currentStep, setCurrentStep] = useState(0)
//   const [endScreen, setEndScreen] = useState(false)

//   const calculateProgress = () => {
//     return Math.round(((currentStep + 1) / quizData.length) * 100)
//   }

//   const handleOptionClick = (index: number) => {
//     setSelectedOption(index)
//     const isAnswerCorrect =
//       quizData[currentStep].options[index] ===
//       quizData[currentStep].correctOption
//     setIsCorrect(isAnswerCorrect)

//     if (isAnswerCorrect) {
//       setTimeout(() => {
//         moveToNextQuestion()
//       }, 1500)
//     }
//   }

//   const moveToNextQuestion = () => {
//     if (currentStep < quizData.length - 1) {
//       setCurrentStep(currentStep + 1)
//       setSelectedOption(null)
//       setIsCorrect(null)
//     } else {
//       setEndScreen(true)
//     }
//   }

//   return (
//     <React.Fragment>
//       {!endScreen && (
//         <div className='!bg-[#f6f7f9] main font1'>
//           <main className='wrapper'>
//             <Navbar2 progressValue={calculateProgress()} bg='bg-[#f6f7f9]' />
//             <div>
//               <h2 className='h21 font2 mb-8 text-center mt-10'>
//                 {quizData[currentStep].title}
//               </h2>

//               {isCorrect === false && (
//                 <div className='description mb-3'>
//                   <span className='text-base'>🤔</span>
//                   <div>
//                     <h3
//                       style={{
//                         fontSize: '.875rem',
//                         fontWeight: '700',
//                         letterSpacing: '-.025em'
//                       }}
//                     >
//                       <span>You might wonder why...</span>
//                     </h3>

//                     <article
//                       style={{
//                         fontSize: '.75rem',
//                         fontWeight: '400',
//                         letterSpacing: '-.025em'
//                       }}
//                     >
//                       <Typewriter
//                         words={[quizData[currentStep].description]}
//                         cursor
//                         cursorStyle='|'
//                         typeSpeed={70}
//                         deleteSpeed={50}
//                         delaySpeed={1000}
//                       />
//                     </article>
//                   </div>
//                 </div>
//               )}

//               {quizData[currentStep].options.map((option, index) => (
//                 <button
//                   key={index}
//                   className={`btn3 ${
//                     selectedOption === index
//                       ? 'border-4 !border-black'
//                       : 'border border-gray-300'
//                   } ${
//                     isCorrect === false &&
//                     index === quizData[currentStep].options.length - 1
//                       ? 'mb-20'
//                       : 'mb-4'
//                   }`}
//                   onClick={() => handleOptionClick(index)}
//                   disabled={isCorrect !== null}
//                 >
//                   <span className='icon mr-2'>😊</span>
//                   <span>{option}</span>
//                 </button>
//               ))}
//             </div>
//             {isCorrect === false && (
//               <button
//                 className='fixed bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-[23rem] btn2'
//                 onClick={moveToNextQuestion}
//               >
//                 Continue
//               </button>
//             )}
//           </main>
//         </div>
//       )}

//       {endScreen && (
       
//       )}
//     </React.Fragment>
//   )
// }

// export default QuizComponent
import React from 'react'
import { QuizLayout } from '@/components/quiz/page'

export default function page () {
  return (
    <QuizLayout
      progressValue={5}
      nextRoute='/quiz/screen-1'
      backRoute='/quiz'
      data={{
        id: 1,
        title: 'How often do you feel stressed or anxious?',
       options: [
          { emoji: '😊', text: 'Never' },
          { emoji: '🧐', text: 'Rarely' },
          { emoji: '😔', text: 'Often' },
          { emoji: '🙁', text: 'All the time' }
        ],
        correctOption: 'Often'
      }}
    />
  )
}
