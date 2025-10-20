import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Split screen design

const layout = ({children}: {children : React.ReactNode}) => {
  const brandLogo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoYXJ0LW5vLWF4ZXMtY29tYmluZWQtaWNvbiBsdWNpZGUtY2hhcnQtbm8tYXhlcy1jb21iaW5lZCI+PHBhdGggZD0iTTEyIDE2djUiLz48cGF0aCBkPSJNMTYgMTR2NyIvPjxwYXRoIGQ9Ik0yMCAxMHYxMSIvPjxwYXRoIGQ9Im0yMiAzLTguNjQ2IDguNjQ2YS41LjUgMCAwIDEtLjcwOCAwTDkuMzU0IDguMzU0YS41LjUgMCAwIDAtLjcwNyAwTDIgMTUiLz48cGF0aCBkPSJNNCAxOHYzIi8+PHBhdGggZD0iTTggMTR2NyIvPjwvc3ZnPg==`
  const starIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXItaWNvbiBsdWNpZGUtc3RhciI+PHBhdGggZD0iTTExLjUyNSAyLjI5NWEuNTMuNTMgMCAwIDEgLjk1IDBsMi4zMSA0LjY3OWEyLjEyMyAyLjEyMyAwIDAgMCAxLjU5NSAxLjE2bDUuMTY2Ljc1NmEuNTMuNTMgMCAwIDEgLjI5NC45MDRsLTMuNzM2IDMuNjM4YTIuMTIzIDIuMTIzIDAgMCAwLS42MTEgMS44NzhsLjg4MiA1LjE0YS41My41MyAwIDAgMS0uNzcxLjU2bC00LjYxOC0yLjQyOGEyLjEyMiAyLjEyMiAwIDAgMC0xLjk3MyAwTDYuMzk2IDIxLjAxYS41My41MyAwIDAgMS0uNzctLjU2bC44ODEtNS4xMzlhMi4xMjIgMi4xMjIgMCAwIDAtLjYxMS0xLjg3OUwyLjE2IDkuNzk1YS41My41MyAwIDAgMSAuMjk0LS45MDZsNS4xNjUtLjc1NWEyLjEyMiAyLjEyMiAwIDAgMCAxLjU5Ny0xLjE2eiIvPjwvc3ZnPg==`
  const dashboardIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxheW91dC1kYXNoYm9hcmQtaWNvbiBsdWNpZGUtbGF5b3V0LWRhc2hib2FyZCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iOSIgeD0iMyIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI1IiB4PSIxNCIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI5IiB4PSIxNCIgeT0iMTIiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNSIgeD0iMyIgeT0iMTYiIHJ4PSIxIi8+PC9zdmc+`

  return (
    <main className='bg-gray-400 auth_layout'>
      {/* Left Side */}
      <section className='auth_left_section'>
        <Link href='/'>
          <Image src={brandLogo} alt='logo' width={40} height={40} className='h-8 w-auto'/>
        </Link>

        <div className="pb-6 lg:pb-9 flex-1">{children}</div>
      </section>

      {/* Right Side */}
      <section className='auth_right_section'>
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote>
            Smarty pants over here gave me intel that would have taken be hours to collate 
            and summarize. I can not focus on strategy and not be boggled down with research.
            Additionally, this will help position myself as independent and not rely on external 3rd party advisors
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className='auth_testimonial_author'>Jorge Scramble</cite>
              <p className='text-red-600 max-md:text-xs'>Retail Independent Personnel</p>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <Image key={star} src={starIcon} alt='star icon' width={20} height={20} className='h-5 w-5' />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image src={dashboardIcon} alt='dashboard' width={1440} height={1250} className='auth_dashboard_preview top-0'/>
        </div>
      </section>
    </main>
  )
}

export default layout