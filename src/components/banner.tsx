'use client'

import React from 'react'
import Container from './helper/container'
import { ReactTyped } from "react-typed";
import { TYPE_WRITER_LIST } from '@/constant';

const Banner = () => {
  return (

    <div className='min-h-screen pt-14 bg-cover bg-center bg-no-repeat flex flex-col justify-center'
      style={{ backgroundImage: 'url("/banner-background.jpeg")' }}>
      <Container classNames=" max-w-7xl flex flex-col justify-center items-center">
        <ReactTyped
          startWhenVisible
          strings={TYPE_WRITER_LIST}
          loop
          className="text-5xl font-bold text-white"
          typeSpeed={40}
        />

      </Container>
    </div>

  )
}

export default Banner