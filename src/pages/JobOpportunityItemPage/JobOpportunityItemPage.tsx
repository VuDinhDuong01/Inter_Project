import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom"
import { useQuery, } from '@tanstack/react-query'

import { Banner } from "~/components/Banner/Banner";
import { RegisterType, registerSchema } from '~/utils/schema'
import { Input } from "~/components/Input/Input";
import { JobDescription } from "~/components/JobDescription/JobDescription";
import { Button } from "~/components/Button/Button";
import { SimilarJob } from "~/components/SimilarJob/SimilarJob";
import { Images } from "~/utils/images/Images";
import { getId } from "~/utils/utils"

import { JobDetailSkeleton } from "~/components/Skeleton/JobDetailSkeleton";
import { getJobDetail } from "~/stores/JobApi";
import { JobType } from "~/types";

const JobOpportunityItemPage = () => {
    const { t } = useTranslation()
    const { idJob } = useParams()
    const id = getId(idJob as string)
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterType>({
        defaultValues: {
            username: '',
            email: '',
            telephone: '',
            address: '',
            file: '',
            relationship: '',
        },
        resolver: yupResolver(registerSchema)
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    const { isLoading, data: jobDetail } = useQuery({
        queryKey: ['jobDetail', id],
        queryFn: () => getJobDetail(id),
    })

    return (
        <div>
            <Banner ImageBannerRight={Images.Image26} ImageBannerLeft={Images.Image24} width1={225} height1={173} height2={285} width2={285} marginTop1={95} marginTop2={34} content={t('banner.titleBannerJobOpportunity')}
                description={t('banner.descriptionBannerJobOpportunity')} />
            <div className='  xl:max-w-[1192px] xl:m-auto lg:px-[50px] xl:px-0 lg:gap-[68px] xl:gap-x-[68px] xl:flex'>
                {isLoading ? <JobDetailSkeleton /> : <JobDescription jobDetail={jobDetail as JobType} />}
                <div className='flex-1 xl:mt-[121px] xl:w-[379px] w-full xl:px-0 px-[15px]'>
                    <form action="" onSubmit={onSubmit}>
                        <div className=' xl:mt-[5px] px-[22px] rounded-[10px] border-2 bg-white border-green w-full  '>
                            <h2 className='text-black mt-[24px] font-FontSan text-[22px] font-[700] mb-[15px]'>{t('Input.applyDirectly')}</h2>
                            <Input
                                label={t('Input.name')}
                                icon={Images.ImgInput1}
                                placeholder='Bùi Văn A'
                                classNameDiv='mb-[12px]'
                                name='username'
                                register={register}
                                error={errors.username?.message as string}
                                className='custom-class-input'
                            />
                            <Input
                                label='Email'
                                classNameDiv='mb-[12px]'
                                icon={Images.ImgInput2}
                                placeholder='123@gmail.com'
                                name='email' register={register}
                                error={errors.email?.message as string}
                                className='custom-class-input'
                            />
                            <Input
                                label={t('Input.telephone')}
                                classNameDiv='mb-[12px]'
                                icon={Images.ImgInput3}
                                placeholder='0123456789'
                                name='telephone'
                                register={register}
                                error={errors.telephone?.message as string}
                                className='custom-class-input'
                            />
                            <Input
                                label={t('Input.file')}
                                classNameDiv='mb-[12px]'
                                icon={Images.ImgInput4} placeholder='bui van A.pdf'
                                name='file' register={register}
                                error={errors.file?.message as string}
                                className='custom-class-input'
                            />
                            <Input
                                label={t('Input.fakebook')}
                                classNameDiv='mb-[12px]'
                                icon={Images.ImgInput5}
                                placeholder='facebook.com'
                                name='address'
                                register={register}
                                error={errors.address?.message as string}
                                className='custom-class-input'
                            />
                            <Input
                                label={t('Input.address')}
                                classNameDiv='mb-[12px]'
                                icon={Images.ImgInput6} placeholder={t('Input.throughFriends')}
                                name='relationship' register={register}
                                error={errors.relationship?.message as string}
                                className='custom-class-input'
                            />
                            <textarea className='custom-class-textarea-note' placeholder={t('Input.note')} />
                            <Button className='custom-class-button-apply'>Apply</Button>
                        </div>
                    </form>
                    <div className=' w-full rounded-[10px] border-2 border-green bg-white mt-[26px] xl:mb-[242px] mb-[50px]'>
                        <div className='lg:px-[23px] px-[11px] text-green font-FontSan text-[24px] font-[700] mb-[22px] mt-[27px] '>{t('Input.similarJob')}</div>
                        <SimilarJob />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobOpportunityItemPage