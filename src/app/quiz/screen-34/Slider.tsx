import React from 'react'
import Slider from 'react-slick'

export default function Sliders () {
  const settings = {
    infinite: true, // Loop slides infinitely
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000 // Auto-scroll interval in milliseconds
  }

  const data = [
    {
      name: 'John Doe',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Jane Smith',
      para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Alex Johnson',
      para: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}>
          <SliderComp data={item} />
        </div>
      ))}
    </Slider>
  )
}

export function SliderComp ({
  data: { name, para }
}: {
  data: {
    name: string
    para: string
  }
}) {
  return (
    <article className='testimonials inline-block w-full'>
      <div className='testimonials'>
        <div className='rating'>
          <span className='style_testimonials__ratingItem__73jic'></span>
          <span className='style_testimonials__ratingItem__73jic'></span>
          <span className='style_testimonials__ratingItem__73jic'></span>
          <span className='style_testimonials__ratingItem__73jic'></span>
          <span className='style_testimonials__ratingItem__73jic'></span>
        </div>
        <p className='style_testimonials__name__7uGZR'>{name}</p>
      </div>
      <p className='style_testimonials__text__zZwNv'>
        {para}
      </p>
    </article>
  )
}
