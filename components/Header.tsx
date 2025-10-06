'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = () => {
  const brandLogo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoYXJ0LW5vLWF4ZXMtY29tYmluZWQtaWNvbiBsdWNpZGUtY2hhcnQtbm8tYXhlcy1jb21iaW5lZCI+PHBhdGggZD0iTTEyIDE2djUiLz48cGF0aCBkPSJNMTYgMTR2NyIvPjxwYXRoIGQ9Ik0yMCAxMHYxMSIvPjxwYXRoIGQ9Im0yMiAzLTguNjQ2IDguNjQ2YS41LjUgMCAwIDEtLjcwOCAwTDkuMzU0IDguMzU0YS41LjUgMCAwIDAtLjcwNyAwTDIgMTUiLz48cGF0aCBkPSJNNCAxOHYzIi8+PHBhdGggZD0iTTggMTR2NyIvPjwvc3ZnPg==`

  return (
    <header className='sticky top-0 header'>
      <div className='container header_wrapper'>
        <Link href='/'>
          <Image src={brandLogo} alt='logo' width={140} height={40}
            className='h-8 w-auto cursor-pointer'
          />
          <nav className='hidden sm:block'>
            <NavItems />
          </nav>

          <UserDropdown />
        </Link>
      </div>
    </header>
  )
}

export default Header