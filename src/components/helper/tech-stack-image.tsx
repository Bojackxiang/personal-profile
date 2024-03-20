import Image from "next/image"



interface Props {
  techName: string
  imageSrc: string
  height: number
  width: number
  alt: string
}

const TechStackImage = ({
  techName,
  imageSrc,
  height,
  width,
  alt }: Props) => {
  return (

    <div className='flex flex-col items-center justify-center '>
      <p className=" text-white font-bold text-sm mb-4 ">{techName}</p>
      <div className="rounded-full h-[120px] w-[120px] overflow-hidden bg-blue-500 flex items-center">
        <Image className="flex-1" src={imageSrc} alt={alt} height={height} width={width} />
      </div>

    </div>

  )
}

export default TechStackImage