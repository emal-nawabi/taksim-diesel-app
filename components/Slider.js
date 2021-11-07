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

const Slideshow = () => {
  return (
    <CarouselProvider
      orientation={'horizontal'}
      naturalSlideWidth={200}
      naturalSlideHeight={250}
      totalSlides={3}
      isPlaying={true}
      interval={4000}
      infinite={true}
      className='relative w-full h-full'
    >
      <Slider className='w-96 h-96 mt-28 ml-20'>
        <Slide className='w-80 h-52' index={0}>
          <Image className='w-80 h-52' src='/images/products/1.jpeg' />
        </Slide>
        <Slide className='w-80 h-52' index={1}>
          <Image className='w-80 h-52' src='/images/products/4.jpeg' />
        </Slide>
        <Slide className='w-80 h-52' index={2}>
          <Image className='w-80 h-52' src='/images/products/5.jpeg' />
        </Slide>
      </Slider>
      <div className='absolute bottom-40 left-16 flex'>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={0}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={1}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
        <div className='border lg:border-2 border-primary opacity-60 mx-1 flex rounded-1/2'>
          <Dot
            slide={2}
            className='bg-primary h-1 lg:h-2 w-1 lg:w-2 p-0 m-px lg:m-0.5 rounded-1/2 opacity-60'
          ></Dot>
        </div>
      </div>
    </CarouselProvider>
  )
}
export default Slideshow
