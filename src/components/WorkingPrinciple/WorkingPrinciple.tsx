import { DataWorkingPrinciple } from "../../api/Data"
import { useTranslation } from "react-i18next";

import { Images } from "../../utils/images/Images";

export const WorkingPrinciple = () => {

    const { t, i18n } = useTranslation()
    return (
        <div className='lg:px-[120px] lg:mt-[113px] lg:mb-[113px] lg:bg-transparent bg-[#FFF8E8] lg:pb-0  pb-[50px]'>
            <h2 className='text-black lg:pt-0 pt-[50px]  lg:mb-[36px] mb-[40px] font-FontSan text-[24px] font-[700] leading-[28px] flex items-center justify-center'>{t('HomePage.wORKINGRELATIONSHIP')}</h2>
            <div className='w-full grid  lg:grid-cols-3 grid-cols-1 lg:gap-[34px]  '>
                {
                    DataWorkingPrinciple.map((item, index) => {
                        return <div key={index}><div className="col-span-1  lg:flex hidden w-full  lg:flex-col items-center rounded-[18px] lg:h-[294px] lg:shadow-xxl" >
                            <div className='w-[100px] h-[100px]  relative mb-[12px] lg:flex hidden '>
                                <img src={Images.Cilcel} alt="" className='w-full h-full object-cover' />
                                <img src={item.img} alt="" className='top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute w-[51px] h-[51px] shrink-0 object-cover' />
                            </div>
                            <h3 className='text-black  text-center font-FontSan text-[20px] font-[700] leading-[28px]'>{item.title}</h3>
                            <p className='text-[#444]  lg:h-[110px] lg:w-[336px] mb-[17px] text-center font-FontSan text-[16px] font-[500] leading-[24px] px-[20px]'>{i18n.language === 'en' ? t(`HomePage.${item.description}`) : item.description}</p>
                        </div>
                            <div className='lg:hidden flex lg:px-0 px-[15px] lg:py-0 py-[10px]'>
                                <h3 className='font-FontSan text-[16px] font-[500] leading-[24px]'>
                                    <strong className='text-[18px]'>{item.title}</strong> : {item.description}
                                </h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
