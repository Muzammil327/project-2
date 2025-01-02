'use client'
import React, { useState, useEffect } from 'react'
import { Navbar4 } from '@/components/layout/Navbar'
import Sliders from './Slider'
import Modal from './Modal'

export default function Page () {
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [progress, setProgress] = useState(0) // Start from 0
  const [modalStep, setModalStep] = useState(0) // Track which modal step to show

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleYes = () => {
    console.log('User clicked Yes')
    nextModalStep()
  }

  const handleNo = () => {
    console.log('User clicked No')
    nextModalStep()
  }


  const nextModalStep = () => {
    switch (modalStep) {
      case 0:
        setProgress(36)
        setModalTitle('Have you tried breathwork before?')
        break
      case 1:
        setProgress(57)
        setModalTitle('Do you get nervous in crowded places?')
        break
      case 2:
        setProgress(79)
        setModalTitle('Are you open to new experiences?')
        break
      case 3:
        console.log('Completed') // Final step
        setProgress(100)
        handleCloseModal() // Close the modal at the final step
        break
      default:
        break
    }

    setModalStep(prevStep => prevStep + 1)
    handleCloseModal()
  }

  // Countdown effect
  useEffect(() => {
    if (progress < 100 && !isModalVisible) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev === 35 || prev === 56 || prev === 78) {
            clearInterval(timer)
            handleOpenModal()
            return prev
          }
          return prev + 1
        })
      }, 100) // 100 ms interval to increment progress

      return () => clearInterval(timer)
    }
  }, [progress, isModalVisible])

  useEffect(() => {
    // Start the countdown when the page loads
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev === 35 || prev === 56 || prev === 78) {
          clearInterval(timer)
          handleOpenModal()
          return prev
        }
        return prev + 1
      })
    }, 100) // 100 ms interval to increment progress

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='!bg-[#f6f7f9] main font1'>
      <main className='wrapper2 screen34'>
        <Navbar4 bg='bg-[#f6f7f9]' />
        <div className='loader'>
          <div className='font2 inner'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='180'
              width='180'
              viewBox='0 0 180 180'
            >
              <circle
                stroke='#eef2f3'
                strokeWidth='18'
                fill='transparent'
                r='81'
                cx='90'
                cy='90'
              />
              <circle
                stroke='#3a7968'
                strokeWidth='18'
                strokeDasharray='508.93800988154646 508.93800988154646'
                fill='transparent'
                r='81'
                cx='90'
                cy='90'
                style={{
                  strokeDashoffset:
                    508.93800988154646 - (progress / 100) * 508.93800988154646
                }}
                strokeLinecap='round'
              />
            </svg>
            <p className='style_loader__value__a_xIk'>
              <span>{progress}</span>
              <span>%</span>
            </p>
          </div>
          <span className='text'>Creating your personalized plan...</span>
          <h2 className='font2'>
            <span>25 000+ people</span> have trusted Leaply
          </h2>
        </div>

        {/* Modal is shown based on isVisible */}
        <Modal
          isVisible={isModalVisible}
          title={modalTitle}
          onClose={handleCloseModal}
          onYes={handleYes}
          onNo={handleNo}
        />

        <Sliders />
      </main>
    </div>
  )
}
