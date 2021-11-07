import * as React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=''>
      <div className='flex justify-between px-8 py-6'>
        <div>
          <img src='' alt='' />
        </div>
        <nav>
          <ul className='flex'>
            <li className='ml-12 first:ml-0 capitalize'>
              <Link href='#'>
                <a>home</a>
              </Link>
            </li>
            <li className='ml-12 first:ml-0 capitalize'>
              <Link href='#'>
                <a>products</a>
              </Link>
            </li>
            <li className='ml-12 first:ml-0 capitalize'>
              <Link href='#'>
                <a>our dealers</a>
              </Link>
            </li>
            <li className='ml-12 first:ml-0 capitalize'>
              <Link href='#'>
                <a>gallery</a>
              </Link>
            </li>
            <li className='ml-12 first:ml-0 capitalize'>
              <Link href='#'>
                <a>contact us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
