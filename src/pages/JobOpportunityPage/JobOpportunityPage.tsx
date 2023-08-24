/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import omit from 'lodash/omit'

import { Banner } from '~/components/Banner/Banner'; 
import { Filter } from '~/components/Filter/Filter'; 
import { Job } from '~/components/Job/Job'; 
import { useAppDispatch } from '~/stores/store'; 
import { RootState } from '~/stores/store'; 
import { fetchJobs } from '~/stores/JobApi'; 
import { Pagination } from '~/components/pagination/Pagination'; 
import { useQuery } from '~/hook/useQuery';
import { Path } from '~/contants/Path'
import { QueryType } from '~/types/query.type'; 
import { JobType } from '~/types/Job.type'; 
import { Images } from '~/utils/images/Images'; 

const JobOpportunity = () => {
  const [checkedRadioGroup, setCheckedRadioGroup] = useState<string>('6')
  const [checkedRadioType, setCheckedRadioType] = useState<string>('1')
  const [checkedRadioLocation, setCheckedRadioLocation] = useState<string>('1')
  const [searchJob, setSearchJob] = useState<string>('')

  const { t } = useTranslation()
  const navigate = useNavigate()
  const query: QueryType = useQuery()
  const dispatch = useAppDispatch()

  const { jobsData } = useSelector((state: RootState) => state.jobs)

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    navigate({
      pathname: Path.jobOpportunity,
      search: createSearchParams(omit({
        ...query,
        name: searchJob,
        page:'1'
      }, ['location', 'group', 'type'])).toString()
    })
    setSearchJob('')
    setCheckedRadioGroup('6')
    setCheckedRadioType('1')
    setCheckedRadioLocation('1')
  }

  const handleBack = () => {
    navigate(Path.jobOpportunity)
  }

  useEffect(() => {
    dispatch(fetchJobs(query));
  }, [query.page, query?.name])

  return (
    <div>
      <Banner Image1={Images.Image26} Image2={Images.Image24} width1={225} height1={173} height2={285} width2={285} marginTop1={95} marginTop2={34} content={t('banner.titleBannerJobOpportunity')} description={t('banner.descriptionBannerJobOpportunity')} />
      <div className="xl:px-[120px] 2xl:max-w-[1200px] 2xl:m-auto lg:px-[100px]">
        <div>
          <h2 className="text-black mb-[40px]  flex items-center justify-center font-FontSan xl:text-[24px] text-[22px]  font-[700] leading-[28px]">{t('jobOpportunity.JobOpportunity')}</h2> 
          <div className='relative mb-[53px]'>
            <form action=" " className='' onSubmit={handleSubmitSearch}>
              <input type="text" 
              placeholder={t('Input.job')}
              value={searchJob} 
              onChange={(e) => setSearchJob(e.target.value)} 
              className=' xl:w-full lg:w-full w-[95%] flex items-center justify-center m-auto pl-[12px] pr-[110px] h-[48px] rounded-[12px] bg-white border border-solid border-web-1 border-green font-FontSan text-[16px] font-[500]  leading-[24px] ' />
              <button className='custom-class-button-findJob'>{t('jobOpportunity.findAJob')}</button>
            </form>
          </div>
        </div>

        <div className='w-full lg:gap-[32px] mt-[53px] lg:flex  '>
          <div className='lg:w-[276px] w-full lg:px-0 px-[15px] mb-[100px]'>
            <Filter
              checkedRadioGroup={checkedRadioGroup}
              setCheckedRadioGroup={setCheckedRadioGroup}
              checkedRadioType={checkedRadioType}
              setCheckedRadioType={setCheckedRadioType}
              checkedRadioLocation={checkedRadioLocation}
              setCheckedRadioLocation={setCheckedRadioLocation}
            />
          </div>
          <div className='lg:flex-1 lg:mt-0 mt-[-60px] w-full'>
            {
              jobsData?.data?.map((job: JobType, index: number) => {
                return <Job key={index} job={job} />
              })
            }
            {jobsData?.data?.length > 0 ?
              <div className='lg:mt-[73px] lg:mb-[87px] my-[50px]'> <Pagination page_size={jobsData?.totalPages} query={query} path={Path.jobOpportunity} /></div>
              : <div className=' lg:h-[300px]  h-[200px]  lg:mx-0 mx-[15px] mb-[50px] rounded-md bg-green flex flex-col items-center justify-center'>
                <span className='lg:text-[25px] text-[23px] font-FontSan text-white py-3'>{t('jobOpportunity.notJob')}</span>
                <button className='px-4 py-3 rounded-md text-white font-FontSan bg-[#7d7091] ' onClick={handleBack}>{t('jobOpportunity.comeback')}</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobOpportunity
