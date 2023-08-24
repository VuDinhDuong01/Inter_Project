 import { useTranslation } from "react-i18next";
 
 import { DataWorkingPrinciple } from "~/api/Data";
import { Images } from "~/utils/images/Images"; 

export const WorkingPrinciple = () => {
    const { t, i18n } = useTranslation()
    
    return (
        <div className='xl:px-[120px] 2xl:px-0 2xl:max-w-[1200px] 2xl:max-h-[1200px] 2xl:m-auto  xl:mt-[113px] xl:mb-[113px] xl:bg-transparent bg-[#FFF8E8] xl:pb-0  pb-[50px]'>
            <h2 className='text-black xl:pt-0 pt-[50px] first-letter:  xl:mb-[36px] mb-[40px] font-FontSan text-[24px] lg:text-[30px] font-[700] leading-[28px] flex items-center justify-center'>{t('HomePage.wORKINGRELATIONSHIP')}</h2>
            <div className='w-full grid  xl:grid-cols-3 grid-cols-1 xl:gap-[34px]  '>
                {
                    DataWorkingPrinciple.map((item, index) => {
                        return <div key={index}><div className="col-span-1  xl:flex hidden w-full  xl:flex-col items-center rounded-[18px] xl:h-[294px] xl:shadow-xxl" >
                            <div className='w-[100px] h-[100px]  relative mb-[12px] xl:flex hidden '>
                                <img src={Images.Cilcel} alt="" className='w-full h-full object-cover' />
                                <img src={item.img} alt="" className='top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute w-[51px] h-[51px] shrink-0 object-cover' />
                            </div>
                            <h3 className='text-black  text-center font-FontSan text-[20px] font-[700] leading-[28px]'>{item.title}</h3>
                            <p className='text-[#444]  xl:h-[110px] xl:w-[336px] mb-[17px] text-center font-FontSan text-[16px] font-[500] leading-[24px] px-[20px]'>{i18n.language === 'en' ? t(`HomePage.${item.description}`) : item.description}</p>
                         </div>
                            <div className='xl:hidden flex xl:px-0 px-[15px] xl:py-0 py-[10px]'>
                                <h3 className='font-FontSan text-[16px] lg:text-[25px] font-[500] leading-[24px]'>
                                    <strong className='text-[18px] lg:text-[30px]'>{item.title}</strong> : {item.description}
                                </h3>
                            </div>
                        </div> 
                    })
                }
            </div>
        </div>
    )
}
