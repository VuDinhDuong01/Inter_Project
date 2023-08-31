import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import clsx from 'clsx'

import styles from '~/customestyle.module.css'
export const NewsSkeleton = () => {
    return (
        <div className={clsx(styles.boxShadow,{
          ["rounded-[16px] h-[360px] xl:mb-[14px] mb-[20px]"]:true,
        })} >
          <Skeleton className='w-full h-[165px] shrink-0 rounded-[16px]' />
          <div className='flex w-full justify-between' >
            <div className='flex items-center'>
              <Skeleton className='items-center mr-[10px]' height={30} width={50} />
              <Skeleton className='' height={20} width={50} />
            </div>
            <div className='flex items-center'>
              <Skeleton height={20} width={50} className='ml-[10px]' />
              <Skeleton height={30} width={50} className='ml-[10px]' />
            </div>
          </div>
          <Skeleton count={5} />
        
          <Skeleton className='h-[30px]' />
        </div>
      )
}
