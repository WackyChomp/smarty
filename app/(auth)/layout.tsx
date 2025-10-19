import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Split screen design

const layout = ({children}: {children : React.ReactNode}) => {
  return (
    <main className='bg-gray-400'>
      <section className=''>
        <Link href='/'>
          <Image src='' alt='logo' width={40} height={40}/>
        </Link>
      </section>
    </main>
  )
}

export default layout