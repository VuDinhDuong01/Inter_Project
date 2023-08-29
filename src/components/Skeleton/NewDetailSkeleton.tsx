import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useTranslation } from "react-i18next";
import { RelatedJobsSkeleton } from "./RelatedJobsSkeleton";

export const NewDetailSkeleton = () => {
  const { t } = useTranslation()
  return (
    <div className="xl:flex xl:gap-[32px] lg:px-[30px] xl:px-0  xl:max-w-[1200px] xl:m-auto">
      <div className="xl:mt-[24px]  xl:w-[789px] w-full">
        <div className='items-center mb-[50px] lg:flex hidden xl:mb-[24px]'>
          <p className="text-green  cursor-pointer font-FontSan text-[16px] font-[500] leading-[24px]">{t('NewPageDetail.News/')}</p>
          <p className='text-green  cursor-pointer font-FontSan text-[16px] font-[500] leading-[24px]'>{t('NewPageDetail.Software Development')}</p>
          <Skeleton width={'300px'} height={'20px'} className="ml-[20px]" />
        </div>
        <div className='w-full  lg:bg-transparent bg-green  lg:px-0 px-[20px] xl:text-left  xl:justify-start  lg:text-left lg:justify-start text-center lg:h-0  flex items-center m-auto 2xl:justify-start  justify-center lg:text-black  text-white text-[32px] font-[700] leading-[36px] '>
          <Skeleton count={3} />
         
        </div>
        <Skeleton  count={3} />
     

        <div className='mb-[48px] w-full h-[348px] lg:px-0 px-[15px]'>

          <Skeleton height={'100%'} width={'100%'} />
        </div>
        <div className="mb-[8px] lg:px-0 px-[15px]">
          <Skeleton count={2} />
         
        </div>
        <div className="mb-[48px] lg:px-0 px-[15px]">
          <Skeleton count={2} />
          
        </div>
        <div className='mb-[48px] w-full h-[348px] lg:px-0 px-[15px]'>
          <Skeleton height={'100%'} width={'100%'} />
        </div>
        <div className="mb-[32px] lg:px-0 px-[15px]">
          <Skeleton count={4} />
         
        </div>
        <div className="mb-[32px] lg:px-0 px-[15px]">
          <Skeleton count={2} />
          
        </div>
        <div className="mb-[84px] lg:px-0 px-[15px]">
          <Skeleton count={2} />
          
        </div>
      </div>
      <div className="flex-1 mt-[77px] lg:px-0 px-[15px]">
        <RelatedJobsSkeleton />
        <RelatedJobsSkeleton />

      </div>
    </div>
  )
}
