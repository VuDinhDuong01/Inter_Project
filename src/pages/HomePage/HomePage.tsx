import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect } from "react";


import { Partner } from "~/components/Partner/Partner";
import { RegisterBatTech } from "~/components/RegisterBatTech/RegisterBatTech";
import { ItemNews } from "~/components/ItemNews/ItemNews";
import { ServicePack } from "~/components/ServicePack/ServicePack";
import { RootState, useAppDispatch } from '~/stores/store'
import { fetchNews } from "~/stores/NewApi";
import { IntroductionBattech } from "~/components/IntroductionBattech/IntroductionBattech";
import { DifferentAndPioneering } from "~/components/DifferentAndPioneering/DifferentAndPioneering";
import { Slick } from "~/components/slick";
import { useQuery } from "~/hook/useQuery";
import { QueryType } from "~/types/query.type";
import { NewsType } from "~/types/News.type";
import { Images } from "~/utils/images/Images";

const HomePage = () => {
  const query: QueryType = useQuery()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchNews(query))
  }, [query.page, dispatch])

  const { newsData } = useSelector((state: RootState) => state.news)

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
       <div className="2xl:flex hidden">
        <div className='h-[488px] mb-[120px]  bg-[#E9F9D6] px-[120px] w-full flex justify-between '>
          <div className=' w-[687px]'>
            <p className='text-[#606060] font-FontSan text-[16px] font[500] leading-[24px] mt-[60px] mb-[12px]'>  {t('HomePage.NewsAboutBATTECH')}</p>
            <h4 className='text-black mb-[8px] font-FontSan text-[24px] font-[700] leading-[28px]'>{t('HomePage.NewsAboutBATTECHTitle')}</h4>
            <p className='text-[#606060] mb-[80px] font-FontSan text-[16px] font-[500] leading-[24px]  w-[687px] h-[105px]'> {t('HomePage.NewsAboutBATTECHDescription')}</p>
            <button className='flex w-[276px] bg-green h-[48px] px-[10px] py-[12px] justify-center items-center gap-[8px] rounded-[12px]  text-white text-[24px] font-[600] font-FontSan  whitespace-pre-line text-center    leading-[24px]  ring-1 ring-black ring-opacity-5'>{t('HomePage.NewsAboutBATTECHButton')}</button>
          </div>
          <div className='flex-1  relative'>
            <div className='w-[382px]  h-[205px]'><img src={Images.HomeImage1} alt="" className='mt-[178px] w-full h-full ml-[228px] ' /></div>
            <div className='top-[77px] absolute  right-[53px] w-[382px] h-[205px]  '><img src={Images.HomeImage} alt="" className="w-full h-full" /></div>
          </div>
        </div>
      </div> 

      <div className='lg:px-[104px] lg:h-[488px] lg:mb-[132px] 2xl:max-w-[1200px] 2xl:m-auto 2xl:mb-[132px]'>
        <h3 className='text-black  font-FontSan text-[24px] font-[700] leading-[28px] lg:mb-[32px] w-full justify-center items-center flex'>{t('HomePage.newsAndEvents')}</h3>
        <div className="w-full lg:py-[10px] py-[50px]">
          {
            <Slick slidesToShow={4}>
              {
                (newsData.data.map((item: NewsType, index: number) => {
                  return <ItemNews key={index} dataNew={item} isShow={false} />
                }))
              }
            </Slick>
          }
        </div>
      </div>
      <ServicePack />
      <RegisterBatTech />
      <div ><Partner /></div>
    </div>
  );
};

export default HomePage
