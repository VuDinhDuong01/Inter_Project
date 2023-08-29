import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useTranslation } from "react-i18next";
export const JobDetailSkeleton = () => {
    const { t } = useTranslation()
    return (
        <div className='lg:w-[745px] xl:mt-[86px] xl:pt-[-35xp]  w-full lg:px-0 px-[15px]'>
            <Skeleton count={3} />
            <div className='flex items-center mb-[11px]'>
                <div className='flex items-center mr-[18px]'>
                    <Skeleton />
                </div>
                <div className='flex items-center mr-[18px]'>
                    <Skeleton count={3} />
                </div>
            </div>

            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.Jobdescription')}</h2>
                <ul>
                    <Skeleton count={7} />
                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.CandidateRequirements')}</h2>
                <ul>
                    <Skeleton count={6} />
                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.Right')}</h2>
                <ul>
                    <Skeleton count={6} />
                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.Worklocation')}</h2>

                <ul>
                    <Skeleton count={3} />
                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.ContactInfo')}</h2>
                <ul>
                    <Skeleton count={3} />
                </ul>
            </div>
        </div>

    )
}
