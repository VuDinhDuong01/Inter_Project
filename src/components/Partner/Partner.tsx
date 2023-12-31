import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { Slick } from "../slick";
import { PartnerData } from "~/api/Data";
import styles from '~/customestyle.module.css'

export const Partner = () => {

   const { t } = useTranslation()

   return (
      <div className="lg:mb-[112px] xl:mb-[120px] xl:px-0 xl:max-w-[1232px] xl:m-auto xl:my-[40px] lg:h-[203px]   lg:px-[108px] lg:bg-transparent bg-green lg:py-0 py-[40px]">
         <h2 className="lg:text-black text-white flex items-center justify-center font-FontSan text-[24px] font-[700] pb-[26px] leading-[28px]">{t('HomePage.Partner')}</h2>
         <div className='w-full'>
            {
               <Slick slidesToShow={4}>
                  {
                     PartnerData.map((item, index) => {
                        return <div key={index} className='mb-[44px]'>
                           <div><div className={clsx(styles.boxShadow, {
                              ['bg-white  mx-[16px] h-[105px] rounded-[12px] flex items-center justify-center']: true
                           })}>
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
