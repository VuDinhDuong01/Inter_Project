import { useTranslation } from "react-i18next";
import { useNavigate, createSearchParams } from 'react-router-dom';
import range from 'lodash/range'
import { useQuery, } from '@tanstack/react-query'
import { Banner } from '~/components/Banner/Banner';

import { ItemNews } from '~/components/ItemNews/ItemNews';
import { News } from '~/components/News/News';
import { Pagination } from '~/components/pagination/Pagination';
import { useQuery as Query } from '~/hook/useQuery';
import { Path } from '~/contants/Path';
import { QueryType, NewsType } from '~/types/index';
import { fakeDataFilterNew } from '~/api/Data';
import { Images } from '~/utils/images/Images';
import { NewsSkeleton, NewLoading } from '~/components/Skeleton/index';
import { getNews } from "~/stores/NewApi";

const NewsPage = () => {
  const query: QueryType = Query()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleFilterNew = (name: string) => {
    navigate({
      pathname: Path.news,
      search: createSearchParams({
        ...query,
        name,
        page: '1'
      }).toString()
    })
  }

  const handleBack = () => {
    navigate(Path.news)
  }
  const { isLoading, data: newsData } = useQuery({
    queryKey: ['news', query],
    queryFn: () => getNews(query),
  })

  console.log(newsData)
  return (
    <div>
      <Banner
        ImageBannerRight={Images.Image2}
        ImageBannerLeft={Images.Image21}
        width1={308}
        height1={294}
        height2={272}
        width2={365}
        marginTop1={20}
        marginTop2={42}
        content={t('banner.titleBannerNews')}
        description={t('banner.descriptionBannerNews')}
      />
      {isLoading ? <NewLoading /> : <News />}
      <div className='xl:max-w-[1200px]  xl:m-auto  w-full xl:flex hidden  items-center justify-between  xl:px-0 lg:pb-[40px] xl:pb-[34px] pb-[20px]'>
        <ul className='xl:max-w-[1200px] flex items-center xl:gap-[32px] gap-[25px] flex-wrap xl:px-0  px-[15px] '>
          {
            fakeDataFilterNew.map((item, index) => {
              return <li key={index} className={`font-FontSan 2xl:text-[24px] text-[20px]  font-[500] xl:font-[700] leading-[28px] cursor-pointer ${query.name === item ? 'text-green' : 'text-[#7A7A7A]'}`} onClick={() => handleFilterNew(item)}>{item}</li>
            })
          }
        </ul>
      </div>

      <div className='xl:max-w-[1200px]  xl:m-auto  xl:mb-[132px] lg:px-[30px] xl:px-0'>
        <div className='w-full grid xl:grid-cols-4 lg:gap-x-[32px] lg:grid-cols-3 md:grid-cols-2 md:gap-[25px] sm:grid-cols-1 lg:px-0 px-[15px]'>
          {
            isLoading ? range(8).map((_, index) => {
              return <NewsSkeleton key={index} />
            })
              : (newsData?.data.map((item: NewsType, index: number) => {
                return <ItemNews key={index} dataNew={item} isShow={true} />
              }))
          }
        </div>
        {isLoading || (newsData?.data as NewsType[])?.length > 0 ?
          <div className=' xl:mb-[120px] xl:mt-[27px] mb-[50px] mt-[20px]'> <Pagination page_size={newsData?.totalPages as number} query={query} path={Path.news} /></div>
          : <div className='w-full h-[300px] rounded-md bg-green xl:mb-[120px] flex flex-col items-center justify-center'>
            <span className='text-[25px] font-FontSan text-white py-3'>{t('NewsPage.notNew')}</span>
            <button className='px-4 py-3 rounded-md text-white font-FontSan bg-[red] ' onClick={handleBack}>{t('jobOpportunity.comeback')}</button>
          </div>
        }
      </div>
    </div>
  )
}

export default NewsPage
