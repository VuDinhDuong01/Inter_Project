import { Link } from 'react-router-dom'

import { Images } from '~/utils/images/Images' 
import { NewsType } from '~/types/News.type'
import { getPathNewDetail } from '~/utils/utils' 

export const ItemNews = ({ dataNew, isShow }: { dataNew: NewsType, isShow: boolean }) => {
  return (
    <Link to={`/${getPathNewDetail(dataNew.content, dataNew.id)}`}>
      <div className={`col-span-1 flex-col flex shadow-xxl rounded-[16px] h-[360px] border relative ${isShow ? '2xl:mb-[32px] w-full mb-[20px]' : 'mb-[44px] my-auto mx-[16px]'}`}   >
        <img src={dataNew.image} alt="" className='w-full h-[165px] shrink-0 object-cover rounded-[16px]' />
        <div className='flex-1 flex flex-col'>
          <div >
            <div className="w-full flex items-center justify-between px-[15px] pt-[8px]">
              <div className='flex items-center'>
                <img src={Images.UserImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px] ' />
                <h4 className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
              </div>
              <div className='flex items-center'>
                <img src={Images.DateImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px]' />
                <h4 className='text-black font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
              </div>
            </div>
            <h3 className="text-black font-FontSan text-[20px] font-[700] leading-[28px] px-[12px] pb-[5px] pt-[10px] line-clamp-2">{dataNew.content}</h3>
          </div>
          <div className='text-[#929292] mb-[16px]  font-FontSan text-[16px] font-[500] leading-[24px] px-[12px]  line-clamp-3 mt-auto'>{dataNew.description}</div>
        </div>
      </div>
    </Link>
  )
}
