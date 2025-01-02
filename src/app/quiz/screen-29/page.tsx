'use client'
import React from 'react'
import { Navbar4 } from '@/components/layout/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Typewriter } from 'react-simple-typewriter'

export default function Page () {
  const router = useRouter()
  const description = {
    emoji: '☝️',
    head: 'High stress level',
    title:
      'High levels of vagal stress can lead to chronic fatigue, procrastination, brain fog, sleep disorders, and emotional eating.'
  }
  return (
    <div className='!bg-[#f6f7f9] main font1'>
      <main className='wrapper'>
        <Navbar4 bg='bg-[#f6f7f9]' />
        <div className='screen29'>
          <div>
            <h2 className='font2'>Summary of your profile</h2>
            <div className='anxiety'>
              <div className='header'>
                <h3>Expected Vagal Tone</h3>
                <span>Normal – 23.5</span>
              </div>
              <div className='progress'>
                <div
                  className='tag'
                  style={{
                    left: '77.85%'
                  }}
                >
                  You – 46.71
                </div>
                <div
                  role='progressbar'
                  className='circle'
                  style={{
                    left: '77.85%'
                  }}
                ></div>
              </div>
              <ol id='progress-bar-legend' className='stage'>
                <li>Relaxed</li>
                <li>Moderate</li>
                <li>Stressed</li>
              </ol>
            </div>
            <div className='stressDetail'>
              <ul>
                <li>
                  <h3 id='heading-0'>Main trigger</h3>
                  <p aria-describedby='heading-0'>
                    <svg
                      width='20'
                      height='20'
                      fill='none'
                      viewBox='0 0 20 20'
                      aria-hidden='true'
                    >
                      <path
                        fill='#3A7968'
                        d='M9.734 13.358q1.765 0 3-1.075 1.232-1.075 1.232-2.608 0-1.342-.905-2.288-.904-.945-2.2-.945-1.145 0-1.954.708-.81.708-.809 1.725 0 .441.162.88.162.436.547.753.332.3.69.246.36-.054.586-.279a.86.86 0 0 0 .258-.546q.03-.32-.266-.596a1 1 0 0 1-.166-.2.44.44 0 0 1-.062-.233q0-.325.271-.546.271-.22.744-.22.576 0 .98.445.401.446.402 1.121 0 .842-.713 1.43-.714.586-1.771.587-1.304 0-2.208-.992-.906-.992-.906-2.45 0-.542.154-1.058a3.5 3.5 0 0 1 .459-.967q.193-.307.183-.646a.82.82 0 0 0-.27-.587.86.86 0 0 0-.622-.246.7.7 0 0 0-.577.287 5 5 0 0 0-.822 1.5 5.2 5.2 0 0 0-.28 1.692q0 2.134 1.417 3.62 1.417 1.488 3.446 1.488M4.023 20a.87.87 0 0 1-.625-.238.79.79 0 0 1-.25-.595V15.7a9.3 9.3 0 0 1-2.322-3.037A8.4 8.4 0 0 1 0 9q0-3.75 2.755-6.375T9.445 0q3.279 0 5.811 1.838 2.532 1.837 3.293 4.787l1.417 5.342a.74.74 0 0 1-.15.712.86.86 0 0 1-.698.321H16.79v3.333q0 .692-.512 1.18a1.73 1.73 0 0 1-1.237.487h-2.449v1.167a.79.79 0 0 1-.249.595.87.87 0 0 1-.625.238z'
                      ></path>
                    </svg>
                    Chronic stress
                  </p>
                </li>
                <li>
                  <h3 id='heading-1'>Duration</h3>
                  <p aria-describedby='heading-1'>
                    <svg
                      width='20'
                      height='20'
                      fill='none'
                      viewBox='0 0 20 20'
                      aria-hidden='true'
                    >
                      <path
                        fill='#3A7968'
                        d='M10.883 9.667v-4.05a.81.81 0 0 0-.833-.834.81.81 0 0 0-.833.834v4.375q0 .166.058.312.058.145.175.28l3.5 3.583a.77.77 0 0 0 .608.25.86.86 0 0 0 .609-.25.82.82 0 0 0 .241-.6.81.81 0 0 0-.241-.6zM10 20a9.7 9.7 0 0 1-3.883-.788 10.1 10.1 0 0 1-3.184-2.145 10.1 10.1 0 0 1-2.145-3.184A9.7 9.7 0 0 1 0 10q0-2.058.788-3.883a10.1 10.1 0 0 1 2.145-3.184A10.1 10.1 0 0 1 6.117.788 9.7 9.7 0 0 1 10 0q2.058 0 3.883.788a10.1 10.1 0 0 1 3.184 2.145q1.358 1.359 2.145 3.184A9.7 9.7 0 0 1 20 10a9.7 9.7 0 0 1-.788 3.883 10.1 10.1 0 0 1-2.145 3.184 10.1 10.1 0 0 1-3.184 2.145A9.7 9.7 0 0 1 10 20'
                      ></path>
                    </svg>
                    1 month
                  </p>
                </li>
                <li>
                  <h3 id='heading-2'>Best approach</h3>
                  <p aria-describedby='heading-2'>
                    <svg
                      width='21'
                      height='20'
                      fill='none'
                      viewBox='0 0 21 20'
                      aria-hidden='true'
                    >
                      <path
                        fill='#3A7968'
                        d='M8 20a3.4 3.4 0 0 1-2.444-.986q-1.029-.986-1.167-2.375a4.38 4.38 0 0 1-2.778-1.472Q.501 13.917.5 12.222q0-.583.153-1.153.152-.57.458-1.069a4.1 4.1 0 0 1-.458-1.056A4.4 4.4 0 0 1 .5 7.778q0-1.695 1.111-2.93a4.38 4.38 0 0 1 2.75-1.46Q4.444 1.974 5.5.987A3.54 3.54 0 0 1 8 0q.721 0 1.347.278.625.277 1.153.75a3.9 3.9 0 0 1 1.139-.75Q12.279 0 13 0q1.445 0 2.486.972a3.43 3.43 0 0 1 1.125 2.39q1.64.221 2.764 1.471A4.26 4.26 0 0 1 20.5 7.778q0 .61-.153 1.166-.152.556-.458 1.056.306.5.458 1.07t.153 1.152q0 1.723-1.125 2.959a4.46 4.46 0 0 1-2.792 1.458 3.74 3.74 0 0 1-1.152 2.375A3.36 3.36 0 0 1 13 20q-.694 0-1.347-.264A3.7 3.7 0 0 1 10.5 19a4.1 4.1 0 0 1-1.167.736A3.5 3.5 0 0 1 8 20m3.611-16.389V16.39q0 .584.403.986.402.402.986.403.556 0 .958-.445.403-.444.43-1a4.2 4.2 0 0 1-1.069-.597 4.5 4.5 0 0 1-.875-.903 1.1 1.1 0 0 1-.208-.833q.07-.444.458-.722.39-.278.834-.209t.722.459q.306.444.778.68t1.028.236a2.14 2.14 0 0 0 1.569-.652 2.14 2.14 0 0 0 .653-1.57q0-.138-.014-.278a1 1 0 0 0-.07-.277 4 4 0 0 1-1.013.416 4.5 4.5 0 0 1-1.125.14q-.473 0-.792-.32a1.08 1.08 0 0 1-.32-.792q0-.473.32-.792t.792-.319a2.14 2.14 0 0 0 1.569-.653 2.14 2.14 0 0 0 .653-1.57q0-.916-.653-1.555a2.27 2.27 0 0 0-1.57-.666 3.2 3.2 0 0 1-.791.875q-.486.375-1.07.597a1.07 1.07 0 0 1-.86-.028 1 1 0 0 1-.556-.639 1.2 1.2 0 0 1 .041-.861.96.96 0 0 1 .625-.556q.417-.138.681-.5.264-.36.264-.833 0-.583-.403-.986A1.34 1.34 0 0 0 13 2.222q-.584 0-.986.403a1.34 1.34 0 0 0-.403.986M9.39 16.39V3.61q0-.583-.403-.986A1.34 1.34 0 0 0 8 2.222q-.584 0-.986.403a1.34 1.34 0 0 0-.403.986q0 .444.25.82.25.374.667.513.444.14.639.556t.055.861q-.165.445-.583.639a1.07 1.07 0 0 1-.861.028 4.2 4.2 0 0 1-1.07-.597 3.2 3.2 0 0 1-.791-.875 2.2 2.2 0 0 0-1.542.68q-.653.653-.653 1.542 0 .915.653 1.57a2.14 2.14 0 0 0 1.57.652q.471 0 .791.32.32.318.32.791t-.32.792q-.32.32-.792.32-.582 0-1.125-.14a4 4 0 0 1-1.013-.416 1 1 0 0 0-.07.277 3 3 0 0 0-.014.278q0 .917.653 1.57a2.14 2.14 0 0 0 1.57.652q.555 0 1.027-.236t.778-.68q.278-.39.722-.459.445-.069.834.209t.458.722-.208.833q-.39.528-.89.917-.5.39-1.083.611.028.556.445.986t.972.43q.584 0 .986-.402.403-.402.403-.986'
                      ></path>
                    </svg>
                    Vagal reset
                  </p>
                </li>
              </ul>
              <Image
                alt='Illustration of a sad and exhausted man'
                width={200}
                height={200}
                title='df'
                style={{
                  color: 'transparent'
                }}
                className='stress_detail_image'
                src='/male-sad.webp'
              />
            </div>
            <div className='style_infoBox__zNyjg mb-20'>
              <span className='style_icon__xgokk'>{description.emoji}</span>
              <div>
                <h2
                 className='!text-left'
                >
                  {description.head}
                </h2>

                <p
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
                </p>
              </div>
            </div>
          </div>
          <button
            className='fixed bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-[23rem] btn4'
            onClick={() => {
              router.push('/quiz/screen-30')
            }}
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  )
}
