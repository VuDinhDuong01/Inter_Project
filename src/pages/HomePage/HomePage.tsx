import { useTranslation } from "react-i18next";
import range from 'lodash/range'
import {useQuery,} from '@tanstack/react-query'

import { Partner } from "~/components/Partner/Partner";
import { RegisterBatTech } from "~/components/RegisterBatTech/RegisterBatTech";
import { ItemNews } from "~/components/ItemNews/ItemNews";
import { ServicePack } from "~/components/ServicePack/ServicePack";
import { IntroductionBattech } from "~/components/IntroductionBattech/IntroductionBattech";
import { DifferentAndPioneering } from "~/components/DifferentAndPioneering/DifferentAndPioneering";
import { Slick } from "~/components/slick";
import { useQuery as Query } from "~/hook/useQuery";
import { QueryType, NewsType } from "~/types/index";
import { Images } from "~/utils/images/Images";
import NewSkeleton from "~/components/Skeleton/NewSkeleton";
import { getNews } from "~/stores/NewApi";


const HomePage = () => {
  
  const { t } = useTranslation()

  const query: QueryType = Query()
  const {isLoading,data:newsData} = useQuery({
    queryKey: ['news',query ],
    queryFn: () => getNews(query),
  })

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-[638px]  relative lg:mb-[98px] ">
        <img
          src={Images.BannerHome}
          alt="banner"
          className="w-full h-full object-cover lg:flex hidden "
        />
        <img src='https://battech.vn/assets/images/services.png' className='w-full h-full object-cover lg:hidden flex' alt="banner" />
        <div className='w-full lg:hidden flex flex-col px-[15px] lg:mr-[134px] z-10 absolute xl:top-[50%] top-[50%]   translate-y-[-50%]'>
          <h2 className="text-[#F57A21] text-[40px] font-[700] font-FontSan mb-[10px]">
            BATTECH ERP
          </h2>
          <h3 className="text-white font-FontSan text-[20px] font-[700] leading-[28px] mb-[5px]">
            {t('HomePage.titleBanner')}
          </h3>
          <div className="w-full ">
            <p className="lg:text-[#606060] text-white font-FontSan text-[16px] font-[400] leading-[24px]">
              {t('HomePage.descriptionBanner')}
            </p>
          </div>
          <button className="text-white mt-[30px] items-center justify-center font-FontSan text-[24px] font-[600] rounded-[10px] border-2 border-white w-[276px] h-[48px] px-[10px] py-[12px] flex  ">
            {t('HomePage.buttonBanner')}
          </button>
        </div>
        <div className='absolute lg:flex hidden xl:top-[50%]  top-[50%] md:mx-[20px]  lg:left-[50%]  lg:translate-x-[-50%] translate-y-[-50%] items-center justify-center '>
          <div className='xl:mr-[134px]'>
            <h2 className="text-[#F57A21] text-[40px] font-[700] font-FontSan mb-[30px]">
              BATTECH ERP
            </h2>
            <h3 className="text-black font-FontSan text-[24px] font-[700] leading-[28px] mb-[5px]">
              {t('HomePage.titleBanner')}
            </h3>
            <div className="w-[502px] ">
              <p className="text-[#606060] font-FontSan text-[16px] font-[400] leading-[24px]">
                {t('HomePage.descriptionBanner')}
              </p>
            </div>
            <button className="text-white mt-[126px] items-center justify-center font-FontSan text-[24px] font-[600] rounded-[12px] bg-green w-[276px] h-[48px] px-[10px] py-[12px] flex  ">
              {t('HomePage.buttonBanner')}
            </button>
          </div>
          <div className="xl:w-[596px] w-[500px]   max-w-none lg:flex hidden">
            <img src={Images.ImageBanner} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <IntroductionBattech />
      <DifferentAndPioneering />
      <div className="xl:flex hidden bg-[#E9F9D6] xl:mb-[120px] h-[430px] w-full ">
        <div className='xl:max-w-[1200px]   xl:m-auto  w-full flex justify-between '>
          <div className='xl:w-[687px] xl:mt-[30px]'>
            <p className='text-[#606060] font-FontSan text-[16px] font-[500] leading-[24px] mb-[12px]'>{t('HomePage.NewsAboutBATTECH')}</p>
            <h4 className='text-black mb-[8px] font-FontSan text-[24px] font-[700] leading-[28px]'>{t('HomePage.NewsAboutBATTECHTitle')}</h4>
            <p className='text-[#606060] mb-[70px] font-FontSan text-[16px] font-[500] leading-[24px]  w-[687px] h-[105px]'> {t('HomePage.NewsAboutBATTECHDescription')}</p>
            <button className='flex w-[276px] bg-green h-[48px] px-[10px] py-[12px] justify-center items-center gap-[8px] rounded-[12px]  text-white text-[24px] font-[600] font-FontSan  whitespace-pre-line text-center    leading-[24px]  ring-1 ring-black ring-opacity-5'>{t('HomePage.NewsAboutBATTECHButton')}</button>
          </div>
          <div className='xl:flex-1 relative  xl:overflow-hidden'>
            <div className='xl:w-[382px]  xl:h-[205px] ml-[105px]'><img src={Images.HomeImage1} alt="" className='mt-[130px] w-full h-full object-cover ' /></div>
            <div className='top-[50px] absolute xl:left-[53px] xl:w-[382px] xl:h-[205px]  '><img src={Images.HomeImage} alt="" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </div>
      <div className='lg:px-[104px] xl:px-0  lg:h-[488px] lg:mb-[132px]  xl:max-w-[1232px] xl:m-auto xl:mb-[76px]'>
        <h3 className='text-black  font-FontSan text-[24px] font-[700] leading-[28px] lg:mb-[32px] w-full justify-center items-center flex'>{t('HomePage.newsAndEvents')}</h3>
        <div className="w-full  lg:py-[10px] py-[50px]  ">
          {
            <Slick slidesToShow={4}>
              {
                isLoading ? range(4).map((_, index) => {
                  return <NewSkeleton key={index} />
                }) :
                  (newsData && newsData.data.map((item: NewsType, index: number) => {
                    return <ItemNews key={index} dataNew={item} isShow={false} />
                  }))
              }
            </Slick>
          }
        </div>
      </div>
      <ServicePack />
      <RegisterBatTech />
      <Partner />
    </div>
  );
};

export default HomePage
