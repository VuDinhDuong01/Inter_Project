import { useTranslation } from "react-i18next";

import { Images } from "~/utils/images/Images";

export const IntroductionBattech = () => {
  const { t } = useTranslation()
  return (
    <div className="lg:px-[140px] lg:bg-transparent bg-[#CEFFE8] lg:py-0 py-[50px] px-[15px]">
      <div className="items-center grid lg:grid-cols-2 grid-cols-1  lg:gap-[50px]">
        <div className="col-span-1">
          <img src={Images.AutoImage} alt="ảnh đồng hồ" className="object-cover flex items-center justify-center w-full h-full" />
        </div>
        <div className="col-span-1">
          <h2 className="text-black w-full font-FontSan text-[24px] font-[700] leading-[28px] mb-[24px] lg:pt-0 pt-[30px] lg:text-left text-center flex justify-center lg:justify-start">
            {t('HomePage.aboutBattech')}
          </h2>
          <p className="text-black  text-justify font-FontSan lg:text-[16px] font-[500] leading-[24px] mb-[30px]">
            {t('HomePage.descriptionBattech')}
          </p>

           <div className="w-full grid xl:grid-cols-4  grid-cols-2    xl:gap-[31px] gap-[10px]">
            <div className="col-span-1 inline-flex items-center gap-[6px] justify-end flex-col pt-[19px]  pb-[7px] rounded-[16px]  shadow-[rgba(0, 0, 0, 0.05)] border-[#008345] border-2 ">
              <img
                src={Images.ClockImage}
                alt="ảnh đồng hồ"
                className="w-[48px] h-[48px] object-cover"
              />
              <div className="flex flex-col justify-center w-[125px] h-[64px]">
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.feedback')}
                </p>
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.fast')}
                </p>
              </div>
            </div>
            <div className="col-span-1 inline-flex items-center gap-[6px] justify-end flex-col pt-[19px]  pb-[7px] rounded-[16px]  shadow-[rgba(0, 0, 0, 0.05)] border-[#008345] border-2 ">
              <img
                src={Images.TudongImage}
                alt="ảnh đồng hồ"
                className="w-[48px] h-[48px] object-cover"
              />
              <div className="flex flex-col justify-center w-[125px] h-[64px]">
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.automatic')}
                </p>
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.chemistry')}
                </p>
              </div>
            </div>
            <div className="col-span-1 inline-flex items-center gap-[6px] justify-end flex-col pt-[19px]  pb-[7px] rounded-[16px]  shadow-[rgba(0, 0, 0, 0.05)] border-[#008345] border-2 ">
              <img
                src={Images.SettingImage}
                alt="ảnh đồng hồ"
                className="w-[48px] h-[48px] object-cover"
              />
              <div className="flex flex-col justify-center w-[125px] h-[64px]">
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.system')}
                </p>
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.grow')}
                </p>
              </div>
            </div>
            <div className="col-span-1 inline-flex items-center gap-[6px] justify-end flex-col pt-[19px]  pb-[7px] rounded-[16px]  shadow-[rgba(0, 0, 0, 0.05)] border-[#008345] border-2 ">
              <img
                src={Images.SecurityImage}
                alt="ảnh đồng hồ"
                className="w-[48px] h-[48px] object-cover"
              />
              <div className="flex flex-col justify-center w-[125px] h-[64px]">
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.security')}
                </p>
                <p className="text-black text-center font-FontSan text-[16px] font-[600] leading-[24px]">
                  {t('HomePage.information')}
                </p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
