import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";

import { getPathNewDetail } from '../../utils/utils'
import { RootState } from '../../stores/store'
import { Icons } from '../../contants/Icon';
import { JobType } from '../../types/Job.type';

export const SimilarJob = () => {
    const jobsData = useSelector((state: RootState) => state.jobs.jobsData)
    const { t } = useTranslation()

    return (
        <div className='lg:px-[23px] cursor-pointer '>
            {
                jobsData?.data?.slice(0, 3).map((job:JobType, index:number) => {
                    return <div className="px-[11px] py-[9px]" key={index}>
                        <Link to={`/co-hoi-viec-lam/${getPathNewDetail(job.title, job.id)}`}><h3 className="text-black font-FontSan text-[20px] font-[700] hover:text-[#008345]">{job.title}</h3></Link>
                        <p className='text-black font-FontSan text-[16px] font-[400]'>{job.description}</p>
                        <div className='flex items-center'>
                            <div className='flex items-center lg:mr-[18px]'>
                                <Icons.BsCurrencyDollar className='text-grey font-FontSan text-[14px] font-[900] mr-[6px]' />
                                <p className='text-grey font-FontSan text-[14px] leading-[28px]'>{t('jobOpportunity.agree')}</p>
                            </div>
                            <div className='flex items-center mr-[18px]'>
                                <Icons.BiMap className='text-grey font-FontSan text-[14px] font-[900] mr-[6px]' />
                                <p className='text-grey font-FontSan text-[14px] leading-[28px]'>{job.address}</p>
                            </div>
                            <div className='flex items-center mr-[18px]'>
                                <Icons.AiOutlineClockCircle className='text-grey font-FontSan text-[14px] font-[900] mr-[6px]' />
                                <p className='text-grey font-FontSan text-[14px] leading-[28px]'>24/02/2002</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
