import { DotLoader } from "react-spinners"


export const Loading = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-green m-auto'>
      <DotLoader color="#36d7b7" size={200} />
    </div>

  )
}
