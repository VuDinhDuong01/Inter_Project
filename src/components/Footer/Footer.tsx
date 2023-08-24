import { useTranslation } from "react-i18next"

import { Images } from "~/utils/images/Images";

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full lg:h-[459px] px-[20px]  bg-green lg:px-[121px] grid lg:grid-cols-3 grid-cols-1">
      <div className="lg:col-span-1 w-full">
        <div className="h-[55px] w-[140px] lg:flex hidden lg:mt-[83px] mt-[50px] mb-[16px] ">
          <img src={Images.LogoFooter} alt="ảnh logo" className="w-full h-full" />
        </div>
        <div className="h-[40px] w-[50px] lg:hidden lg:mt-[83px] mt-[50px] mb-[16px] ">
          <img src='	https://battech.vn/assets/icons/tower.svg' alt="ảnh logo" className="w-full h-full" />
        </div>
        <p className="text-white text-[16px] font-[500] leading-[24px] font-FontSan mr-[32px]">
          {t('FooterPage.footerDescription')}
        </p>
        <div className="lg:mt-[74px] mt-[20px] flex items-center gap-[16px] cursor-pointer">
          <div className="w-[40px] bg-white h-[40px] rounded-[50px] flex items-center justify-center">
            <img
              src={Images.Facebook}
              alt="ảnh Twitter"
              className="w-[10px] h-[16px] object-cover"
            />
          </div>
          <div className="w-[40px] bg-white h-[40px] rounded-[50px] flex items-center justify-center">
            <img
              src={Images.Twitter}
              alt="ảnh Twitter"
              className="w-[13px] h-[13px] object-cover shrink-0"
            />
          </div>
          <div className="w-[40px] bg-white h-[40px] rounded-[50px] flex items-center justify-center">
            <img
              src={Images.Youtobe}
              alt="ảnh Youtobe"
              className="w-[13px] h-[13px]  object-cover shrink-0"
            />
          </div>
          <div className="w-[40px] bg-white h-[40px] rounded-[50px] flex items-center justify-center">
            <img
              src={Images.Linkedin}
              alt="ảnh Linkedin"
              className="w-[13px] h-[13px]  object-cover shrink-0"
            />
          </div>
          <div className="w-[40px] bg-white h-[40px] rounded-[50px] flex items-center justify-center">
            <img
              src={Images.Discord}
              alt="ảnh Discord"
              className="w-[13px] h-[13px] object-cover shrink-0"
            />
          </div>
        </div>
      </div>
      <div className='lg:hidden flex w-full h-[1px] bg-[#ccc] mt-[50px]'></div>
      <div className="col-span-1 text-white mr-[34px]  w-full">
        <h2 className="text-[20px] sm:text-[24px] font-FontSan font-[700] leading-[28px] lg:mt-[94px] mt-[50px]">
          {t('HomePage.contact')}
        </h2>
        <div className="flex items-center lg:mt-[26px] mt-[22px]">
          <img
            src={Images.Telephone}
            alt="ảnh telephone"
            className="w-[20px] h-[20px] object-cover mr-[8px]"
          />
          <p className="text-[16px] font-[500] font-FontSan leading-[24px]">
            Điện thoại: 024 85 896 999
          </p>
        </div>
        <div className="flex items-center lg:mt-[20px] mt-[15px]">
          <img
            src={Images.Letter}
            alt="ảnh thư"
            className="w-[20px] h-[20px] object-cover mr-[8px]"
          />
          <p className="text-[16px] font-[500] font-FontSan leading-[24px]">
            E-Mail: info@batgroup.vn
          </p>
        </div>
        <div className="flex items-center lg:mt-[20px] mt-[15px]">
          <img
            src={Images.Home}
            alt="ảnh địa chỉ"
            className="w-[20px] h-[20px] object-cover mr-[8px]"
          />
          <p className="text-[16px] font-[500] font-FontSan leading-[24px]">
            Ðịa chỉ: Tòa HH02, Eco Lakeview, số 32 Ðại Từ, phường Ðại Kim, quận
            Hoàng Mai, Hà Nội
          </p>
        </div>
        <div className="flex items-center lg:mt-[20px] mt-[15px]">

          <svg xmlns="http://www.w3.org/2000/svg" width="20" className="mr-[8px]" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.243 5.75709C13.442 4.95651 12.4307 4.399 11.3261 4.149C10.2215 3.89901 9.06874 3.96673 8.00103 4.34435C6.93332 4.72198 5.99429 5.39407 5.29249 6.28294C4.5907 7.17181 4.1548 8.24115 4.03519 9.36733C3.91559 10.4935 4.11716 11.6306 4.6166 12.647C5.11604 13.6634 5.89296 14.5178 6.85754 15.1112C7.82212 15.7047 8.93496 16.013 10.0674 16.0006C11.1999 15.9882 12.3057 15.6556 13.257 15.0411C13.3671 14.9656 13.4913 14.9129 13.6221 14.8861C13.7529 14.8594 13.8878 14.8591 14.0187 14.8853C14.1496 14.9115 14.274 14.9636 14.3844 15.0387C14.4949 15.1137 14.5892 15.2101 14.6618 15.3222C14.7344 15.4342 14.7838 15.5597 14.8071 15.6912C14.8305 15.8226 14.8272 15.9575 14.7976 16.0877C14.768 16.2179 14.7126 16.3408 14.6347 16.4493C14.5568 16.5577 14.4579 16.6495 14.344 16.7191C12.8507 17.6847 11.0783 18.1252 9.30667 17.9711C7.53508 17.817 5.86533 17.077 4.56121 15.868C3.2571 14.6591 2.39298 13.05 2.10535 11.2952C1.81772 9.5403 2.12299 7.73961 2.97293 6.17759C3.82288 4.61557 5.16903 3.38126 6.79874 2.66966C8.42844 1.95806 10.2488 1.80974 11.9722 2.24813C13.6956 2.68652 15.2238 3.68663 16.3154 5.09045C17.407 6.49428 17.9998 8.2218 18 10.0001C18.0002 10.5573 17.8452 11.1036 17.5524 11.5776C17.2595 12.0517 16.8405 12.4349 16.3421 12.6841C15.8437 12.9334 15.2858 13.039 14.7308 12.989C14.1759 12.939 13.6458 12.7354 13.2 12.4011C12.6302 13.1609 11.8085 13.6931 10.8822 13.9026C9.95579 14.1121 8.98511 13.9851 8.14381 13.5443C7.3025 13.1036 6.64547 12.3779 6.29028 11.497C5.93508 10.6162 5.90489 9.63771 6.20512 8.73665C6.50535 7.83559 7.1164 7.07076 7.92893 6.57901C8.74147 6.08725 9.70248 5.90066 10.64 6.05262C11.5775 6.20458 12.4304 6.68517 13.046 7.40841C13.6616 8.13164 13.9998 9.05033 14 10.0001C14 10.2653 14.1054 10.5197 14.2929 10.7072C14.4804 10.8947 14.7348 11.0001 15 11.0001C15.2652 11.0001 15.5196 10.8947 15.7071 10.7072C15.8947 10.5197 16 10.2653 16 10.0001C16 8.46309 15.414 6.93009 14.243 5.75709ZM12 10.0001C12 9.46965 11.7893 8.96095 11.4142 8.58587C11.0392 8.2108 10.5304 8.00009 10 8.00009C9.46958 8.00009 8.96087 8.2108 8.5858 8.58587C8.21073 8.96095 8.00001 9.46965 8.00001 10.0001C8.00001 10.5305 8.21073 11.0392 8.5858 11.4143C8.96087 11.7894 9.46958 12.0001 10 12.0001C10.5304 12.0001 11.0392 11.7894 11.4142 11.4143C11.7893 11.0392 12 10.5305 12 10.0001Z" fill="white" />
          </svg>
          <p className="text-[16px] font-[500] leading-[24px] font-FontSan">
            CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ BATTECH
          </p>
        </div>
      </div>
      <div className='lg:hidden flex w-full h-[1px] bg-[#ccc] mt-[50px]'></div>
      <div className="col-span-1 text-white mb-[20px] lg:mb-0">
        <h2 className="sm:text-[24px] text-[20px] font-FontSan font-[700] leading-[28px] lg:mt-[94px] mt-[50px] ">
          {t('FooterPage.UsefulLinksOnly')}
        </h2>
        <div className="mt-[26px]">
          <div className="flex items-center">
            <img
              src={Images.Check}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-[16px] font-FontSan font-[500] leading-[24px]">
              {t('FooterPage.aboutBATTECH')}
            </p>
          </div>
          <div className="flex items-center mt-[8px]">
            <img
              src={Images.Check}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-[16px] font-FontSan font-[500] leading-[24px]">
              {t('FooterPage.usageAgreement')}
            </p>
          </div>
          <div className="flex items-center mt-[8px]">
            <img
              src={Images.Check}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-[16px] font-FontSan font-[500] leading-[24px]">
              {t('FooterPage.warrantyPolicy')}

            </p>
          </div>
          <div className="flex items-center mt-[8px]">
            <img
              src={Images.Check}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-[16px] font-FontSan font-[500] leading-[24px]">
              {t('FooterPage.partnerProgram')}

            </p>
          </div>
          <div className="flex items-center mt-[8px]">
            <img
              src={Images.Check}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-[16px] font-FontSan font-[500] leading-[24px]">
              {t('FooterPage.personnelPecruitment')}

            </p>
          </div>
          <div className="flex items-center mt-[8px]">
            <img
              src={Images.Check}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-[16px] font-FontSan font-[500] leading-[24px]">
              {t('FooterPage.supportCenter')}
            </p>
          </div>
          <div className="flex items-center mt-[8px]">
            <img
              src={Images.Check}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-[16px] font-FontSan font-[500] leading-[24px]">
              {t('FooterPage.onlineMarketingSolution')}
            </p>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex w-full h-[1px] bg-[#ccc] mt-[50px]'></div>
      <div className="w-full flex flex-col items-center justify-center lg:hidden">
        <div className="h-[70px] w-[170px]  lg:mt-[83px] mt-[50px] mb-[16px] ">
          <img src={Images.LogoFooter} alt="ảnh logo" className="w-full h-full" />
        </div>
        <p className="text-white w-full flex justify-center text-center text-[16px] font-[500] leading-[24px] font-FontSan px-[20px] mb-[20px]">
          Copyrights © 2010 - 2022 BATTECH. All rights reserved.
        </p>

      </div>
    </div>
  );
};
