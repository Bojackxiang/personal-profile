import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {

}

const SharedSectionTitle = ({ children }: Props) => {
  return (
    <div className="w-full">
      <p className='text-white font-bold text-5xl text-center'>
        {children}
      </p>
    </div>
  )
}

export default SharedSectionTitle