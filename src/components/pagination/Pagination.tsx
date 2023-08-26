import range from 'lodash/range'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import { Images } from '~/utils/images/Images'
import { QueryType } from '~/types/query.type'
import { Button } from '../Button/Button'

interface PaginationType {
    page_size: number,
    query: QueryType,
    path: string
}

const RANGE = 2
export const Pagination = ({ page_size, query, path }: PaginationType) => {
    const navigate = useNavigate()
    let isShow1 = true;
    let isShow2 = true

    const currentPage = Number(query.page)
    const BeforeDots = () => {
        if (isShow1) {
            isShow1 = false;
            return <div className='flex items-center gap-1 mr-[12px]'>
                <div className='custom-class-dot'></div>
                <div className='custom-class-dot'></div>
                <div className='custom-class-dot'></div>
            </div>
        }
        return isShow1

    }
    const AfterDots = () => {
        if (isShow2) {
            isShow2 = false
            return <div className='flex items-center gap-1 mr-[12px] '>
                <div className='custom-class-dot'></div>
                <div className='custom-class-dot'></div>
                <div className='custom-class-dot'></div>
            </div>
        }
        return isShow2
    }
    const Pagination = () => {
        return range(page_size).map((item, index) => {
            const numberIndex = item + 1;
            if (currentPage <= 2 * RANGE && numberIndex > currentPage + RANGE && numberIndex <= page_size - RANGE + 1) {
                return <div key={index}>{BeforeDots()}</div>
            } else if (currentPage > 2 * RANGE && currentPage < page_size - 2 * RANGE + 1) {
                if (numberIndex > RANGE - 1 && numberIndex < currentPage - RANGE) {
                    return <div key={index}>{BeforeDots()}</div>
                } else if (numberIndex > currentPage + RANGE && numberIndex <= page_size - RANGE + 1) {
                    return <div key={index}>{AfterDots()}</div>
                }
            } else if (currentPage > page_size - RANGE * 2 && numberIndex > RANGE - 1 && numberIndex < currentPage - RANGE) {
                return <div key={index}>{AfterDots()}</div>
            }
            return <Link to={{
                pathname: path,
                search: createSearchParams({
                    ...query,
                    page: numberIndex.toString()
                }).toString()
            }} key={index} >
                <Button className={`flex w-[33px] h-[40px] mr-[12px] flex-col justify-center items-center pt-[6px] pr-[10px] pb-[6px] pl-[11px] rounded-[8px] ${Number(query.page) === numberIndex ? `bg-green` : `bg-[#7A7A7A]`}   text-white font-FontSan text-[20px] font-[700] leading-[28px]`}>
                    {numberIndex}
                </Button>
            </Link>
        })
    }

    const handleRightPagination = () => {
        if (currentPage === page_size) return
        navigate({
            pathname: path,
            search: createSearchParams({
                ...query,
                page: (currentPage + 1).toString()
            }).toString()
        })
    }

    const handleLeftPagination = () => {
        if (currentPage === 1) return
        navigate({
            pathname: path,
            search: createSearchParams({
                ...query,
                page: (currentPage - 1).toString()
            }).toString()
        })
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className=' flex items-center  justify-center'>
                <img src={Images.LeftImage} alt="left" className={`${clsx({
                    ['cursor-not-allowed']: currentPage === 1,
                    ['cursor-pointer']: currentPage !== 1,
                    ['w-[24px] h-[24px] bg-white mr-[4px] flex items-center justify-center object-cover']: true
                })}`} onClick={handleLeftPagination} />
                <div className='w-full items-center justify-center flex'>{Pagination()}</div>
                <img src={Images.RightImage} alt="right" className={`${clsx({
                    ['cursor-not-allowed']: currentPage === page_size,
                    ['cursor-pointer']: currentPage !== page_size,
                    ['w-[24px] h-[24px] bg-white mr-[4px] flex items-center justify-center object-cover']: true
                })}`} onClick={handleRightPagination} />
            </div>
        </div>
    )
}
