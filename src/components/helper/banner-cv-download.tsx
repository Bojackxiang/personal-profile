import React from 'react'
import { Button } from '../ui/button'

const BannerCVDownload = () => {
  return (
    <section className='flex flex-col sm:flex-row justify-between p-2 '>
      <div className='flex-1'>
        <p className='text-white font-bold text-3xl text-center sm:text-left '> Download CV NOW !</p>
      </div>
      <div className='text-center flex-1 mt-2 sm:mt-0'>
        <Button className='text-white w-full'>
          Click me to download the CV
        </Button>
      </div>
    </section>
  )
}

export default BannerCVDownload