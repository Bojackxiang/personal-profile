import React from 'react'
import Container from './helper/container'

const Banner = () => {
  return (

    <div className='min-h-screen pt-14 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url("/banner-background.jpeg")' }}>
      <Container classNames="max-w-7xl">
        banner
      </Container>
    </div>

  )
}

export default Banner