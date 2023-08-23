import { useSelector } from 'react-redux'

import { RootState } from '~/stores/store'
import { NewsType } from '~/types/News.type'
import { Images } from '~/utils/images/Images'

export const RelatedJobs = ({ start, end }: { start: number, end: number }) => {

    const { newsData } = useSelector((state: RootState) => state.news)
    return (
        <div className='mb-[48px]'>
            <h3 className="text-black font-FontSan text-[20px] font-[700] leading-[28px] mb-[12px]">Tin tức mới</h3>
            {
                newsData.data.slice(start, end).map((item: NewsType, index: number) => {
                    return <div key={index} style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="flex w-full items-center shadow-sm rounded-[12px] mb-[20px]">
                        <div className='2xl:w-[191px] h-[90px] rounded-l-[12px] max-w-none'>
                            <img src={item?.image} alt="" className="2xl:w-[191px] h-[90px] max-w-none object-cover rounded-l-[12px]" />
                        </div>

                        <div className="w-full md:justify-center">
                            <p className="px-[12px]  line-clamp-2 font-FontSan text-[16px] font-500 leading-[18px]">{item?.content}</p>
                            <div className="w-full flex items-center justify-between  px-[15px] pt-[6px] ">
                                <div className='flex items-center'>
                                    <img src={Images.UserImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px] ' />
                                    <h4 className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
                                </div>
                                <div className='flex items-center '>
                                    <img src={Images.DateImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px]' />
                                    <h4 className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
