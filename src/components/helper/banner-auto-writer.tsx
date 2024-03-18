import { ReactTyped } from "react-typed";
import { TYPE_WRITER_LIST } from '@/constant';

export const BannerAutoWriter = () => {
  return (
    <ReactTyped
      strings={TYPE_WRITER_LIST}
      loop
      className="text-white text-xl text-center sm:text-5xl font-bold"
      typeSpeed={40}
      backDelay={2000}
      showCursor
    />
  )
}

