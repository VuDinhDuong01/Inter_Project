import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from "react-i18next";

import { Banner } from '../../components/Banner/Banner'
import { Input } from '../../components/Input/Input';
import { RegisterType, registerSchema } from '../../utils/schema'
import GoogleMapConfig from "../../components/GoogleMap/GoogleMap";
import { Images } from "../../utils/images/Images";

const ContactPage = () => {
  const { t } = useTranslation()
  const schemaRegister = registerSchema.pick(['username', 'email', 'telephone'])
  type FormContact = Pick<RegisterType, 'email' | 'username' | 'telephone'>
  const { register, handleSubmit, formState: { errors } } = useForm<FormContact>({
    defaultValues: {
      username: '',
      email: '',
      telephone: '',
    },

    resolver: yupResolver(schemaRegister)
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })

  return (
    <div>
      <Banner Image1={Images.Image27} Image2={Images.Image25} width1={256} height1={217} height2={296} width2={255} marginTop1={80} marginTop2={23} content={t('Header.contact')} description={t('banner.descriptionBannerContact')} />
      <div className="lg:px-[120px] w-full px-[20px]">
        <div className="w-full grid lg:grid-cols-2  grid-cols-1 lg:gap-[31px]">
          <div className="col-span-1 lg:flex hidden">
            <GoogleMapConfig />
          </div>
          <div className="col-span-1">
            <h2 className="text-black font-FontSan lg:text-[24px] text-[22px] font-[700]  lg:flex-col flex  lg:mb-[8px] mb-[30px] leading-[28px]">{t('contact.contactUs')}</h2>
            <p className="text-black font-FontSan text-[16px] font-[500] leading-[24px] lg:mb-[15px] mb-[30px]">{t('contact.description1')}
            </p>
            <div style={{
              boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)'
            }}
              className='w-full mb-[32px] h-[80px] rounded-[12px]   flex gap-[8px] justify-center items-center '>
              <div className='w-full flex'>
                <div className='ml-[12px] mr-[8px]'>
                  <img src={Images.MapImage} alt="" className='w-[24px] h-[24px] object-cover' />
                </div>
                <div >
                  <p className="text-[#7A7A7A] lg:text-[16px] font-[500] leading-[24px]">{t('contact.address')}</p>
                  <p className='text-black font-FontSan lg:text-[16px] text-[14px] font-[500] lg:leading-[24px] leading-[20px]'>Tầng 2, Tòa HH02, Eco Lakeview, 32 Đại Từ, P. Đại Kim, Q. Hoàng Mai, TP. Hà Nội</p>
                </div>
              </div>
            </div>
            <div style={{
              boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)'
            }} className='w-full mb-[32px] h-[80px] rounded-[12px]  flex gap-[8px] justify-center  items-center '>
              <div className='w-full flex '>
                <div className='ml-[12px] mr-[8px]'>
                  <img src={Images.LetterImage} alt="" />
                </div>
                <div >
                  <p className="text-[#7A7A7A] text-[16px] font-[500] leading-[24px]">Email</p>
                  <p className='text-[#0A0A0A] font-FontSan text-[16px] font-[500] leading-[24px]'>cskh@battech.vn</p>
                </div>
              </div>
            </div>
            <div style={{
              boxShadow: '4px 2px 15px 0px rgba(0, 0, 0, 0.05)'
            }} className='w-full h-[80px] rounded-[12px]   flex gap-[8px] justify-center  items-center '>
              <div className='w-full flex '>
                <div className='ml-[12px] mr-[8px]'>
                  <img src={Images.PhoneImage} alt="" />
                </div>

                <div >
                  <p className="text-[#7A7A7A] text-[16px] font-[500] leading-[24px]">{t('contact.telephone')}</p>
                  <p className='text-[#0A0A0A] font-FontSan text-[16px] font-[500] leading-[24px]'>024 85 896 999</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="lg:mt-[84px] mt-[50px] lg:bg-transparent bg-[#EAFFF5] rounded-[18px]">
          <div className='flex flex-col w-full items-center justify-center '>
            <h2 className='text-black mb-[4px] text-center font-FontSan text-[24px] font-[700] leading-[28px] lg:mt-0 mt-[40px]'>{t('contact.realyToStarted')}</h2>
            <p className='text-black text-center font-FontSan text-[16px] font-[500] mb-[17px] leading-[24px] lg:mt-0 lg:px-0 px-[30px] mt-[15px]'>{t('contact.description2')}</p></div>

          <form onSubmit={onSubmit}>
            <div className="w-full grid mb-[20px] lg:grid-cols-3 grid-cols-1 lg:gap-[32px] gap-[20px] lg:px-0 px-[10px]">
              <Input classNameDiv='col-span-1' placeholder={t('Input.name')} name='username' error={errors.username?.message} label={t('contact.username')} className='custom-class-input-contact' register={register} />
              <Input classNameDiv='col-span-1' placeholder={t('Input.email')} name='email' error={errors.email?.message} label='Email' className='custom-class-input-contact' register={register} />
              <Input classNameDiv='col-span-1' placeholder={t('Input.telephone')} name='telephone' error={errors.telephone?.message} label={t('contact.telephone')} className='custom-class-input-contact' register={register} />
            </div>
            <div className='lg:mx-0 mx-[10px]' >
              <textarea className='w-full h-[238px] rounded-[18px] border-2 text-[#7A7A7A] font-FontSan text-[16px] font-[500] leading-[24px] border-[#C4C4C4] bg-white outline-none pt-[11px] pl-[11px]' placeholder={t('Input.content')} />
            </div>
            <div className='w-full flex items-center justify-center'><button className='flex w-[276px] h-[48px] px-[10px] py-[12px] justify-center items-center gap-[8px]  rounded-[12px] bg-[#008345] lg:mt-[67px] mt-[40px] text-white text-center font-FontSan text-[24px] font-[500 lg:mb-[83px] mb-[40px]'>{t('contact.sendMessage')}</button></div>
          </form>
        </div>

      </div>
      <div className="col-span-1 lg:hidden flex lg:h-0 h-[500px] lg:my-0 my-[20px]">
        <GoogleMapConfig />
      </div>
    </div>
  )
}

export default ContactPage
