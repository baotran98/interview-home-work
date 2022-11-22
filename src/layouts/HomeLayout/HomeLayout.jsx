import React from 'react'

const HomeLayout = ({ children }) => {
  return (
    <>
      <div className='mt-5 flex items-center justify-center'>
        <span className='bg-primary-gradient bg-clip-text p-3 text-6xl font-bold italic text-transparent'>BLOGS</span>
      </div>
      <div className='mx-auto max-w-[1000px]'>{children}</div>
    </>
  )
}

export default HomeLayout
