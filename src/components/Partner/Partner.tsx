import { useTranslation } from "react-i18next";

import { Slick } from "../../components/slick/index";
import { PartnerData } from '../../api/Data'

export const Partner = () => {

   const { t } = useTranslation()
   
   return (
      <div className="lg:mb-[112px] lg:h-[203px]   lg:px-[108px] lg:bg-transparent bg-green lg:py-0 py-[40px]">
         <h2 className="lg:text-black text-white flex items-center justify-center font-FontSan text-[24px] font-[700] pb-[26px] leading-[28px]">{t('HomePage.Partner')}</h2>
         <div className='w-full'>
            {
               <Slick slidesToShow={4}>
                  {
                     PartnerData.map((item, index) => {
                        return <div key={index} className='mb-[44px]'>
                           <div><div style={{ boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)' }} className='bg-white  mx-[16px] h-[105px] rounded-[12px] flex items-center justify-center'>
                              <img src={item} alt="" className=' w-[105px] h-full object-contain' />
                           </div></div>
                        </div>
                     })
                  }
               </Slick>
            }
         </div>
      </div >
   )
}
