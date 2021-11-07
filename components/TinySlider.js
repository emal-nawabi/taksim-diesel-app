import React from 'react'
import Slider from 'react-slick'

const TinySlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    autoPlay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }
  return (
    <Slider {...settings}>
      <div className='px-4 w-96 h-72'>
        <img src='/images/1.jpeg' alt='' className='w-full h-full' />
      </div>
      <div className='px-4 w-96 h-72'>
        <img src='/images/2.jpeg' alt='' className='w-full h-full' />
      </div>
      <div className='px-4 w-96 h-72'>
        <img src='/images/3.jpeg' alt='' className='w-full h-full' />
      </div>
      <div className='px-4 w-96 h-72'>
        <img src='/images/4.jpeg' alt='' className='w-full h-full' />
      </div>
      <div className='px-4 w-96 h-72'>
        <img src='/images/5.jpeg' alt='' className='w-full h-full' />
      </div>
      <div className='px-4 w-96 h-72'>
        <img src='/images/6.jpeg' alt='' className='w-full h-full' />
      </div>
    </Slider>
  )
}

export default TinySlider
