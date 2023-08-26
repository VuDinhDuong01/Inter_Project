import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from "react-i18next";

import { getId } from '~/utils/utils'
import { RootState, useAppDispatch, fetchNewsDetail } from '~/stores/index'
import { RelatedJobs } from '~/components/RelatedJobs/RelatedJobs'

const NewDetailPage = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const idNew = getId(id as string)

    const { newDataDetail } = useSelector((state: RootState) => state.news)

    useEffect(() => {
        dispatch(fetchNewsDetail(idNew))
    }, [idNew, dispatch])

    return (
        <div className="xl:flex xl:gap-[32px] lg:px-[30px] xl:px-0  xl:max-w-[1200px] xl:m-auto">
            <div className="xl:mt-[24px]  xl:w-[789px] w-full">
                <div className='items-center mb-[50px] lg:flex hidden xl:mb-[24px]'>
                    <p className="text-green  cursor-pointer font-FontSan text-[16px] font-[500] leading-[24px]">{t('NewPageDetail.News/')}</p>
                    <p className='text-green  cursor-pointer font-FontSan text-[16px] font-[500] leading-[24px]'>{t('NewPageDetail.Software Development')}</p>
                    <p className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>{newDataDetail?.content}</p>
                </div>

                <div className='w-full  lg:bg-transparent bg-green  lg:px-0 px-[20px] xl:text-left  xl:justify-start  lg:text-left lg:justify-start text-center lg:h-0 h-[300px] flex items-center m-auto 2xl:justify-start  justify-center lg:text-black  text-white text-[32px] font-[700] leading-[36px] lg:mb-[64px] xl:mb-[40px]'>
                    {newDataDetail?.content}
                </div>

                <p className="text-black font-FontSan lg:px-0 px-[15px] lg:mt-0 mt-[20px] text-[16px] font-[500] leading-[24px] mb-[48px] 2xl:mb-[48px] 2xl:mt-[-27px]">{newDataDetail?.description}</p>
                <div className='mb-[48px] w-full h-[348px] lg:px-0 px-[15px]'>
                    <img src={newDataDetail?.image} alt="" className=' rounded-[20px] w-full h-full object-cover' />
                </div>
                <div className="mb-[8px] lg:px-0 px-[15px]">
                    <h2 className='mb-[8px] text-black font-FontSan text-[20px] font-[700] leading-[28px]'>{t('NewPageDetail.What is digital transformation in banking?')}</h2>
                    <p className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>{newDataDetail?.detail?.detailOne}</p>
                </div>
                <div className="mb-[48px] lg:px-0 px-[15px]">
                    <h2 className='mb-[8px] text-black font-FontSan text-[20px] font-[700] leading-[28px]'>{t('NewPageDetail.What is digital transformation in banking?')}</h2>
                    <p className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>Ngân hàng chuyển đổi số mang lại nhiều lợi ích cho cả ngân hàng và khách hàng. Dưới đây là một số lợi thế tốt nhất của nó:</p>
                </div>
                <div className='mb-[48px] w-full h-[348px] lg:px-0 px-[15px]'>
                    <img src={newDataDetail?.image} alt="" className='w-full h-full object-cover rounded-[20px]' />
                </div>
                <div className="mb-[32px] lg:px-0 px-[15px]">
                    <h2 className='mb-[8px] text-black font-FontSan text-[20px] font-[700] leading-[28px]'>{t('NewPageDetail.The benefits of digitization in the banking industry')}</h2>
                    <p className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>{newDataDetail?.detail?.detailTwo}</p>
                </div>
                <div className="mb-[32px] lg:px-0 px-[15px]">
                    <h2 className='mb-[8px] text-black font-FontSan text-[20px] font-[700] leading-[28px]'>{t('NewPageDetail.The benefits of digitization in the banking industry')}</h2>
                    <p className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>{newDataDetail?.detail?.detailThree}</p>
                </div>
                <div className="mb-[84px] lg:px-0 px-[15px]">
                    <h2 className='mb-[8px] text-black font-FontSan text-[20px] font-[700] leading-[28px]'>{t('NewPageDetail.The benefits of digitization in the banking industry')}</h2>
                    <p className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>Ngân hàng chuyển đổi số mang lại nhiều lợi ích cho cả ngân hàng và khách hàng. Dưới đây là một số lợi thế tốt nhất của nó:</p>
                </div>
            </div>
            <div className="flex-1 mt-[77px] lg:px-0 px-[15px]">
                <RelatedJobs start={2} end={5} />
                <RelatedJobs start={3} end={5} />
            </div>
        </div>
    )
}

export default NewDetailPage
