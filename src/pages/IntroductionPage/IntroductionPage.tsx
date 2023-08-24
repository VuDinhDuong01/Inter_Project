import { useTranslation } from "react-i18next";

import { RegisterBatTech } from "~/components/RegisterBatTech/RegisterBatTech";
import { Partner } from "~/components/Partner/Partner";
import { Banner } from "~/components/Banner/Banner";
import { WorkingPrinciple } from "~/components/WorkingPrinciple/WorkingPrinciple";
import { Images } from "~/utils/images/Images";


const IntroductionPage = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full overflow-hidden">
      <div className="xl:flex hidden"><Banner Image1={Images.SystemImage} width1={272} height1={272} height2={321} width2={321} Image2={Images.OperatingImage} marginTop1={53} img={Images.Img} /></div>
       <div className=" xl:mb-[120px] 2xl:px-0 bg-green  2xl:mt-[65px] 2xl:max-w-[1200px] 2xl:m-auto xl:bg-transparent xl:px-[120px] w-full grid xl:grid-cols-2 grid-cols-1 xl:gap-x-[33px]">
        <div className="col-span-1 xl:flex hidden items-center justify-center">
          <img src={Images.AnhImage} alt="" className="w-full h-[406px] rounded-[20px] justify-center items-center object-cover" />
        </div>
        <div className="col-span-1 flex flex-col  justify-center  xl:px-0 px-[20px] lg:px-[25px]">
          <h2 className="xl:text-black  text-white xl:mt-0 mt-[75px] flex xl:justify-start text-center xl:text-left justify-center font-FontSan text-[24px] font-[700] leading-[28px] xl:mb-[10px] mb-[40px]"> {t('IntroductionPage.aboutBATTECH')}</h2>
          <p className="xl:text-[#444] text-white font-FontSan xl:text-[16px] lg:text-[20px] font-[500] learning-[24px]"> {t('IntroductionPage.aboutBATTECHDetail1')}</p>
          <p className="xl:text-[#444] text-white  font-FontSan xl:text-[16px] lg:text-[20px] font-[500] learning-[24px] my-[15px]"> {t('IntroductionPage.aboutBATTECHDetail2')}</p>
          <p className="xl:text-[#444] text-white  font-FontSan xl:text-[16px] lg:text-[20px] font-[500] learning-[24px]">{t('IntroductionPage.aboutBATTECHDetail3')}</p>
        </div>
        <div className="col-span-1 xl:hidden flex xl:my-0 my-[70px] items-center justify-center">
          <img src='https://battech.vn/_next/image?url=%2Fassets%2Fimages%2Fhello.png&w=640&q=75' alt="" className="xl:w-full xl:h-[406px] rounded-[20px] object-cover" />
        </div>
      </div> 

      <div className='xl:pr-[242px] 2xl:pr-0    2xl:mt-[120px] 2xl:max-w-[1071px]   2xl:max-h-[395px] 2xl:m-auto xl:bg-transparent   xl:h-[395px] 2xl:h-[395px] xl:pl-[127px] 2xl:pl-0 grid w-full xl:grid-cols-2 grid-cols-1 2xl:gap-[99px]'>
        <div className='col-span-1 xl:px-0 px-[20px] 2xl:px-0'>
          <h2 className='text-black font-FontSan text-[24px] font-[700] leading-[24px] xl:pt-[82px]  pt-[60px] xl:text-right text-center xl:mb-0 mb-[30px]'>{t('IntroductionPage.VisionAndMission')}</h2>
          <div >
            <p className='text-black text-right font-FontSan font-[500] xl:text-[16px] lg:px-[30px] 2xl:px-0 lg:text-[20px]  mt-[10px] leading-[24px]'>{t('IntroductionPage.VisionAndMissionDescriptions1')}</p>
            <p className='text-[#606060] text-right font-FontSan font-[500] xl:text-[16px] lg:px-[30px] 2xl:px-0 lg:text-[20px]   leading-[24px]'>{t('IntroductionPage.VisionAndMissionDescriptions2')}</p>
            <p className='text-[#606060] text-right font-FontSan font-[500] xl:text-[16px] lg:px-[30px] 2xl:px-0 lg:text-[20px]   leading-[24px]'>{t('IntroductionPage.VisionAndMissionDescriptions3')}</p>
            <p className='text-[#606060] text-right font-FontSan font-[500] xl:text-[16px] lg:px-[30px] 2xl:px-0 lg:text-[20px]   leading-[24px]'>{t('IntroductionPage.VisionAndMissionDescriptions4')}</p>
            <p className='text-[#606060] text-right font-FontSan font-[500] xl:text-[16px] lg:px-[30px] 2xl:px-0 lg:text-[20px]   leading-[24px]'>{t('IntroductionPage.VisionAndMissionDescriptions5')}</p>
          </div>
        </div>
        <div className="col-span-1 flex sm:items-center   sm:justify-center xl:justify-start xl:items-start 2xl:justify-start 2xl:items-start">
          <img src={Images.Anh2Image} alt="" className=" 2xl:h-[395px] object-cover  lg:w-[395px] 2xl:w-[395px] lg:my-0 my-[50px]" />
        </div>
      </div>

      <div className="xl:px-[120px]  2xl:mt-[120px]  2xl:px-0 2xl:max-w-[1200px] 2xl:max-h-[389px] 2xl:m-auto 2xl:mb-[120px] lg:mb-[50px] w-full ">
        <h2 className="text-black font-FontSan text-[24px] pt-[60px] 2xl:pt-0 font-[700] leading-[28px] flex items-center justify-center 2xl:mb-[36px] mb-[50px]">{t('IntroductionPage.CoreValues')}</h2>
        <div className="lg:grid-cols-2  grid-cols-1 w-full grid ">
          <div className="2xl:col-span-1 w-full ">
            <div className="w-full grid 2xl:grid-cols-2 grid-cols-1">
              <div className="col-span-1 xl:px-0 px-[15px] w-full xl:mb-0 mb-[30px] 2xl:mr-[32px] 2xl:max-w-[276px]">
                <h2 className="text-[#F57A21] font-FontSan text-[20px] font-[700] learning-[28px]">BAT</h2>
                <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="2xl:w-[276px] xl:w-[90%] pr-[10px]  items-center flex h-[42px] pl-[16px] mt-[12px] rounded-[8px] bg-white  text-[#444] font-FontSan text-[16px] lg:text-[19px] font-[400] leading-[52px]">{t('IntroductionPage.AttentiveToCustomers')}</div>
                <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="2xl:w-[276px] xl:w-[90%] items-center flex h-[42px] pl-[16px] mt-[12px] rounded-[8px] bg-white  text-[#444] font-FontSan text-[16px] lg:text-[19px]  font-[400] leading-[52px]">{t('IntroductionPage.DedicationToWork')}</div>
                <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="2xl:w-[276px]  xl:w-[90%] items-center flex h-[42px] pl-[16px] mt-[12px] rounded-[8px] bg-white  text-[#444] font-FontSan text-[16px] lg:text-[19px]  font-[400] leading-[52px]">{t('IntroductionPage.UnityMakesStrength')}</div>
              </div>

              <div className="col-span-1 xl:px-0 px-[15px] xl:mb-0 mb-[30px] xl:mt-[30px] 2xl:mt-0">
                <h2 className="text-[#F57A21] font-FontSan text-[20px] font-[700] learning-[28px]">TECH</h2>
                <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="2xl:w-[276px] xl:w-[90%] h-[42px] flex items-center pl-[16px] mt-[12px] rounded-[8px] bg-white  text-[#444] font-FontSan text-[16px] lg:text-[19px]  font-[400] leading-[52px]">“T” - Technology: Công nghệ</div>
                <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="2xl:w-[276px] xl:w-[90%] h-[42px] pl-[16px] mt-[12px] rounded-[8px] bg-white  text-[#444] flex items-center font-FontSan text-[16px] lg:text-[19px]  font-[400] leading-[52px]">“E” - Ecosystem: Hệ sinh thái</div>
                <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="2xl:w-[276px] xl:w-[90%] h-[42px] flex items-center pl-[16px] mt-[12px] rounded-[8px] bg-white  text-[#444] font-FontSan text-[16px] lg:text-[19px]  font-[400] leading-[52px]">“C” - Connect: Kết nối</div>
                <div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className="2xl:w-[276px] xl:w-[90%] h-[42px] flex items-center pl-[16px] mt-[12px] rounded-[8px] bg-white  text-[#444] font-FontSan text-[16px] lg:text-[19px]  font-[400] leading-[52px]">“H” - Happiness: Hạnh phúc</div>
              </div>
            </div>
          </div>
          <div className='col-span-1 w-full lg:pr-[15px]'>
            <div className='w-[full] 2xl:h-[325px] xl:rounded-[20px] bg-[#E9F9D6] xl:p-[54px] p-[30px]'>
              <p className='text-[#444] font-FontSan text-[16px] font-[500] leading-[24px]'>{t('IntroductionPage.CoreValuesDescription1')}</p>
              <p className='text-[#444] mt-[15px] font-FontSan text-[16px] font-[500] leading-[24px]'>{t('IntroductionPage.CoreValuesDescription2')}</p>

            </div>
          </div>

        </div>
      </div>
      <WorkingPrinciple />
      <div className='xl:pl-[236px] 2xl:mt-[110px] 2xl:mb-[120px] 2xl:pl-0  2xl:max-w-[1080px] 2xl:max-h-[400px]  2xl:m-auto xl:pr-[124px] 2xl:pr-0 2xl:gap-[96px] xl:flex xl:mb-[120px]  xl:bg-transparent bg-[#CEFFE8] xl:pb-0 pb-[50px]'>
        <div className='xl:w-[400px] xl:h-[400px] h-full flex items-center justify-center  ' >
          <img src={Images.Anh9Image} alt="" className='xl:w-[400px]  max-w-none xl:h-[400px]  object-cover' />
        </div>
        <div className='flex justify-center  flex-col xl:px-0 px-[15px]'>
          <h2 className='xl:py-0 py-[40px] text-black xl:text-left text-center mb-[12px]  font-FontSan text-[24px] font-[700] leading-[28px] '>{t('IntroductionPage.STAFF')}</h2>
          <p className='xl:text-[16px]  text-[#444] lg:text-[25px] lg:leading-[40px] font-FontSan font-[500] xl:leading-[24px] leading-[28px]'>{t('IntroductionPage.StaffDetail')}</p>
        </div>
      </div>
      <RegisterBatTech />
      <Partner />
    </div>
  )
}

export default IntroductionPage
