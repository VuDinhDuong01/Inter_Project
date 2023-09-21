import { useRoutes } from "react-router-dom";

import { lazy, Suspense } from "react";

import { Path } from "./contants/Path";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { Loading } from "./components/Loading/Loading";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"))
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"))
const IntroductionPage = lazy(() => import("./pages/IntroductionPage/IntroductionPage"))
const JobOpportunityPage = lazy(() => import("./pages/JobOpportunityPage/JobOpportunityPage"))
const NotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage"))
const NewDetailPage = lazy(() => import("./pages/NewDetailPage/NewDetailPage"))
const JobOpportunityItemPage = lazy(() => import("./pages/JobOpportunityItemPage/JobOpportunityItemPage"))

export const Routes = () => {
  const element = useRoutes([
    {
      path: '',
      element: <Suspense fallback={<Loading />}><MainLayout /></Suspense>,
      children: [
        {
          path: Path.home,
          element: <HomePage />
        },
        {
          path: Path.contact,
          element: <ContactPage />
        }, {
          path: Path.news,
          element: <NewsPage />
        },
        {
          path: Path.introduction,
          element: <IntroductionPage />
        }, {
          path: Path.jobOpportunity,
          element: <JobOpportunityPage />
        }, {
          path: Path.newDetail,
          element: <NewDetailPage />
        }, {
          path: Path.jobOpportunityDetail,
          element: <JobOpportunityItemPage />
        }, {
          path: '*',
          element: <NotFound />
        }
      ]

    }

  ]);
  return element;
};
