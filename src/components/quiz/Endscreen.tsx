'use client'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Navbar2 } from '../layout/Navbar'
import { useRouter } from 'next/navigation'

export default function Endscreen ({
  image,
  head,
  para,
  nextpage
}: {
  image: string
  head: string
  para: ReactNode
  nextpage: string
}) {
  const router = useRouter()
  return (
    <div className='main font1'>
      <main className='wrapper'>
        <React.Fragment>
          <Navbar2 />
          <div className='end-screen'>
            <div className='mb-28'>
              <Image
                alt='Illustration'
                width='488'
                height='329'
                src={image}
                className='mt-9'
              />
              <h2 className='font2'>{head}</h2>
              {para}
            </div>
            <button
              className='fixed bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-[23rem] btn2'
              onClick={() => {
                router.push(nextpage)
              }}
            >
              Continue
            </button>
          </div>
        </React.Fragment>
      </main>
    </div>
  )
}
