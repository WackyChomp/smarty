import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header_wrapper'>
        <Link href='/'>
          <Image src='' alt='logo' width={140} height={40}
            className='h-8 w-auto cursor-pointer'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header