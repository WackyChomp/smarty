import React from 'react'
import Link from 'next/link'

const FooterLink = ({ text, linkText, href } : FooterLinkProps) => {
  return (
    <div className='text-center pt-5'>
      <p className='text-green-600 text-sm'>
      {text}{` `}
      <Link href={href} className=''>
        {linkText}
      </Link>
      </p>
    </div>
  )
}

export default FooterLink