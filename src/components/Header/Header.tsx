import classNames from 'classnames';
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from 'react';

import { Icons } from '~/contants/Icon';
import { Images } from '~/utils/images/Images';
import { Path } from '~/contants/Path';
import { TippyLanguage } from '../tippy/TippyLanguage';

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const refUl = useRef<HTMLUListElement>(null)
  const location = useLocation();

  const { t } = useTranslation()

  const handleToggleClick = () => {
    setToggle(prev => !prev)
  }

  return (
    <div className="lg:h-[119px] h-[90px] shadow-xxl w-full bg-white flex items-center justify-between lg:px-[32px] px-[20px] relative">
      <div className="lg:w-[150px]  lg:h-[50px] w-[120px] h-[40px]">
        <Link to={Path.home}>
          <img
            src={Images.Logo}
            alt="ảnh logo"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      <div className='lg:flex lg:items-center '>
        <ul className={`cursor-pointer  lg:text-[24px] lg:font-[400] lg:flex z-[9999]  ${toggle ? ' custom-class-ul-responsive' : 'hidden'}`} ref={refUl} >
          <Link to={Path.home}>
            <li
              onClick={() => setToggle(false)}
              className={classNames(` font-FontSan lg:flex lg:mr-[33px] ${toggle ? 'custom-class-li-header-responsive' : ''}`, {
                "text-green font-[700]": location.pathname === Path.home,
                "text-black": location.pathname !== Path.home,
              })}
            >
              {t('Header.homePage')}
            </li>
          </Link>
          <Link to={Path.introduction}>
            <li
              onClick={() => setToggle(false)}
              className={classNames(
                `font-FontSan lg:mr-[33px] 
                ${toggle ? 'custom-class-li-header-responsive'
                  : ''} `,
                {
                  "text-green font-[700]": location.pathname === Path.introduction,
                  "text-black": location.pathname !== Path.introduction,
                }
              )}
            >
              {t('Header.aboutUs')}

            </li>
          </Link>

          <Link to={Path.news}>
            <li
              onClick={() => setToggle(false)}
              className={classNames(
                `font-FontSan lg:mr-[33px] 
                ${toggle ? 'custom-class-li-header-responsive'
                  : ''} `,
                {
                  "text-green font-[700]": location.pathname === Path.news,
                  "text-black": location.pathname !== Path.news,
                }
              )}
            >
              {t('Header.news')}
            </li>
          </Link>

          <Link to={Path.jobOpportunity}>
            <li
              onClick={() => setToggle(false)}
              className={classNames(
                `font-FontSan lg:mr-[33px] 
                ${toggle ? 'custom-class-li-header-responsive'
                  : ''} `,
                {
                  "text-green font-[700]": location.pathname === Path.jobOpportunity,
                  "text-black": location.pathname !== Path.jobOpportunity
                }
              )}
            >
              {t('Header.jobOpportunity')}
            </li>
          </Link>
          <Link to={Path.contact}>
            <li
              onClick={() => setToggle(false)}
              className={classNames(`font-FontSan 
              ${toggle ? 'custom-class-li-header-responsive'
                  : ''} `, {
                "text-green font-[700]": Path.contact === location.pathname,
                "text-black": Path.contact !== location.pathname,
              })}
            >
              {t('Header.contact')}

            </li>
          </Link>

        </ul>
        <li className="w-[1px] h-[32px] hidden lg:flex bg-[rgb(156,163,175)] ml-[10px] mr-[14px]"></li>
        <div className="cursor-pointer flex items-center gap-3">
          <TippyLanguage />
          <div className='border-2 border-[rgb(156,163,175)] w-[33px] h-[33px] lg:hidden flex items-center justify-center' onClick={handleToggleClick}>
            {toggle ? <Icons.FaTimes size={25} /> : <Icons.FiMenu size={25} />}
          </div>
        </div>

      </div>
    </div>
  );
};
