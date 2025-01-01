import React from 'react'
import { data } from '../page'
import CardAuthor from '@/components/card/CardAuthor'
import { Navbar2 } from '@/components/layout/Navbar'

interface Iprops {
  params: {
    age: string
  }
}

export default function page ({ params }: Iprops) {
  const filteredData = data.find(item => item.slug === `/${params.age}`)
  return (
    <div className='main font1'>
      <main className='wrapper'>
        <Navbar2 progressValue={3} />
        <div
          style={{
            maxWidth: 'calc(-2rem + 100vw)',
            opacity: '1',
            willChange: 'auto'
          }}
        >
          <div className=' h-full'>
            <div className='pt-9'>
              <h2 className='h2'>What's your age?</h2>
              <p className='p3'>
                We only use your age to personalize your plan
              </p>
            </div>
            <div className='grid grid-cols-2 gap-y-12 gap-x-4'>
              {filteredData &&
                filteredData?.menu?.map((data: any, index) => {
                  return <CardAuthor data={data} index={index} />
                })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
