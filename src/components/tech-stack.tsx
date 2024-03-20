import React from 'react'
import SharedSectionTitle from './helper/shared-section-title'
import Container from './helper/shared-container'
import TechStackContent from './helper/tech-stack-content'

interface Props {

}

const TechStack = ({ }: Props) => {
  return (
    <div className="w-full relative">
      <SharedSectionTitle>
        Tech Stack
      </SharedSectionTitle>


      <TechStackContent />
    </div>
  )
}

export default TechStack