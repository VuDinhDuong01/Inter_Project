
import { useTranslation } from "react-i18next";
import clsx  from 'clsx';
import {useQuery,} from '@tanstack/react-query'


import { NewsType } from '~/types/News.type'
import { Images } from '~/utils/images/Images'
import styles from '~/customestyle.module.css'
import { QueryType } from "~/types";
import { getNews } from "~/stores/NewApi";
import { useQuery as Query } from "~/hook/useQuery";
export const RelatedJobs = ({ start, end }: { start: number, end: number }) => {
    const { t } = useTranslation()
    const query: QueryType = Query()
    const {data:newsData} = useQuery({
      queryKey: ['relateJobs',query ],
      queryFn: () => getNews(query),
    })
    return (
        <div className='mb-[48px]'>
            <h3 className="text-black font-FontSan text-[20px] font-[700] leading-[28px] mb-[12px]">{t('NewPageDetail.news')}</h3>
            {
                newsData && newsData.data.slice(start, end).map((item: NewsType, index: number) => {
                    return <div key={index}  className={clsx(styles.boxShadow,{
                        ["flex w-full items-center shadow-sm rounded-[12px] mb-[20px]"]:true
                    })}>
                        <div className='w-[140px] 2xl:w-[110px] 2xl:h-[90px] rounded-l-[12px] max-w-none'>
                            <img src={item?.image} alt="" className="w-[140px] 2xl:w-[110px]  h-[90px] max-w-none object-cover rounded-l-[12px]" />
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
