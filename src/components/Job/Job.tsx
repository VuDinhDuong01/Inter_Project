import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

import { JobType } from "~/types/Job.type"; 
import { getPathNewDetail } from "~/utils/utils"; 
import { Button } from "../Button/Button"; 
import { Icons } from "~/contants/Icon"; 

export const Job = ({ job }: { job: JobType }) => {
  const { t } = useTranslation()
  return (
    <div className=" lg:h-[96px] lg:mx-0 mx-[10px] items-center rounded-[5px] bg-[#EEE] flex justify-between mb-[22px]">
      <div className="px-[11px] py-[9px]">
        <h3 className="text-black font-FontSan lg:text-[20px] text-[16px] font-[700] ">{job.title}</h3>
        <p className='text-black font-FontSan lg:text-[16px] text-[14px] lg:line-clamp-none  line-clamp-1'>{job.description}</p>
        <div className='flex items-center'>
          <div className='flex items-center lg:mr-[18px] mr-[6px]'>
            <Icons.BsCurrencyDollar className='text-grey font-FontSan text-[13px] font-[900] lg:mr-[6px] mr-[1px] ' />
            <p className='text-grey font-FontSan text-[10px] sm:text-[14px] leading-[28px]'>{t('jobOpportunity.agree')}</p>
          </div>
          <div className='flex items-center lg:mr-[18px] mr-[6px]'>
            <Icons.BiMap className='text-grey font-FontSan text-[14px] font-[900] lg:mr-[6px] mr-[1px]' />
            <p className='text-grey font-FontSan text-[10px] sm:text-[14px] leading-[28px]'>{job.address}</p>
          </div>

          <div className='flex items-center lg:mr-[18px]'>
            <Icons.AiOutlineClockCircle className='text-grey font-FontSan text-[14px] font-[900] lg:mr-[6px] mr-[1px]' />
            <p className='text-grey font-FontSan text-[10px] sm:text-[14px] leading-[28px]'>24/02/2002</p>
          </div>

        </div>
      </div>
      <Link to={`/co-hoi-viec-lam/${getPathNewDetail(job.title, job.id)}`}>
        <Button className='custom-class-button-recruitment'>{t('jobOpportunity.recruitment')}</Button>
      </Link>
    </div>
  )
}
