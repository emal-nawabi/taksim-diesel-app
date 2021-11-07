import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className='bg-secondary text-sm text-white pt-16'
      style={{
        backgroundImage: 'url("/images/dottedworldmap.png")',
        backgroundSize: 'auto',
        backgroundBlendMode: 'normal',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
      }}
    >
      <div className='container'>
        <div className='row justify-center pb-16 border-b-2 border-accents_8'>
          <div className='col-lg-3 mb-12'>
            <div>
              <Link href='/' passHref>
                <a>
                  <img src='/images/PraelegalAF-Logo-Large-2.png' alt='' width='203' height='57' />
                </a>
              </Link>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='flex flex-col lg:flex-row justify-center'>
              <div className='flex flex-1 items-start mr-6 last:mr-0 mb-6 lg:mb-0 last:mb-0'>
                <div className='text-2xl lg:text-3xl mr-4 mt-0.5 text-primary'>
                  <i className='flaticon-pin'></i>
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base text-accents_5'>Location</span>
                  <address className='text-sm md:text-base'>
                    Kocatepe, No:77/14, Dulapdere Taksim Cd., 34437 Beyoğlu/ Taksim/İstanbul
                  </address>
                </div>
              </div>
              <div className='flex items-start mr-6 last:mr-0 mb-6 lg:mb-0 last:mb-0'>
                <div className='text-2xl lg:text-3xl mr-4 mt-0.5 text-primary'>
                  <i className='flaticon-mail'></i>
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base text-accents_5'>Email</span>
                  <span className='text-sm md:text-base'>info.taksimdiesel@gmail.com</span>
                </div>
              </div>
              <div className='flex items-start mr-6 last:mr-0 mb-6 lg:mb-0 last:mb-0'>
                <div className='text-2xl lg:text-3xl mr-4 mt-0.5 text-primary'>
                  <i className='flaticon-phone-call'></i>
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base text-accents_5'>Phone</span>
                  <span className='text-sm md:text-base'>+90 546 967 90 81</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-center border-b-2 border-accents_8'>
          <div className='col-lg-12'>
            <div className='flex items-center pl-5 lg:pl-0 lg:justify-center my-4 lg:my-8'>
              <nav>
                <ul className='flex flex-col lg:flex-row items-start'>
                  <li className='mr-8 last:mr-0 mb-4 last:mb-0 lg:mb-0 flex items-center justify-center'>
                    <div className='text-sm text-primary mr-2'>
                      <i className='flaticon-arrow'></i>
                    </div>
                    <Link href='/practices' passHref>
                      <a>Products</a>
                    </Link>
                  </li>
                  <li className='mr-8 last:mr-0 mb-4 last:mb-0 lg:mb-0 flex items-center justify-center'>
                    <div className='text-sm text-primary mr-2'>
                      <i className='flaticon-arrow'></i>
                    </div>
                    <Link href='/why-us' passHref>
                      <a>Our Dealers</a>
                    </Link>
                  </li>
                  <li className='mr-8 last:mr-0 mb-4 last:mb-0 lg:mb-0 flex items-center justify-center'>
                    <div className='text-sm text-primary mr-2'>
                      <i className='flaticon-arrow'></i>
                    </div>
                    <Link href='/team' passHref>
                      <a>Gallery</a>
                    </Link>
                  </li>
                  <li className='mr-8 last:mr-0 mb-4 last:mb-0 lg:mb-0 flex items-center justify-center'>
                    <div className='text-sm text-primary mr-2'>
                      <i className='flaticon-arrow'></i>
                    </div>
                    <Link href='/contact-us' passHref>
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='flex items-center justify-center mt-8'>
              <ul className='flex items-center justify-end mb-8'>
                <li className='flex items-center justify-center bg-accents_2 text-accents_8 rounded-1/2 w-9 h-9 text-lg mr-8 last:mr-0'>
                  <i className='flaticon-facebook'></i>
                </li>
                <li className='flex items-center justify-center bg-accents_2 text-accents_8 rounded-1/2 w-9 h-9 text-lg mr-8 last:mr-0'>
                  <i className='flaticon-twitter'></i>
                </li>
                <li className='flex items-center justify-center bg-accents_2 text-accents_8 rounded-1/2 w-9 h-9 text-lg mr-8 last:mr-0'>
                  <i className='flaticon-linkedin'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row '>
          <div className='col-lg-12 pb-6'>
            <div className='flex items-center justify-center'>
              <p className='text-sm text-accents_6 text-center'>
                All Rights Reserved. Copyright © {new Date().getFullYear()} Taksim Diesel
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
