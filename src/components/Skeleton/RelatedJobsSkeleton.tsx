import { useTranslation } from "react-i18next";
import range from 'lodash/range'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import clsx from "clsx";

import styles from '~/customestyle.module.css'
export const RelatedJobsSkeleton = () => {
    const { t } = useTranslation()
    return (
        <div className='mb-[48px]'>
            <h3 className="text-black font-FontSan text-[20px] font-[700] leading-[28px] mb-[12px]">{t('NewPageDetail.news')}</h3>
            {
                range(2).map((_, index: number) => {
                    return <div key={index} className={clsx(styles.boxShadow, {
                        ["flex w-full items-center shadow-sm rounded-[12px] mb-[20px]"]: true
                    })}>
                        <div className='w-[140px] 2xl:w-[110px] 2xl:h-[90px] rounded-l-[12px] max-w-none'>
                             <Skeleton width={'140px'} height={'80px'} /> 

                        </div>
                        <div className="w-full xl:w-full md:justify-center">
                            <div className="w-full items-center justify-center flex ml-[8px]"><Skeleton width={'215px'} height={'30px'} className="" /> </div>
                            <div className="w-full flex items-center justify-between  px-[15px] pt-[6px] ">
                                <div className='flex items-center ml-[20px]'>

                                    <Skeleton width={'40px'} height={'16px'} />
                                    <Skeleton />
                                </div>
                                <div className='flex items-center '>
                                    <Skeleton width={'40px'} height={'16px'} />
                                    <Skeleton />

                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
