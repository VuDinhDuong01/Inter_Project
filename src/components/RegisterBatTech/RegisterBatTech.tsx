import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from "react-i18next";

import { RegisterType, registerSchema } from '../../utils/schema'
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";


const schemaRegister = registerSchema.pick(['username', 'email'])
type Type = Pick<RegisterType, 'email' | 'username'>
export const RegisterBatTech = () => {
  const { t } = useTranslation()
  const { register, handleSubmit, formState: { errors } } = useForm<Type>({
    defaultValues: {
      username: '',
      email: ''
    },
    resolver: yupResolver(schemaRegister)
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })


  return (
    <div className='bg-[#E9F9D6]  lg:h-[388px] lg:py-0 py-[20px]  w-full lg:flex items-center justify-center flex-col lg:mb-[77px]'>
      <div className='w-full lg:flex flex-col justify-center items-center lg:px-0 px-[15px] '>
        <h2 className='text-black font-FontSan  text-center lg:text-[24px] text-[30px] font-[700] lg:leading-[28px] leading-[40px] mt-[60px] lg:mb-[20px] mb-[40px]'>{t('HomePage.registerBattechTitle')}</h2>
        <form onSubmit={onSubmit} className='lg:flex flex-col justify-center items-center w-full'>
          <Input name='username' register={register} classNameDiv="mb-[16px]" placeholder={t('Input.name')} error={errors.username?.message as string} className='mb-[5px] lg:w-[579px] w-full h-[48px] rounded-[12px] bg-white shadow-sm text-[#606060] font-FontSan text-[16px] font-[500] leading-[24px] block pl-[10px] outline-none' />
          <Input name='email' register={register} placeholder={t('Input.email')} error={errors.email?.message as string} className='mb-[5px] lg:w-[579px] w-full h-[48px] rounded-[12px] bg-white shadow-sm text-[#606060] font-FontSan text-[16px] font-[500] leading-[24px] block pl-[10px] outline-none' />
          <div className='w-full items-center flex justify-center'><Button className='custom-class-button-register'> {t('HomePage.registerBattechButton')}</Button></div>
        </form>
      </div>
    </div>
  )
}
