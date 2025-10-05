import React from 'react'
import Header from '@/components/Header'

const layout = ({children}: {children : React.ReactNode}) => {
  return (
    <main className='min-h-screen text-gray-400'>

      <Header />      {/* (will appear in every single page within root route group) */}

      <div className="container py-10">
        {children}
      </div>
    </main>
  )
}

export default layout