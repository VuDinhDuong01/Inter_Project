import { useTranslation } from "react-i18next";

import { DataDifferentAndPioneer } from "../../api/Data"

export const DifferentAndPioneering = () => {

  const { t, i18n } = useTranslation()

  return (
    <div className="lg:px-[120px] lg:h-[350px] items-center  lg:mt-[116px] lg:mb-[120px] ">
      <h2 className="text-[24px] font-[700] leading-[28px] font-FontSan text-black lg:mb-[76px] mb-[80px] lg:pt-0 pt-[80px] flex items-center justify-center">
        {t('HomePage.differentAndPioneering')}
      </h2>
      <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:gap-[32px] lg:px-0 px-[20px] '>
        {
          DataDifferentAndPioneer.map((item, index) => {
            return <div key={index} className="shadow-xxl lg:mb-0 mb-[50px]  h-[245px] col-span-1 flex flex-col   items-center  rounded-[16px] bg-white relative ">
              <img src={item.img} alt="" className=" top-[-20px] left-[24px] absolute" />
              <p className="text-black mt-[44px] h-[40px]   mb-[12px] whitespace-pre-line text-center font-FontSan text-[20px] font-[700] leading-[24px] ">
                {
                  i18n.language === 'en' ? t(`HomePage.${item.title}`) : item.title
                }
              </p>
              <p className='text-[#606060]  mb-[17px] px-[12px] text-center font-FontSan text-[16px] font-[500] leading-[24px] flex justify-center items-center'> {
                i18n.language === 'en' ? t(`HomePage.${item.description}`) : item.description
              }</p>
            </div>
          })
        }
      </div>
    </div>
  )
}
