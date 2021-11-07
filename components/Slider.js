import * as React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot,
} from 'pure-react-carousel'

const SliderComponent = () => {
  return (
    <CarouselProvider
      orientation={'horizontal'}
      totalSlides={5}
      hasMasterSpinner={true}
      isPlaying={true}
      interval={4000}
      infinite={true}
      visibleSlides={3}
      totalSlides={6}
      step={3}
      naturalSlideWidth={388}
      naturalSlideHeight={290}
      className='relative'
    >
      <Slider>
        <Slide className='pr-8' index={0}>
          <Image hasMasterSpinner={true} src='/images/1.jpeg' />
        </Slide>
        <Slide className='pr-8' index={1}>
          <Image hasMasterSpinner={true} src='/images/2.jpeg' />
        </Slide>
        <Slide className='pr-8' index={2}>
          <Image hasMasterSpinner={true} src='/images/3.jpeg' />
        </Slide>
        <Slide className='pr-8' index={3}>
          <Image hasMasterSpinner={true} src='/images/4.jpeg' />
        </Slide>
        <Slide className='pr-8' index={4}>
          <Image hasMasterSpinner={true} src='/images/5.jpeg' />
        </Slide>
        <Slide className='pr-8' index={5}>
          <Image hasMasterSpinner={true} src='/images/6.jpeg' />
        </Slide>
      </Slider>
      <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex'>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={0}
            className='bg-primary h-1 w-1 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={1}
            className='bg-primary h-1 w-1 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={2}
            className='bg-primary h-1 w-1 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={3}
            className='bg-primary h-1 w-1 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={4}
            className='bg-primary h-1 w-1 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={5}
            className='bg-primary h-1 w-1 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
      </div>
    </CarouselProvider>
  )
}
export default SliderComponent
