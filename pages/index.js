/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Link from 'next/link'

import IndexNavbar from '../components/Navbars/IndexNavbar'
import Footer from '../components/Footers/Footer.js'
import TinySlider from '../components/TinySlider'
import Slider from '../components/Slider'

export default function Index() {
  return (
    <div className='relative'>
      <IndexNavbar fixed />
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='absolute top-0 -left-12 md:left-0 w-full h-full'>
          <Slider />
        </div>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'></div>
        </div>
        <div classNamE='relative'>
          <img
            className='absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px'
            src='/img/pattern_nextjs.png'
            alt='...'
          />
        </div>
      </section>

      <section id='product' className='mt-0 md:mt-40 pt-16 text-center relative bg-blueGray-100'>
        <div class='container pb-8'>
          <div class='text-center'>
            <h2
              class='mb-12 section-heading wow fadeInDown text-3xl text-center'
              data-wow-delay='0.3s'
            >
              Products
            </h2>
          </div>
          <div class='flex flex-wrap justify-center'>
            <div class='max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3'>
              <div class='team-item p-8'>
                <div class='team-img relative'>
                  <img class='w-full h-full' src='/images/products/1.jpeg' alt='' />
                  <div class='team-overlay'>
                    <ul class='flex justify-center'>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-indigo-500'>
                          <i class='lni lni-facebook-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-blue-400'>
                          <i class='lni lni-twitter-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-red-500'>
                          <i class='lni lni-instagram-original' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3'>
              <div class='team-item p-8 w-full h-full'>
                <div class='team-img relative w-full h-full'>
                  <img class='w-full h-full object-cover' src='/images/products/2.jpeg' alt='' />
                  <div class='team-overlay'>
                    <ul class='flex justify-center'>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-indigo-500'>
                          <i class='lni lni-facebook-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-blue-400'>
                          <i class='lni lni-twitter-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-red-500'>
                          <i class='lni lni-instagram-original' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3'>
              <div class='team-item p-8'>
                <div class='team-img relative'>
                  <img class='w-full h-full' src='/images/products/3.jpeg' alt='' />
                  <div class='team-overlay'>
                    <ul class='flex justify-center'>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-indigo-500'>
                          <i class='lni lni-facebook-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-blue-400'>
                          <i class='lni lni-twitter-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-red-500'>
                          <i class='lni lni-instagram-original' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3'>
              <div class='team-item p-8'>
                <div class='team-img relative'>
                  <img class='w-full h-full' src='/images/products/4.jpeg' alt='' />
                  <div class='team-overlay'>
                    <ul class='flex justify-center'>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-indigo-500'>
                          <i class='lni lni-facebook-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-blue-400'>
                          <i class='lni lni-twitter-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-red-500'>
                          <i class='lni lni-instagram-original' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class='max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3'>
              <div class='team-item p-8'>
                <div class='team-img relative'>
                  <img class='w-full h-full' src='/images/products/5.jpeg' alt='' />
                  <div class='team-overlay'>
                    <ul class='flex justify-center'>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-indigo-500'>
                          <i class='lni lni-facebook-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-blue-400'>
                          <i class='lni lni-twitter-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-red-500'>
                          <i class='lni lni-instagram-original' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class='max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3'>
              <div class='team-item p-8'>
                <div class='team-img relative'>
                  <img class='w-full h-full' src='/images/products/6.jpeg' alt='' />
                  <div class='team-overlay'>
                    <ul class='flex justify-center'>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-indigo-500'>
                          <i class='lni lni-facebook-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-blue-400'>
                          <i class='lni lni-twitter-original' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li class='mx-1'>
                        <a href='#' class='social-link hover:bg-red-500'>
                          <i class='lni lni-instagram-original' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-primary_dark py-24' id='gallery'>
          <div className='container'>
            <TinySlider />
          </div>
        </div>
      </section>

      <section className='py-16 bg-black overflow-hidden' id='contact'>
        <div className='container mx-auto pb-44'>
          <h2 className='text-white text-3xl text-center mb-6'>Contact</h2>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-8 mb-12 md:mb-0'>
              <h3 className='text-xl mb-6 font-semibold leading-normal text-white uppercase'>
                contact form
              </h3>
              <form>
                <div className='w-full flex flex-wrap md:flex-nowrap'>
                  <input className='mr-2 mb-6 rounded-md flex-1' type='text' placeholder='Name' />
                  <input className='mr-2 mb-6 rounded-md flex-1' type='email' placeholder='Email' />
                </div>
                <input className='mr-2 mb-6 rounded-md w-full' type='text' placeholder='Subject' />
                <textarea
                  className='mr-2 mb-6 rounded-md w-full'
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                  placeholder='Your Message'
                ></textarea>
                <button
                  type='submit'
                  className='bg-primary_light text-white mr-2 px-6 py-2 rounded-md'
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto  md:mt-8 relative'>
              <h3 className='text-xl mb-6 font-semibold leading-normal text-white uppercase'>
                get in touch
              </h3>
              <ul>
                <li className='flex items-center pb-6 last:pb-0'>
                  <div className='text-white mr-3 h-10 w-10 rounded-1/2 flex items-center justify-center bg-primary_light'>
                    <i className='fas fa-map-marker-alt'></i>
                  </div>
                  <div className='text-accents_1'>
                    Kocatepe, No:77/14, Dulapdere Taksim Cd., <br /> 34437 Beyoğlu/ Taksim/İstanbul
                  </div>
                </li>
                <li className='flex items-center pb-6 last:pb-0'>
                  <div className='text-white mr-3 h-10 w-10 rounded-1/2 flex items-center justify-center bg-primary_light'>
                    <i className='fas fa-envelope'></i>
                  </div>
                  <div className='text-accents_1'>info.taksimdiesel@gmail.com</div>
                </li>
                <li className='flex items-center pb-6 last:pb-0'>
                  <div className='text-white mr-3 h-10 w-10 rounded-1/2 flex items-center justify-center bg-primary_light'>
                    <i className='fas fa-phone-alt'></i>
                  </div>
                  <div className='text-accents_1'>+90 546 967 90 81</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-16 bg-blueGray-200 relative pt-32'>
        <div
          className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-blueGray-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>

        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 relative z-10'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.3684051414402!2d28.981188615033464!3d41.0390720254789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab765f5eb97e7%3A0x13798da6b6619d6f!2sKocatepe%2C%20Dolapdere%20Taksim%20Cd%20No%3A14%20D%3A77%2C%2034437%20Beyo%C4%9Flu%2F%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1636219514412!5m2!1sen!2s'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowfullscreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
