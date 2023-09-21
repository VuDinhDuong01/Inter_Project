import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export const JobSkeleton = () => {
 
    return (
        <div className=" lg:h-[96px] h-[70px] lg:mx-0 mx-[10px] items-center rounded-[5px] bg-[#EEE] flex justify-between mb-[22px]">
         <Skeleton width={"100%"} height={"100%"} />
        </div>
      )
  
}
