/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Link from 'next/link'

import IndexNavbar from '../components/Navbars/IndexNavbar'
import Footer from '../components/Footers/Footer.js'
import TinySlider from '../components/TinySlider'

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'></div>
        </div>
        <img
          className='absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px'
          src='/img/pattern_nextjs.png'
          alt='...'
        />
      </section>

      <section className='mt-48 md:mt-40 relative bg-blueGray-100'>
        <div className='container mx-auto overflow-hidden pb-20'>
          <div className='flex flex-wrap items-center pt-32'>
            <div className='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>
              <div className='justify-center flex flex-wrap relative'>
                <div className='my-4 w-full lg:w-6/12 px-4'>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-red-600 shadow-lg rounded-lg text-center p-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Svelte</p>
                    </div>
                  </a>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>ReactJS</p>
                    </div>
                  </a>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>NextJS</p>
                    </div>
                  </a>
                </div>
                <div className='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-yellow-500 shadow-lg rounded-lg text-center p-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>JavaScript</p>
                    </div>
                  </a>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Angular</p>
                    </div>
                  </a>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Vue.js</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
              <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-drafting-compass text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>Javascript Components</h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                In order to create a great User Experience some components require JavaScript. In
                this way you can manipulate the elements on the page and give more options to your
                users.
              </p>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                We created a set of Components that are dynamic and come to help you.
              </p>
              <div className='block pb-6'>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Alerts
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Dropdowns
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Menus
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Modals
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Navbars
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Popovers
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Tabs
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Tooltips
                </span>
              </div>
              <a
                href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index'
                target='_blank'
                className='font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150'
              >
                View all <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='bg-gray-800 py-16' id='gallery'>
          <div className='container'>
            <TinySlider />
          </div>
        </div>
      </section>

      <section className='py-16 bg-blueGray-600 overflow-hidden' id='contact'>
        <div className='container mx-auto pb-44'>
          <h2 className='text-white text-3xl text-center mb-6'>Contact</h2>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-8'>
              <h3 className='text-xl mb-6 font-semibold leading-normal text-white uppercase'>
                contact form
              </h3>
              <form>
                <div className='w-full flex'>
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
    </>
  )
}
