import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTranslation } from "react-i18next";

export const NewLoading = () => {
    const { t } = useTranslation()
    return (
        <div className="xl:mt-[170px] xl:max-w-[1200px]  xl:pb-[101px]  xl:m-auto   xl:px-0  px-[16px] lg:px-[32px]">
            <h4 className="text-[#606060] mb-[25px] font-FontSan xl:text-[20px] text-[25px] font-[700] leading-[28px]">{t('NewsPage.news')}</h4>
            <div className='xl:gap-[29px]  xl:flex xl:h-[563px]'>
                <div className='xl:w-[687px] xl:h-[563px]  relative  xl:mb-0 mb-[20px] xl-0  w-full object-cover' >
                    <Skeleton width={'100%'} height={'100%'} />
                </div>
                <div className='flex-1 w-full xl:mb-[50px] mb-[20px]' >
                    <div className=' xl:mb-[46px] mb-[20px]  w-full' >
                        <Skeleton width={'100%'} height={'256px'} />
                    </div>
                    <div className='w-full'>
                        <Skeleton width={'100%'} height={'256px'} />
                    </div>
                </div> 
            </div> 
        </div>
    )
}
