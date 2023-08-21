import { useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";

import { Path } from "./contants/Path";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Loading } from "./components/Loading/Loading";
const  HomePage =lazy(()=>import("./pages/HomePage/HomePage"))
const   ContactPage =lazy(()=>import("./pages/ContactPage/ContactPage")) 
const  NewsPage =lazy(()=>import("./pages/NewsPage/NewsPage")) 
const   IntroductionPage =lazy(()=>import("./pages/IntroductionPage/IntroductionPage")) 
const   JobOpportunityPage =lazy(()=>import("./pages/JobOpportunityPage/JobOpportunityPage")) 
const   NotFound =lazy(()=>import("./pages/NotFoundPage/NotFoundPage")) 
const  NewDetailPage =lazy(()=>import( "./pages/NewsPage/NewDetailPage/NewDetailPage"))
const   JobOpportunityItemPage =lazy(()=>import("./pages/JobOpportunityPage/JobOpportunityItemPage/JobOpportunityItemPage")) 

export const Routes = () => {

  const { t } = useTranslation()
  const element = useRoutes([
    {
      path: Path.home,
      element: (
  
       <Suspense fallback={<Loading />}>
        <MainLayout 
        title={t('Title.home')}
       
        >
            <HomePage />
            </MainLayout>
         </Suspense>
        
      ),
    },
    {
      path: Path.contact,
      element: (
         <Suspense fallback={<Loading />}>
          <MainLayout 
           title={t('Title.contact')}
          
          >
            <ContactPage />
          </MainLayout>
         </Suspense>
      ),
    },
    {
      path: Path.news,
      element: (
        <Suspense fallback={<Loading />}>
          <MainLayout 
           title={t('Title.new')}
         
          >
            <NewsPage />
          </MainLayout>
        </Suspense>
      ),
    },

    {
      path: Path.introduction,
       element: (
       <Suspense fallback={<Loading />}>
          <MainLayout title={t('Title.introduction')}>
            <IntroductionPage />
          </MainLayout>
         </Suspense>
      ),
    },
    {
      path: Path.jobOpportunity,
      element: (
          <Suspense fallback={<Loading />}>
          <MainLayout title={t('Title.job')}>
            <JobOpportunityPage />
          </MainLayout>
          </Suspense>
      ),
    },

    {
      path: Path.newDetail,
      element: (
        <Suspense fallback={<Loading />}>
          <MainLayout title={t('Title.newDetail')}>
            <NewDetailPage />
          </MainLayout>
         </Suspense>
      ),
    },
    {
      path: Path.jobOpportunityDetail,
      element: (
         <Suspense fallback={<Loading />}>
          <MainLayout title={t('Title.jobDetail')}>
            <JobOpportunityItemPage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: '*',
      element: (
        <Suspense fallback={<Loading />}>
          <MainLayout title={t('Title.pageNotFound')}>
            <NotFound />

          </MainLayout>
        </Suspense>
      ),
    },
  ]);
  return element;
};
