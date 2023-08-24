import { useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import i18n from "i18next";

import { Images } from '~/utils/images/Images';

export const TippyLanguage = () => {
    const [isShow, setIsShow] = useState<boolean>(false)

    const [language, setLanguage] = useState<{ lang: string, img: string }>({
        lang: 'VN',
        img: Images.ImgLang
    })
    const handleChangeLanguage = (lng: string) => {
        setLanguage(language.lang === 'VN' ? {
            lang: 'EN',
            img: Images.ImgLangEn
        } : {
            lang: 'VN',
            img: Images.ImgLang
        })

        setIsShow(prev => !prev)
        i18n.changeLanguage(lng);

    }
    const handleLanguage = () => {
        setIsShow(prev => !prev)
    }

    return (
        <span>
            <Tippy
                interactive
                trigger='click'
                hideOnClick={isShow}
                render={attrs => (
                    <>
                        {isShow && <div className="bg-[white] flex items-center py-[8px] px-[10px] hover:bg-green hover:text-[white] hover:rounded-md rounded-md cursor-pointer "
                            onClick={() => handleChangeLanguage(language.lang === 'VN' ? 'en' : 'vi')}  {...attrs} >
                            <img src={language.lang === 'VN' ? Images.ImgLangEn : Images.ImgLang} alt="ảnh đổi ngôn ngữ" className="w-[30px] h-[20px] object-cover" />
                            <span className="pl-[8px]  text-[20px] font-FontSan leading-[28px]">{language.lang === 'VN' ? 'EN' : "VN"}</span>
                        </div>}
                    </>

                )}
            >
                <li className="flex items-center" onClick={handleLanguage}>
                    <img src={language.img} alt="ảnh đổi ngôn ngữ" className="w-[30px] h-[20px] object-cover" />
                    <span className="pl-[8px] text-[20px] font-FontSan leading-[28px]">{language.lang}</span>
                </li>
            </Tippy>
        </span>
    )
}
