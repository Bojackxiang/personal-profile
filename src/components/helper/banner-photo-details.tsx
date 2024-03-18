import { Container } from 'postcss'
import Image from 'next/image'

const BannerPhotoAndDetials = () => {
  return (
    <section className='flex flex-col sm:flex-row justify-between p-2'>
      <div className='flex-1 '>
        <Image className='rounded-full block mx-auto sm:mx-0' src={"/user-avatar.jpg"} width={300} height={300} alt="user avatar" />
      </div>

      <div className='flex-1'>
        <h1 className='text-3xl font-bold text-white text-center py-8'>
          Glad to see you, I am Alex!
        </h1>
        <div className='text-center'>
          <p className='text-white p-5 sm:p-0'>
            Welcome to my portfolio! I am looking to a Full Stack Position.
            I have 2+ years of experience.
            I am currently looking for a job.
            I have 2+ years of experience.
          </p>

          <p className='text-white p-5 sm:p-0'>
            Welcome to my portfolio! I am looking to a Full Stack Position.
            I have 2+ years of experience.
            I am currently looking for a job.
            I have 2+ years of experience.
          </p>
        </div>

      </div>
    </section>
  )
}

export default BannerPhotoAndDetials