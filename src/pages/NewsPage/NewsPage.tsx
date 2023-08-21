import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate, createSearchParams } from 'react-router-dom';

import { Banner } from '../../components/Banner/Banner'
import { RootState, useAppDispatch } from '../../stores/store'
import { fetchNews } from '../../stores/NewApi'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import { ItemNews } from '../../components/ItemNews/ItemNews'
import { News } from '../../components/News/News'
import { Pagination } from '../../components/pagination/Pagination'
import { useQuery } from '../../hook/useQuery'
import { Path } from '../../contants/Path'
import { QueryType } from '../../types/query.type';
import { fakeDataFilterNew } from '../../api/Data';
import { NewsType } from '../../types/News.type';
import { Images } from '../../utils/images/Images';

const NewsPage = () => {

  const query: QueryType = useQuery()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { newsData, isLoading } = useSelector((state: RootState) => state.news)

  const handleFilterNew = (name: string) => {
    navigate({
      pathname: Path.news,
      search: createSearchParams({
        ...query,
        name
      }).toString()
    })
  }
  const handleBack = () => {
    navigate(Path.news)
  }
  useEffect(() => {
    dispatch(fetchNews(query))
  }, [query.page, query.name])

  return (
    <div>
      <Banner
        Image1={Images.Image2}
        Image2={Images.Image21}
        width1={308}
        height1={294}
        height2={272}
        width2={365}
        marginTop1={20}
        marginTop2={42}
        content={t('banner.titleBannerNews')}
        description={t('banner.descriptionBannerNews')}
      />
      <News />

      <div className='w-full lg:flex hidden  items-center justify-between lg:px-[120px] lg:pb-[40px] pb-[20px]'>
        <ul className='flex items-center lg:gap-[32px] gap-[25px] flex-wrap lg:px-0  px-[15px]'>
          {
            fakeDataFilterNew.map((item, index) => {
              return <li key={index} className={`text-black  font-FontSan lg:text-[24px] text-[20px]  font-[500] lg:font-[700] leading-[28px] cursor-pointer ${query.name === item ? 'text-green' : 'text-black'}`} onClick={() => handleFilterNew(item)}>{item}</li>
            })
          }
        </ul>
      </div>
      <div className='lg:px-[120px] lg:mb-[132px]'>
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 lg:gap-x-[32px] md:gap-x-[20px] sm:grid-cols-1 lg:px-0 px-[15px]'>
          {
            isLoading ? <Skeleton /> : (newsData.data.map((item: NewsType, index: number) => {
              return <ItemNews key={index} dataNew={item} isShow={true} />
            }))
          }
        </div>
        {newsData?.data?.length > 0 ?
          <div className=' lg:mb-[87px] mb-[50px] mt-[20px]'> <Pagination page_size={newsData.totalPages} query={query} path={Path.news} /></div>
          : <div className='w-full h-[300px] rounded-md bg-green flex flex-col items-center justify-center'>
            <span className='text-[25px] font-FontSan text-white py-3'>{t('NewsPage.notNew')}</span>
            <button className='px-4 py-3 rounded-md text-white font-FontSan bg-[red] ' onClick={handleBack}>{t('jobOpportunity.comeback')}</button>
          </div>
        }
      </div>
    </div>
  )
}

export default NewsPage
