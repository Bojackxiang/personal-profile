import React from 'react'
import Container from './shared-container'
import TechStackImage from './tech-stack-image'

interface Props {

}

const IMAGE_SIZE = 140


const TECH_STACK_IMAGE_LIST = [
  {
    name: "React",
    src: "/tech-icons/react.svg",
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    alt: "react.svg"
  },
  {
    name: "NodeJS",
    src: "/tech-icons/node.svg",
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    alt: "node.svg"
  },
  {
    name: "Redux",
    src: "/tech-icons/redux.svg",
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    alt: "redux.svg"
  },
  {
    name: "Redux-Saga",
    src: "/tech-icons/redux-saga.svg",
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    alt: "redux-saga.svg"
  },
  {
    name: "Spring Boot",
    src: "/tech-icons/spring-icon.svg",
    height: 100,
    width: 100,
    alt: "spring.svg"
  },

]

const TechStackContent = ({ }: Props) => {
  return (
    <Container classNames="max-w-4xl mt-20">
      <div className="grid grid-cols-4 gap-4">
        {
          TECH_STACK_IMAGE_LIST.map((image, index) => (
            <TechStackImage
              key={image.src + index}
              techName={image.name}
              imageSrc={image.src}
              height={image.height}
              width={image.width}
              alt={image.alt}
            />
          ))
        }
      </div>
    </Container>
  )
}

export default TechStackContent