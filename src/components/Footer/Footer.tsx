import { useTranslation } from "react-i18next"

import { Images } from "../../utils/images/Images"; 

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
              className="w-[10px] h-[16px] object-cover shrink-0"
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
        <h2 className="text-[24px] font-FontSan font-[700] leading-[28px] lg:mt-[94px] mt-[50px]">
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
          <img
            src={Images.Detail}
            alt="ảnh giới thiệu"
            className="w-[20px] h-[20px] object-cover mr-[8px]"
          />
          <p className="text-[16px] font-[500] leading-[24px] font-FontSan">
            CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ BATTECH
          </p>
        </div>
      </div>
      <div className='lg:hidden flex w-full h-[1px] bg-[#ccc] mt-[50px]'></div>
      <div className="col-span-1 text-white mb-[20px] lg:mb-0">
        <h2 className="text-[24px] font-FontSan font-[700] leading-[28px] lg:mt-[94px] mt-[50px] ">
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
