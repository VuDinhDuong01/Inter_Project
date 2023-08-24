import { useTranslation } from "react-i18next";

import { Slick } from "../slick";
import { Images } from "~/utils/images/Images";
import { DataService } from "~/api/Data";
import { Button } from "../Button/Button";

export const ServicePack = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className="lg:mb-[164px] 2xl:mb-[120px] 2xl:max-w-[1232px] 2xl:m-auto  lg:px-[108px] 2xl:px-0 lg:bg-transparent bg-[#FFFCF0] lg:py-0 py-[50px] ">
            <h2 className=' flex items-center justify-center text-black font-FontSan text-[24px] font-[700] leading-[28px] pb-[34px]'>{t('HomePage.servicePack')}</h2>
            <div className='w-full'>
                <Slick slidesToShow={3}>{DataService.map((item, index) => {

                    return <div key={index} className='mb-[44px]'>
                        <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className={` ${item.title === 'Chuyên nghiệp' || item.title === 'Tổ chức' ? 'bg-[#F1F1F1]' : 'bg-white'} mx-[16px]  rounded-[20px] h-[424px] sm:h-[440px]   px-[24px]`}>
                            <h4 className="text-black font-FontSan text-[24px] font-[700] leading-[28px] pt-[24px] pb-[4px]">{i18n.language === 'en' ? t(`HomePage.${item.title}`) : item.title}</h4>
                            <p className='text-[#7A7A7A] font-FontSan line-clamp-1 text-[16px] font-[500] leading-[24px] pb-[32px]'>{i18n.language === 'en' ? t(`HomePage.${item.description}`) : item.description}</p>
                            <div className="w-full flex items-center justify-center">
                                <Button className={`flex rounded-[16px] lg:w-[275px] 2xl:w-[270px] w-[200px] h-[48px] text-center justify-center items-center text-white font-FontSan text-[24px] font-[600] mb-[37px]  ${item.title === 'Chuyên nghiệp' || item.title === 'Tổ chức' ? 'bg-[#7A7A7A]' : 'bg-green'}   m-auto`}>{t('HomePage.begin')}</Button>
                            </div>
                            <div className='flex items-center   gap-[12px] sm:mb-[20px] mb-[12px]'>
                                <img src={Images.CheckImage} alt="" className='sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] object-cover' />
                                <h5 className='text-black font-FontSan sm:text-[16px] lg:text-[14px]  text-[14px]  font-[500] leading-[24px]'>{i18n.language === 'en' ? t(`HomePage.${item.content1}`) : item.content1}</h5>
                            </div>

                            <div className='flex items-center   gap-[12px] sm:mb-[20px] mb-[12px]'>
                                <img src={Images.CheckImage} alt="" className='sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] object-cover' />
                                <h5 className='text-black font-FontSan sm:text-[16px] lg:text-[15px]  text-[14px]   font-[500] leading-[24px]'>{i18n.language === 'en' ? t(`HomePage.${item.content2}`) : item.content2}</h5>
                            </div>
                            <div className='flex items-center   gap-[12px] sm:mb-[20px] mb-[12px]'>
                                <img src={Images.CheckImage} alt="" className='sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] object-cover' />
                                <h5 className='text-black font-FontSan sm:text-[16px]  lg:text-[15px] text-[14px] font-[500] leading-[24px]'>{i18n.language === 'en' ? t(`HomePage.${item.content3}`) : item.content3}</h5>
                            </div>
                            <div className='flex items-center   gap-[12px] sm:mb-[20px] mb-[15px]'>
                                <img src={Images.CheckImage} alt="" className='sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] object-cover' />
                                <h5 className='text-black font-FontSan sm:text-[16px] lg:text-[15px]  text-[14px] font-[500] leading-[24px]'>{i18n.language === 'en' ? t(`HomePage.${item.content4}`) : item.content4}</h5>
                            </div>
                            <div className='flex items-center  gap-[12px] mb-[12px] sm:mb-[20px]'>
                                <img src={Images.CheckImage} alt="" className='sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] object-cover' />
                                <h5 className='text-black font-FontSan sm:text-[16px] lg:text-[15px] text-[14px] font-[500] leading-[24px]'>{i18n.language === 'en' ? t(`HomePage.${item.content5}`) : item.content5}</h5>
                            </div>
                        </div>
                    </div>
                })}</Slick>
            </div>
        </div >
    )
}

