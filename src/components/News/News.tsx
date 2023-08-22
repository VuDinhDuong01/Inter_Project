import { useTranslation } from "react-i18next";

import { Images } from "../../utils/images/Images";
import { Button } from "../Button/Button";


export const News = () => {
  const { t } = useTranslation()
  return (
    <div className="xl:mt-[120px] xl:px-[120px] xl:mb-[120px] px-[16px] lg:px-[32px]">
      <h4 className="text-[#606060] mb-[25px] font-FontSan xl:text-[20px] text-[25px] font-[700] leading-[28px]">{t('NewsPage.news')}</h4>
      <div className='xl:gap-[29px] xl:flex xl:h-[563px]'>
        <div className='xl:w-[687px]  relative xl:h-[563px] xl:mb-0 mb-[20px]  w-full object-cover' >
          <img src={Images.Anh10Image} alt="" className='w-full xl:h-[543px] h-[500px] object-cover rounded-[20px]' />
          <div className='bottom-[24px] absolute xl:left-[24px] left-[10px]  right-[10px]'>
            <button className='inline-flex mb-[8px] px-[6px] py-[12px] justify-center items-center gap-[8px] rounded-[8px] bg-[#FD4848] text-white text-center font-FontSan xl:text-[20px] font-[700] learning-[28px]'>{t('NewsPage.SoftwareDevelopment')}</button>
            <h3 className='text-white xl:w-[639px] mt-[8px] font-FontSan xl:mb-0 mb-[10px] xl:text-[24px] text-[20px] xl:font-[700] font-[600] learning-[28px]'>{t('NewsPage.description1')}</h3>
            <div className="w-full flex xl:mb-[24px]  items-center xl:gap-[75px] justify-between xl:mr-0 mr-[25px]">
              <div className='flex items-center'>
                <img src={Images.UserImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px] fill-white  ' />
                <h4 className='text-white font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
              </div>
              <div className='flex items-center'>
                <img src={Images.DateImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px]' />
                <h4 className='text-white font-FontSan text-[16px] font-[500] leading-[24px]'>May 4th 2023</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 w-full xl:mb-[50px] mb-[20px]' >
          <div className='relative xl:mb-[31px] mb-[20px]  w-full' >
            <img src={Images.Anh11Image} alt="" className='w-full h-[256px]' />
            <div className='bottom-0 absolute xl:left-[24px] left-[10px] right-[10px]'>
              <button className='inline-flex mb-[8px] px-[6px] py-[12px] justify-center items-center gap-[8px] rounded-[8px] bg-[#FD4848] text-white text-center font-FontSan xl:text-[20px] font-[700] learning-[28px]'>BLOCKCHAIN</button>
              <h3 className='text-white xl:w-[ 436px] mt-[8px] font-FontSan xl:text-[24px] text-[20px] font-[700] learning-[28px]'>{t('NewsPage.Blockchain')}</h3>
              <div className="w-full flex xl:mb-[24px] mb-[15px] xl:mt-0 mt-[5px] items-center xl:gap-[75px] justify-between  xl:mr-0 pr-[15px]  ">
                <div className='flex items-center'>
                  <img src={Images.UserImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px] fill-white  ' />
                  <h4 className='text-white font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
                </div>
                <div className='flex items-center'>
                  <img src={Images.DateImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px]' />
                  <h4 className='text-white font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full'>
            <img src={Images.Anh12Image} alt="" className='w-full h-[256px]' />
            <div className='bottom-0 absolute lg:left-[24px] left-[10px] right-[10px]'>
              <Button className='inline-flex mb-[8px] px-[6px] py-[12px] justify-center items-center gap-[8px rounded-[8px] bg-[#FD4848] text-white text-center font-FontSan lg:text-[20px] font-[700] learning-[28px]'>GAME NFT</Button>
              <h3 className='text-white lg:w-[ 436px] mt-[8px] font-FontSan lg:text-[24px] text-[20px] font-[700] learning-[28px]'>{t('NewsPage.Nft')}</h3>
              <div className="w-full flex lg:mb-[24px] mb-[15px] lg:mt-0 mt-[5px] items-center lg:gap-[75px]   justify-between  lg:mr-0 pr-[15px]  ">
                <div className='flex items-center '>
                  <img src={Images.UserImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px] fill-white  ' />
                  <h4 className='text-white font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
                </div>
                <div className='flex items-center'>
                  <img src={Images.DateImage} alt="" className='w-[14px] h-[16px] object-cover mr-[8px]' />
                  <h4 className='text-white font-FontSan text-[16px] font-[500] leading-[24px]'>Le Linh</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
