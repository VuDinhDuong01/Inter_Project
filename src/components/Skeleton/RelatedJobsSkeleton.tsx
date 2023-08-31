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
                        <div className='w-[140px] xl:w-[110px] xl:h-[90px] rounded-l-[12px] max-w-none'>
                            <Skeleton width={'140px'} height={'80px'} />

                        </div>
                        <div className="w-full flex flex-col justify-center xl:pl-[40px] xl:pr-[10px] px-[15px] xl:px-0" >
                            <Skeleton className="w-full" count={2} />
                        </div>
                    </div>
                })
            }
        </div>
    )
}
