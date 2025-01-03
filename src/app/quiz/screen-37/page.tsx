'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Navbar4 } from '@/components/layout/Navbar'
import { text } from 'stream/consumers'
import { CSSProperties } from 'react'
import './screen37.style.scss'
import Image from 'next/image'

export default function Page () {
  const router = useRouter()

  const heading2_2: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '1',
    textAlign: 'center',
    paddingBottom: '1rem',
    letterSpacing: '.36px',
    color: '#322e48',
    paddingBlockStart: '1rem',
    paddingBlockEnd: '1.5rem'
  }

  return (
    <div className=' font1 screen37'>
      <div>
        <section className='header'>
          <header>
            <div className='left'>
              <div className='tag'>
                <p>Now</p>
              </div>
              <Image
                alt='Illustration of a sad and exhausted person'
                width='376'
                height='376'
                decoding='async'
                data-nimg='1'
                src='/sad.webp'
                style={{
                  color: 'transparent'
                }}
              />
            </div>
            <div className='right'>
              <div className='tag'>
                <p>Your Goal</p>
              </div>
              <Image
                alt='Illustration of a happy and excited person'
                width='376'
                height='376'
                decoding='async'
                data-nimg='1'
                src='/happy.webp'
                style={{
                  color: 'transparent'
                }}
              />
            </div>
            <svg
              width='100'
              height='168'
              fill='none'
              viewBox='0 0 100 168'
              className='headerarrow'
              aria-hidden='true'
            >
              <path
                fill='#D8E4E1'
                d='M.4 3.474C-.354 1.92.611 0 2.143 0c.723 0 1.39.454 1.745 1.187l43.505 89.875c2.681 5.538 2.682 12.304.001 17.843L3.888 198.814c-.354.732-1.021 1.186-1.744 1.186-1.532 0-2.496-1.92-1.744-3.474l42.414-87.578c2.683-5.54 2.684-12.309.002-17.85z'
                opacity='0.8'
                className='path1'
              ></path>
              <path
                fill='#D8E4E1'
                d='M14.4 3.474C13.647 1.92 14.611 0 16.143 0c.723 0 1.39.454 1.745 1.187l43.505 89.875c2.681 5.538 2.682 12.304.001 17.843l-43.507 89.909c-.354.732-1.021 1.186-1.744 1.186-1.532 0-2.496-1.92-1.744-3.474l42.414-87.578c2.683-5.54 2.684-12.309.002-17.85z'
                opacity='0.8'
                className='path2'
              ></path>
              <path
                fill='#D8E4E1'
                d='M28.4 3.474C27.647 1.92 28.611 0 30.143 0c.723 0 1.39.454 1.745 1.187l43.505 89.875c2.681 5.538 2.682 12.304.001 17.843l-43.507 89.909c-.354.732-1.021 1.186-1.744 1.186-1.532 0-2.496-1.92-1.744-3.474l42.414-87.578c2.683-5.54 2.684-12.309.002-17.85z'
                opacity='0.8'
                className='path3'
              ></path>
              <path
                fill='#D8E4E1'
                d='M42.4 3.474C41.647 1.92 42.611 0 44.143 0c.723 0 1.39.454 1.745 1.187l43.505 89.875c2.681 5.538 2.682 12.304.001 17.843l-43.507 89.909c-.354.732-1.021 1.186-1.744 1.186-1.532 0-2.496-1.92-1.744-3.474l42.414-87.578c2.683-5.54 2.684-12.309.002-17.85z'
                opacity='0.8'
                className='path4'
              ></path>
            </svg>
          </header>
          <div className='descriptions'>
            <ul>
              <li>
                <p className='first-p'>Stress level</p>
                <p className='second-p'>High</p>
              </li>
              <li>
                <p className='first-p'>Energy levels</p>
                <p className='second-p'>Low</p>
                <div className='energy'>
                  <div className='level bg-[#ba4949]'></div>
                  <div className='level opacity-20 bg-[#ba4949]'></div>
                  <div className='level opacity-20 bg-[#ba4949]'></div>
                </div>
              </li>
              <li>
                <p className='first-p'>Mind state</p>
                <p className='second-p'>Fogged</p>
                <div className='progress progress1'>
                  <div
                    role='progressbar'
                    className='bar'
                    style={{
                      left: '20%'
                    }}
                  ></div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <p className='first-p'>Stress level</p>
                <p className='second-p'>Low</p>
              </li>
              <li>
                <p className='first-p'>Energy levels</p>
                <p className='second-p'>High</p>
                <div className='energy'>
                  <div className='level bg-[#3a7968]'></div>
                  <div className='level bg-[#3a7968]'></div>
                  <div className='level bg-[#3a7968]'></div>
                </div>
              </li>
              <li>
                <p className='first-p'>Mind state</p>
                <p className='second-p'>Clear</p>
                <div className='progress progress2'>
                  <div
                    role='progressbar'
                    className='bar'
                    style={{
                      left: '85%'
                    }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <Pricing />
        <section className='container'>
          <div className='whatyouget'>
            <h2 className='font2'>What you get</h2>
            <ul>
              <li>Your chronic stress and anxiety are gone for good</li>
              <li>
                You said goodbye to constant tiredness and disorganization
              </li>
              <li>Your brain fog turned into mind clarity</li>
              <li>Your sleep is better than ever</li>
              <li>You feel so much sharper with memory and recall</li>
              <li>You forgot about stress-related digestive issues</li>
              <li>You start getting more creative ideas</li>
            </ul>
          </div>
        </section>
        <section className='container'>
          <div className='reviews'>
            <div className='negative'>
              <h2 className='font2'>Without Leaply</h2>
              <ul>
                <li>Generic advice online</li>
                <li>Theory-focused courses</li>
                <li>Nothing works when needed</li>
                <li>Contradicting opinions</li>
              </ul>
            </div>

            <div className='positive'>
              <h2 className='font2'>With Leaply</h2>
              <ul>
                <li>Personalized day-by-day plan</li>
                <li>Practice-focused 5‑minute techniques</li>
                <li>Rapid relief toolkit in your pocket</li>
                <li>Proven research-based content</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className='badge'>
            <Image
              alt="Harvard School shield logo featuring a gold background with a book in the center'"
              width='74'
              height='89'
              src='/badge.svg'
              style={{
                color: 'transparent'
              }}
            />
            <p>
              <span>Leaply</span> proudly originates from{' '}
              <span>Harvard Medical</span> and <span>Monash University</span>{' '}
              research
            </p>
          </div>
        </section>
        <section className='container'>
          <div className='peopleoftenask'>
            <h2 className='font2'>People often ask</h2>
            <PeopleOftenAsk
              head='What is Vagus Nerve?'
              para="The Vagus Nerve is like your body's superhighway, connecting your brain to many important organs. When it's not working properly, it contributes to stress, anxiety, fatigue, brain fog, headaches, and digestive issues."
            />
            <PeopleOftenAsk
              head='How does the plan work?'
              para='Our plan helps you combat your symptoms by teaching you to stimulate your Vagus nerve. We provide you with all the knowledge you need as well as effective 5‑minute techniques to get instant results.
              The plan is aimed at turning Vagus Nerve stimulation into an effortless habit that helps you gradually restore vagal tone and reverse negative symptoms.'
            />
            <PeopleOftenAsk
              head='What happens when the plan ends?'
              para='Once you complete the main section of your plan and alleviate the negative symptoms, your plan will continue to keep supporting all the progress you have accomplished.
              You will gain access to more advanced techniques as well as practice-focused guidance to enrich your lifestyle with healthy habits.
'
            />
            <PeopleOftenAsk
              head='When can I start feeling the effect?'
              para='The effects vary based on health condition and symptom severity but typically occur within the first 1-10 days of the program. 80% of Leaply users reported a substantial relief after the first 2 sessions.'
            />
            <PeopleOftenAsk
              head='Is it science-backed?'
              para='Yes! Clinical research has demonstrated that Vagus Nerve stimulation can effectively reduce anxiety, chronic fatigue, and digestive issues. Our plan leverages this evidence-based approach to help you achieve lasting relief and improved well-being.'
            />
          </div>
        </section>
        <section className='container'>
          <div className='review2'>
            <h2 className='font2'>A few words from our users</h2>
            <div className='list'>
              <Review2
                tagclassName='bg1'
                tag='EB'
                name='Elaine Butler'
                date='Nov 21, 2024'
                para='Leaply has helped me leaps and bounds. Definitely try it, it can help you too!'
              />
              <Review2
                tagclassName='bg2'
                tag='DG'
                name='Elaine Butler'
                date='Nov 21, 2024'
                para='Leaply has helped me leaps and bounds. Definitely try it, it can help you too!'
              />
              <Review2
                tagclassName='bg3'
                tag='AB'
                name='Elaine Butler'
                date='Nov 21, 2024'
                para='Leaply has helped me leaps and bounds. Definitely try it, it can help you too!'
              />
            </div>
          </div>
        </section>
        <Pricing />
        <section className='container'>
          <div className='badge2'>
            <svg
              width='49'
              height='49'
              fill='none'
              viewBox='0 0 49 49'
              aria-hidden='true'
              className='styles_icon__Cjhse'
            >
              <path
                fill='#3A7968'
                fill-rule='evenodd'
                stroke='#3A7968'
                stroke-width='0.25'
                d='M24.5 5.95c-1.214 0-2.409.414-5.39 1.493l-1.057.383c-2.793 1.012-4.83 1.75-6.259 2.365-.714.305-1.23.563-1.594.786q-.203.12-.385.271a1 1 0 0 0-.1.1 1 1 0 0 0-.06.143q-.076.238-.117.486c-.08.442-.141 1.05-.184 1.87-.084 1.644-.085 3.938-.085 7.08v3.076c0 10.11 7.145 15.084 11.906 17.286.685.316 1.081.495 1.522.615.422.114.935.185 1.803.185s1.381-.07 1.803-.184c.44-.12.837-.3 1.522-.617 4.761-2.2 11.906-7.175 11.906-17.285v-3.076c0-3.142 0-5.436-.085-7.08-.043-.82-.104-1.428-.184-1.87a4 4 0 0 0-.118-.486 1 1 0 0 0-.059-.143 1 1 0 0 0-.1-.1q-.182-.15-.385-.27c-.363-.223-.88-.48-1.594-.787-1.43-.615-3.466-1.353-6.259-2.365l-1.057-.383c-2.981-1.08-4.176-1.493-5.39-1.493Zm-6.05-1.365c2.668-.966 4.32-1.565 6.05-1.565s3.383.599 6.05 1.565l.236.086 1.106.4c2.735.99 4.845 1.755 6.356 2.405.761.327 1.416.644 1.943.968.506.31 1.015.7 1.36 1.22.342.516.519 1.149.63 1.758.115.633.185 1.393.23 2.266.089 1.731.089 4.106.089 7.187v3.128c0 11.917-8.507 17.633-13.566 19.97l-.05.023c-.628.29-1.217.563-1.895.746-.715.195-1.475.278-2.489.278s-1.774-.084-2.49-.278c-.677-.182-1.267-.456-1.894-.745l-.05-.023C15.007 41.636 6.5 35.92 6.5 24.004v-3.13c0-3.078 0-5.452.09-7.185.044-.873.114-1.633.229-2.267.111-.61.288-1.242.63-1.757.345-.521.853-.91 1.36-1.221.527-.324 1.182-.641 1.943-.968 1.51-.65 3.621-1.414 6.356-2.405l1.105-.4z'
                clip-rule='evenodd'
              ></path>
              <path
                fill='#3A7968'
                fill-rule='evenodd'
                d='M18 22.855a1.633 1.633 0 0 0-2.401-.028 1.823 1.823 0 0 0-.027 2.477l5.143 5.578c.325.353.779.55 1.254.54a1.66 1.66 0 0 0 1.227-.601l10.286-12.273a1.82 1.82 0 0 0-.14-2.473c-.7-.66-1.777-.59-2.395.147l-9.077 10.83zm15.245-6.286c.358.508.343 1.23-.07 1.722L22.89 30.564a1.25 1.25 0 0 1-.93.457c.357-.01.694-.174.93-.457L33.176 18.29a1.43 1.43 0 0 0 .07-1.722z'
                clip-rule='evenodd'
              ></path>
              <path
                stroke='#3A7968'
                stroke-width='0.25'
                d='M22.89 30.564 33.175 18.29a1.43 1.43 0 0 0 .07-1.722v-.001a1.43 1.43 0 0 1-.07 1.722zm0 0a1.25 1.25 0 0 1-.93.457m.93-.457a1.25 1.25 0 0 1-.93.457m0 0c-.357.01-.701-.14-.95-.41m.95.41c-.356.01-.7-.14-.95-.41m0 0-5.144-5.578M18 22.855a1.633 1.633 0 0 0-2.401-.028 1.823 1.823 0 0 0-.027 2.477l5.143 5.578c.325.353.779.55 1.254.54a1.66 1.66 0 0 0 1.227-.601l10.286-12.273a1.82 1.82 0 0 0-.14-2.473c-.7-.66-1.777-.59-2.395.147l-9.077 10.83z'
              ></path>
            </svg>
            <h2 className='__className_1098a8 styles_title__XJiPZ'>
              30-day money-back guarantee
            </h2>
            <p>
              Our Plan is backed by a 100% money-back guarantee. We are so
              confident that our program will help you that we guarantee a full
              refund within 30 days after purchase if you don&apos;t see visible
              results in your ability to control your life despite following
              your plan as directed.{' '}
              <a
                href='https://legal.tryleaply.com/money-back-guarantee'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn more
              </a>
              .
            </p>
          </div>
        </section>
        <section className='footer2'>
          <div className='wrapper'>
            <p>
              Leaply is designed solely for educational and informational
              purposes to promote relaxation and general well-being through
              techniques associated with vagus nerve stimulation. It does not
              diagnose, treat, or prevent any medical condition and is not a
              substitute for professional medical advice. For any health
              concerns, please check in with a healthcare professional.
              <br /> For more details on our approach, see{' '}
              <a
                data-track-link='true'
                href='https://legal.tryleaply.com/scientific-reference'
                target='_blank'
              >
                scientific reference
              </a>
              .
            </p>
          </div>
        </section>
        <section className='container'>
          <footer>
            <p>
              MOMENTUMIX LIMITED, Suite 7, Kosta Xatzikakou 1, Agios Athanasios,
              Limassol, 4107, Cyprus
            </p>
          </footer>
        </section>
      </div>
    </div>
  )
}

function PeopleOftenAsk ({ head, para }: { head: string; para: string }) {
  return (
    <article className='flex item-start gap-4 text-base '>
      <div>
        <h3 className='font-bold'>{head}</h3>
        <div>{para}</div>
      </div>
    </article>
  )
}

function Review2 ({
  tag,
  name,
  date,
  para,
  tagclassName
}: {
  tag: string
  name: string
  date: string
  para: string
  tagclassName: string
}) {
  return (
    <article className='inner'>
      <span className={`${tagclassName} tag`}>{tag}</span>
      <div>
        <h3>{name}</h3>
        <header>
          <div className='star'>
            <span className='icon'>
              <svg
                width='14'
                height='12'
                fill='none'
                viewBox='0 0 14 12'
                aria-hidden='true'
              >
                <path
                  fill='#00B67A'
                  d='m7 9.15 2.688-1.754L11.312 12zm7-4.584H8.646L7 0 5.354 4.566H0l4.333 2.83-1.646 4.566 4.334-2.83 2.667-1.736z'
                ></path>
              </svg>
            </span>
            <span className='icon'>
              <svg
                width='14'
                height='12'
                fill='none'
                viewBox='0 0 14 12'
                aria-hidden='true'
              >
                <path
                  fill='#00B67A'
                  d='m7 9.15 2.688-1.754L11.312 12zm7-4.584H8.646L7 0 5.354 4.566H0l4.333 2.83-1.646 4.566 4.334-2.83 2.667-1.736z'
                ></path>
              </svg>
            </span>
            <span className='icon'>
              <svg
                width='14'
                height='12'
                fill='none'
                viewBox='0 0 14 12'
                aria-hidden='true'
              >
                <path
                  fill='#00B67A'
                  d='m7 9.15 2.688-1.754L11.312 12zm7-4.584H8.646L7 0 5.354 4.566H0l4.333 2.83-1.646 4.566 4.334-2.83 2.667-1.736z'
                ></path>
              </svg>
            </span>
            <span className='icon'>
              <svg
                width='14'
                height='12'
                fill='none'
                viewBox='0 0 14 12'
                aria-hidden='true'
              >
                <path
                  fill='#00B67A'
                  d='m7 9.15 2.688-1.754L11.312 12zm7-4.584H8.646L7 0 5.354 4.566H0l4.333 2.83-1.646 4.566 4.334-2.83 2.667-1.736z'
                ></path>
              </svg>
            </span>
            <span className='icon'>
              <svg
                width='14'
                height='12'
                fill='none'
                viewBox='0 0 14 12'
                aria-hidden='true'
              >
                <path
                  fill='#00B67A'
                  d='m7 9.15 2.688-1.754L11.312 12zm7-4.584H8.646L7 0 5.354 4.566H0l4.333 2.83-1.646 4.566 4.334-2.83 2.667-1.736z'
                ></path>
              </svg>
            </span>
          </div>
          <p>{date}</p>
        </header>
        <p>{para}</p>
      </div>
    </article>
  )
}

function Pricing () {
  return (
    <div className='container2 md:px-6'>
      <h2 className='font2'>
        Your <span>Vagus Nerve Reset</span> plan is ready!
      </h2>
      <div className='problem'>
        <div className='left'>
          <svg
            width='21'
            height='20'
            fill='none'
            viewBox='0 0 21 20'
            aria-hidden='true'
          >
            <path
              fill='#3A7968'
              d='M10.234 13.358q1.765 0 3-1.075 1.232-1.075 1.232-2.608 0-1.342-.905-2.288-.904-.945-2.2-.945-1.145 0-1.954.708-.81.708-.809 1.725 0 .441.162.88.162.436.547.753.332.3.69.246.36-.054.586-.279a.86.86 0 0 0 .258-.546q.03-.32-.266-.596a1 1 0 0 1-.166-.2.44.44 0 0 1-.062-.233q0-.325.271-.546.272-.22.744-.22.576 0 .98.445.401.446.402 1.121 0 .842-.713 1.43-.714.586-1.771.587-1.303 0-2.208-.992t-.906-2.45q0-.542.154-1.058a3.5 3.5 0 0 1 .459-.967q.193-.307.183-.646a.82.82 0 0 0-.27-.587.86.86 0 0 0-.622-.246.7.7 0 0 0-.577.287 5 5 0 0 0-.822 1.5 5.2 5.2 0 0 0-.28 1.692q0 2.134 1.417 3.62 1.417 1.488 3.446 1.488M4.523 20a.87.87 0 0 1-.625-.238.79.79 0 0 1-.25-.595V15.7a9.3 9.3 0 0 1-2.322-3.037A8.4 8.4 0 0 1 .5 9q0-3.75 2.755-6.375T9.945 0q3.279 0 5.811 1.838 2.532 1.837 3.293 4.787l1.417 5.342a.74.74 0 0 1-.15.712.86.86 0 0 1-.698.321H17.29v3.333q0 .692-.512 1.18a1.73 1.73 0 0 1-1.237.487h-2.449v1.167a.79.79 0 0 1-.249.595.87.87 0 0 1-.625.238z'
            ></path>
          </svg>
          <div className='head'>
            <p className='para1'>Main trigger:</p>
            <p className='para2'>Chronic stress</p>
          </div>
        </div>
        <div className='right'>
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
          <div className='head'>
            <p className='para1'>Plan focus:</p>
            <p className='para2'>Vagal reset</p>
          </div>
        </div>
      </div>
      <form>
        <label>
          <div className='control'>
            <input
              type='radio'
              id='intro-3-month-usd'
              name='plan'
              value='intro-3-month-usd'
            />
            <div className='title'>
              <p className='titlep'>3-Month Plan</p>
              <div className='period'>
                <p className='full'>$99.99</p>
                <p className='half'>$49.99</p>
              </div>
            </div>
            <p className='discountprice'>$1.12</p>
            <div className='price'>
              <span className='span1'>$</span>
              <span className='span2'>0</span>
              <div className='pricetag'>
                <span className='span3'>55</span>
                <span className='span4'>per day</span>
              </div>
            </div>
          </div>
        </label>
      </form>
      <div className='agreement'>
        <p>
          By continuing, you are enrolling in a 3 months subscription to{' '}
          <a href='https://learn.theleaply.com' target='_blank'>
            learn.theleaply.com
          </a>{' '}
          with the discount price $49.99. You agree that the plan you selected
          will automatically be extended at the full price for successive
          renewal periods and you will be charged the full price of $99.99 every
          3 months until you cancel the subscription. You can cancel the
          subscription by contacting our customer support team via email at{' '}
          <a
            href='mailto:support@theleaply.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            support@theleaply.com
          </a>
          .{' '}
          <a
            href='https://legal.tryleaply.com/subscription-policy'
            target='_blank'
          >
            Subscription policy
          </a>
          .
        </p>
      </div>
      <div className='pay'>
        <p>Pay Safe &amp; Secure</p>
      </div>
      <div className='payment'>
        <svg
          width='33'
          height='21'
          fill='none'
          viewBox='0 0 33 21'
          aria-label='PayPal'
        >
          <g clip-path='url(#paypal_svg__a)'>
            <path
              fill='#fff'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266'
            ></path>
            <path
              stroke='#000'
              stroke-width='0.5'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266Z'
            ></path>
            <path
              fill='#28356A'
              fill-rule='evenodd'
              d='m14.513 15.13.188-1.208-.419-.01h-2.003l1.392-8.91a.12.12 0 0 1 .039-.07.11.11 0 0 1 .074-.028h3.377c1.121 0 1.895.235 2.298.7.19.218.31.446.369.697.061.263.062.578.002.961l-.004.028v.246l.19.109q.238.127.383.295.244.28.31.704.07.436-.043 1.023a3.6 3.6 0 0 1-.415 1.157 2.4 2.4 0 0 1-.657.727c-.25.18-.548.316-.885.403a4.4 4.4 0 0 1-1.106.129h-.263a.79.79 0 0 0-.781.674l-.02.108-.333 2.129-.015.078c-.004.025-.01.037-.02.045a.06.06 0 0 1-.035.013z'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#298FC2'
              fill-rule='evenodd'
              d='M20.194 7.317q-.015.098-.034.2c-.445 2.31-1.969 3.107-3.915 3.107h-.99a.48.48 0 0 0-.476.411l-.65 4.17a.255.255 0 0 0 .25.296h1.756a.424.424 0 0 0 .418-.36l.017-.09.331-2.12.021-.117a.424.424 0 0 1 .418-.36h.263c1.702 0 3.035-.699 3.424-2.718.163-.844.079-1.549-.352-2.044a1.7 1.7 0 0 0-.48-.375'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#22284F'
              fill-rule='evenodd'
              d='M19.727 7.13a4 4 0 0 0-.433-.096 5.5 5.5 0 0 0-.873-.065h-2.647a.426.426 0 0 0-.417.36l-.564 3.602-.016.105a.48.48 0 0 1 .476-.412h.99c1.946 0 3.47-.797 3.915-3.106q.02-.102.035-.2a2.4 2.4 0 0 0-.466-.187'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#28356A'
              fill-rule='evenodd'
              d='M15.356 7.33a.424.424 0 0 1 .417-.36h2.647q.471-.001.873.064a4 4 0 0 1 .433.097l.1.031q.197.066.366.156c.133-.853 0-1.434-.458-1.96-.503-.58-1.412-.827-2.576-.827h-3.376a.484.484 0 0 0-.477.412l-1.407 9.003a.292.292 0 0 0 .286.338h2.085z'
              clip-rule='evenodd'
            ></path>
          </g>
          <defs>
            <clipPath id='paypal_svg__a'>
              <path fill='#fff' d='M.5.016h32v20H.5z'></path>
            </clipPath>
          </defs>
        </svg>
        <svg
          width='33'
          height='21'
          fill='none'
          viewBox='0 0 33 21'
          aria-label='Apple Pay'
        >
          <g clip-path='url(#apple-pay_svg__a)'>
            <path
              fill='#fff'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266'
            ></path>
            <path
              stroke='#000'
              stroke-width='0.5'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266Z'
            ></path>
            <path
              fill='#000'
              fill-rule='evenodd'
              d='M9.435 6.44c.267-.335.449-.784.4-1.243-.39.02-.869.258-1.145.593-.249.287-.468.755-.411 1.195.44.038.879-.22 1.156-.545m.396.63c-.388-.023-.741.116-1.027.229-.184.072-.34.134-.46.134-.13 0-.293-.064-.475-.136-.24-.095-.514-.203-.8-.198a1.88 1.88 0 0 0-1.601.972c-.686 1.182-.181 2.936.486 3.899.324.476.714 1 1.228.982.226-.01.387-.078.555-.148.194-.082.396-.167.713-.167.302 0 .494.082.68.162.175.075.345.148.596.143.533-.01.867-.476 1.19-.953a4.2 4.2 0 0 0 .531-1.088l.003-.008-.013-.007c-.119-.054-1.016-.467-1.025-1.566-.009-.923.706-1.391.823-1.468l.015-.01c-.457-.676-1.171-.752-1.42-.772m7.912 1.02c0-1.392-.967-2.348-2.354-2.348h-2.68v7.15h1.109V10.45h1.536c1.402 0 2.389-.96 2.389-2.358m-2.651 1.428h-1.274v-2.84h1.278c.962 0 1.512.516 1.512 1.418s-.55 1.422-1.517 1.422m2.94 1.893c0-.912.7-1.472 1.938-1.541l1.427-.084v-.402c0-.58-.391-.926-1.045-.926-.62 0-1.006.297-1.1.763H18.24c.06-.942.862-1.636 2.15-1.636 1.264 0 2.071.67 2.071 1.715v3.592h-1.025v-.857h-.025c-.302.58-.961.947-1.645.947-1.021 0-1.735-.635-1.735-1.571m3.365-.47v-.412l-1.283.08c-.64.044-1.001.326-1.001.772 0 .456.376.753.951.753.748 0 1.333-.515 1.333-1.194m2.034 3.002v.867c.079.015.346.025.436.025 1.08 0 1.595-.407 2.041-1.67l1.953-5.486h-1.13l-1.318 4.242h-.02L24.075 7.68h-1.16l1.883 5.218-.035.12c-.027.089-.059.197-.059.202-.163.536-.431.744-.927.744-.089 0-.267 0-.346-.02'
              clip-rule='evenodd'
            ></path>
          </g>
          <defs>
            <clipPath id='apple-pay_svg__a'>
              <path fill='#fff' d='M.5.016h32v20H.5z'></path>
            </clipPath>
          </defs>
        </svg>
        <svg
          width='33'
          height='21'
          fill='none'
          viewBox='0 0 33 21'
          aria-label='Visa'
        >
          <g clip-path='url(#visa_svg__a)'>
            <path
              fill='#fff'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266'
            ></path>
            <path
              stroke='#000'
              stroke-width='0.5'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266Z'
            ></path>
            <path
              fill='#172B85'
              fill-rule='evenodd'
              d='M11.543 13.224H9.826L8.54 8.169c-.061-.233-.19-.438-.382-.535-.476-.244-1-.437-1.573-.535v-.195h2.765c.382 0 .668.293.716.632l.667 3.646 1.716-4.278h1.669zm3.528 0h-1.62l1.334-6.32h1.621zm3.432-4.57c.047-.34.334-.535.667-.535a2.95 2.95 0 0 1 1.574.292l.286-1.36a4 4 0 0 0-1.478-.293c-1.573 0-2.718.875-2.718 2.09 0 .924.81 1.41 1.383 1.702.62.291.858.486.81.777 0 .438-.477.632-.953.632a4 4 0 0 1-1.669-.389l-.286 1.361a4.6 4.6 0 0 0 1.764.34c1.764.049 2.86-.826 2.86-2.138 0-1.653-2.24-1.75-2.24-2.479m7.914 4.57-1.287-6.32h-1.383a.72.72 0 0 0-.667.486l-2.384 5.834h1.669l.333-.924h2.05l.191.924zm-2.43-4.619.476 2.382h-1.335z'
              clip-rule='evenodd'
            ></path>
          </g>
          <defs>
            <clipPath id='visa_svg__a'>
              <path fill='#fff' d='M.5.016h32v20H.5z'></path>
            </clipPath>
          </defs>
        </svg>
        <svg
          width='33'
          height='21'
          fill='none'
          viewBox='0 0 33 21'
          aria-label='Mastercard'
        >
          <g clip-path='url(#mastercard_svg__a)'>
            <path
              fill='#fff'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266'
            ></path>
            <path
              stroke='#000'
              stroke-width='0.5'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266Z'
            ></path>
            <path
              fill='#ED0006'
              fill-rule='evenodd'
              d='M16.5 14.265a5.67 5.67 0 0 1-3.666 1.334c-3.12 0-5.65-2.5-5.65-5.584s2.53-5.583 5.65-5.583c1.399 0 2.678.502 3.665 1.334a5.67 5.67 0 0 1 3.665-1.334c3.121 0 5.65 2.5 5.65 5.583s-2.529 5.584-5.65 5.584a5.67 5.67 0 0 1-3.665-1.334'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#F9A000'
              fill-rule='evenodd'
              d='M16.5 14.265a5.54 5.54 0 0 0 1.985-4.25c0-1.701-.77-3.225-1.985-4.25a5.67 5.67 0 0 1 3.665-1.333c3.12 0 5.65 2.5 5.65 5.583s-2.53 5.584-5.65 5.584a5.67 5.67 0 0 1-3.665-1.334'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#FF5E00'
              fill-rule='evenodd'
              d='M16.5 14.265a5.54 5.54 0 0 0 1.985-4.25c0-1.701-.77-3.225-1.986-4.25a5.54 5.54 0 0 0-1.985 4.25c0 1.702.77 3.226 1.985 4.25'
              clip-rule='evenodd'
            ></path>
          </g>
          <defs>
            <clipPath id='mastercard_svg__a'>
              <path fill='#fff' d='M.5.016h32v20H.5z'></path>
            </clipPath>
          </defs>
        </svg>
        <svg
          width='33'
          height='21'
          fill='none'
          viewBox='0 0 33 21'
          aria-label='Maestro'
        >
          <g clip-path='url(#maestro_svg__a)'>
            <path
              fill='#fff'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266'
            ></path>
            <path
              stroke='#000'
              stroke-width='0.5'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266Z'
            ></path>
            <path
              fill='#ED0006'
              d='M18.44 10.016c0 3.086-2.473 5.588-5.523 5.588-3.051 0-5.524-2.502-5.524-5.588s2.473-5.588 5.524-5.588c3.05 0 5.524 2.502 5.524 5.588'
            ></path>
            <path
              fill='#0099DF'
              d='M25.607 10.016c0 3.086-2.474 5.588-5.524 5.588-3.051 0-5.524-2.502-5.524-5.588s2.473-5.588 5.524-5.588c3.05 0 5.524 2.502 5.524 5.588'
            ></path>
            <path
              fill='#6C6BBD'
              fill-rule='evenodd'
              d='M16.5 14.271a5.6 5.6 0 0 0 1.94-4.253 5.6 5.6 0 0 0-1.94-4.253 5.6 5.6 0 0 0-1.941 4.253c0 1.703.753 3.228 1.94 4.253'
              clip-rule='evenodd'
            ></path>
          </g>
          <defs>
            <clipPath id='maestro_svg__a'>
              <path fill='#fff' d='M.5.016h32v20H.5z'></path>
            </clipPath>
          </defs>
        </svg>
        <svg
          width='33'
          height='21'
          fill='none'
          viewBox='0 0 33 21'
          aria-label='Discover'
        >
          <g clip-path='url(#discover_svg__a)'>
            <mask
              id='discover_svg__b'
              width='33'
              height='21'
              x='0'
              y='0'
              maskUnits='userSpaceOnUse'
              style={{
                maskType: 'luminance'
              }}
            >
              <path
                fill='#fff'
                d='M30.5.016h-28a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2'
              ></path>
            </mask>
            <g mask='url(#discover_svg__b)'>
              <path
                fill='#fff'
                d='M30.5.016h-28a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2'
              ></path>
              <path
                fill='#000'
                fill-rule='evenodd'
                d='M26.669 8.024c.871 0 1.35.403 1.35 1.164.044.583-.348 1.075-.871 1.165l1.176 1.656h-.915l-1.001-1.612h-.088v1.612h-.74V8.024zM26.32 9.86h.218c.48 0 .697-.224.697-.627 0-.358-.218-.582-.697-.582h-.218zm-3.31 2.15h2.09v-.672h-1.35v-1.075h1.307v-.672H23.75v-.895h1.35v-.672h-2.09zm-2.177-1.3L19.83 8.025h-.784l1.611 4.075h.392l1.612-4.075h-.784zm-8.842-.67c0 1.119.871 2.059 1.96 2.059.348 0 .653-.09.958-.224v-.896c-.218.27-.522.448-.87.448a1.244 1.244 0 0 1-1.264-1.253v-.09a1.326 1.326 0 0 1 1.22-1.388c.348 0 .697.18.914.448v-.896c-.261-.179-.61-.224-.914-.224-1.133-.09-2.004.851-2.004 2.015m-1.35-.493c-.436-.179-.566-.268-.566-.492.043-.269.261-.493.522-.448.218 0 .436.134.61.313l.392-.537c-.305-.268-.697-.448-1.089-.448-.61-.044-1.132.448-1.176 1.075v.045c0 .537.218.85.915 1.074.174.045.348.135.523.224.13.09.217.224.217.403 0 .313-.26.582-.522.582h-.044a.86.86 0 0 1-.784-.537l-.479.492c.261.493.784.762 1.307.762.697.044 1.263-.493 1.306-1.21v-.134c-.043-.537-.261-.806-1.132-1.164M8.114 12.01h.74V8.024h-.74zm-3.44-3.985H5.98a1.93 1.93 0 0 1 1.83 2.015c0 .582-.262 1.12-.697 1.522-.392.314-.871.493-1.35.448h-1.09zm.958 3.313c.348.044.74-.09 1.002-.314.26-.268.392-.627.392-1.03 0-.358-.131-.716-.392-.984a1.35 1.35 0 0 0-1.002-.314h-.218v2.642z'
                clip-rule='evenodd'
              ></path>
              <path
                fill='#FD6020'
                fill-rule='evenodd'
                d='M17.13 7.933c-1.088 0-2.003.895-2.003 2.06 0 1.118.871 2.059 2.004 2.103 1.132.045 2.003-.895 2.046-2.06-.043-1.163-.914-2.103-2.046-2.103'
                clip-rule='evenodd'
              ></path>
              <path
                fill='#FD6020'
                d='m14.5 20.516 17.85-5.5v4a1.5 1.5 0 0 1-1.5 1.5z'
              ></path>
            </g>
            <path
              stroke='#000'
              stroke-width='0.5'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266Z'
            ></path>
          </g>
          <defs>
            <clipPath id='discover_svg__a'>
              <path fill='#fff' d='M.5.016h32v20H.5z'></path>
            </clipPath>
          </defs>
        </svg>
        <svg
          width='33'
          height='21'
          fill='none'
          viewBox='0 0 33 21'
          aria-label='Amex'
        >
          <g clip-path='url(#amex_svg__a)'>
            <path
              fill='#1F72CD'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266'
            ></path>
            <path
              stroke='#000'
              stroke-width='0.5'
              d='M30.5.266h-28a1.75 1.75 0 0 0-1.75 1.75v16c0 .966.784 1.75 1.75 1.75h28a1.75 1.75 0 0 0 1.75-1.75v-16A1.75 1.75 0 0 0 30.5.266Z'
            ></path>
            <path
              fill='#fff'
              fill-rule='evenodd'
              d='m7.192 6.992-2.713 6.04h3.248l.402-.964h.92l.404.963h3.575v-.735l.319.735h1.849l.319-.75v.75h7.435l.904-.938.847.938 3.82.008-2.723-3.01 2.722-3.037h-3.76l-.88.92-.82-.92h-8.089l-.695 1.559-.71-1.559h-3.242v.71l-.36-.71zm.628.858h1.584l1.8 4.095V7.85h1.734l1.39 2.936 1.281-2.936h1.726v4.333h-1.05l-.009-3.395-1.53 3.395h-.94l-1.54-3.395v3.395h-2.16l-.41-.971H7.484l-.409.97H5.918zm14.746 0h-4.27v4.33H22.5l1.355-1.435 1.305 1.436h1.366l-1.985-2.153 1.985-2.178H25.22l-1.348 1.419zM8.59 8.583l-.73 1.73H9.32zm10.76.955v-.791h2.663l1.163 1.264-1.214 1.272H19.35v-.863h2.33v-.882z'
              clip-rule='evenodd'
            ></path>
          </g>
          <defs>
            <clipPath id='amex_svg__a'>
              <path fill='#fff' d='M.5.016h32v20H.5z'></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}
