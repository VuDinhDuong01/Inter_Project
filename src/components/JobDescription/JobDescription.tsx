import { useTranslation } from "react-i18next";

import { Icons } from "~/contants/Icon"
import { JobType } from "~/types";

interface JobDetailsType {
    jobDetail: JobType
}

export const JobDescription = ({ jobDetail }: JobDetailsType) => {
    const { t } = useTranslation()
    return (
        <div className='lg:w-[745px] xl:mt-[86px] xl:pt-[-35xp]  w-full lg:px-0 px-[15px]'>
            <p className='text-green font-FontSan text-[16px] font-[600] leading-[24px] mb-[13px]'> {t('jobDescription.job')}<span className='text-[#444444]'>{jobDetail.title}</span></p>
            <h1 className='text-black font-FontSan text-[24px] font-[700] mb-[7px]'>{jobDetail?.title}</h1>
            <p className='mb-[7px] text-black font-FontSan text-[16px]'>{jobDetail?.description}</p>
            <div className='flex items-center mb-[11px]'>
                <div className='flex items-center mr-[18px]'>
                    <Icons.BsCurrencyDollar className='text-grey w-[11px] h-[16px] font-FontSan text-[14px] font-[900] mr-[6px]' />
                    <p className='text-grey font-FontSan text-[14px] leading-[28px]'> {t('jobDescription.Agree')}</p>
                </div>
                <div className='flex items-center mr-[18px]'>
                    <Icons.BiMap className='text-grey font-FontSan text-[14px] font-[900] mr-[6px]' />
                    <p className='text-grey font-FontSan text-[14px] leading-[28px]'>{jobDetail?.address}</p>
                </div>
            </div>

            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.Jobdescription')}</h2>
                <ul>
                    <li className='custom-class-li'>{jobDetail?.jobDescription?.description1}</li>
                    <li className='custom-class-li'>{jobDetail?.jobDescription?.description2}</li>
                    <li className='custom-class-li'>{jobDetail?.jobDescription?.description3}</li>
                    <li className='custom-class-li'>{jobDetail?.jobDescription?.description3}</li>
                    <li className='custom-class-li'>{jobDetail?.jobDescription?.description4}</li>
                    <li className='custom-class-li'>{jobDetail?.jobDescription?.description5}</li>
                    <li className='custom-class-li'>{jobDetail?.jobDescription?.description6}</li>
                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.CandidateRequirements')}</h2>
                <ul>
                    <li className='custom-class-li'>{jobDetail?.candidateRequirements?.request1}</li>
                    <li className='custom-class-li'>{jobDetail?.candidateRequirements?.request2}</li>
                    <li className='custom-class-li'>{jobDetail?.candidateRequirements?.request3}</li>
                    <li className='custom-class-li'>{jobDetail?.candidateRequirements?.request4}</li>
                    <li className='custom-class-li'>{jobDetail?.candidateRequirements?.request5}</li>
                    <li className='custom-class-li'>{jobDetail?.candidateRequirements?.request6}</li>


                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.Right')}</h2>
                <ul>
                    <li className='custom-class-li'>Thu nhập: Thỏa thuận theo năng lực, upto 20tr/tháng, thưởng theo hiệu quả </li>
                    <li className='custom-class-li'>Thời gian làm việc 7.5h/ngày, Từ thứ 2 đến hết thứ 6, hàng ngày từ 08h-17h </li>
                    <li className='custom-class-li'>Chế độ xét duyệt tăng lương định kỳ hàng năm</li>
                    <li className='custom-class-li'>Được hưởng quyền lợi BHXH, BHYT, BHTN đầy đủ theo quy định của nhà nước.</li>
                    <li className='custom-class-li'>Được đánh giá xét kết quả công việc, đề bạt lên các vị trí phù hợp với năng lực bản thân</li>
                    <li className='custom-class-li'>Làm việc tại môi trường chuyên nghiệp, năng động, trẻ trung, thân thiện và trải nghiệm các hoạt động văn hóa doanh nghiệp đặc sắc</li>

                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.Worklocation')}</h2>
                <ul>
                    <li className='custom-class-li'>{t('jobDescription.address')}</li>
                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">{t('jobDescription.ContactInfo')}</h2>
                <ul>
                    <li className='custom-class-li'>Email: tuyendung@battrech.com</li>
                    <li className='custom-class-li'>Hotline: 0123456789</li>

                </ul>
            </div>
        </div>
    )
}
