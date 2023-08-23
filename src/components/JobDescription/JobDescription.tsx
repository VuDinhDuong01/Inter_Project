
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { Icons } from "~/contants/Icon" 
import { RootState } from "~/stores/store" 
import { useAppDispatch } from "~/stores/store" 
import { fetchJobDetail } from "~/stores/JobApi" 
import { getId } from "~/utils/utils" 

export const JobDescription = () => {
    const dispatch = useAppDispatch()
    const { idJob } = useParams()

    const id = getId(idJob as string)
    useEffect(() => {
        dispatch(fetchJobDetail(id))
    }, [id, dispatch])

    const { jobDetail } = useSelector((state: RootState) => state.jobs)

    return (
        <div className='lg:w-[745px] w-full lg:px-0 px-[15px]'>
            <p className='text-green font-FontSan text-[16px] font-[600] leading-[24px] mb-[13px]'>Cơ hội việc làm / <span className='text-[#444444]'>{jobDetail.title}</span></p>
            <h1 className='text-black font-FontSan text-[24px] font-[700] mb-[7px]'>{jobDetail?.title}</h1>
            <p className='mb-[7px] text-black font-FontSan text-[16px]'>{jobDetail?.description}</p>
            <div className='flex items-center mb-[11px]'>
                <div className='flex items-center mr-[18px]'>
                    <Icons.BsCurrencyDollar className='text-grey w-[11px] h-[16px] font-FontSan text-[14px] font-[900] mr-[6px]' />
                    <p className='text-grey font-FontSan text-[14px] leading-[28px]'>Thỏa thuận</p>
                </div>
                <div className='flex items-center mr-[18px]'>
                    <Icons.BiMap className='text-grey font-FontSan text-[14px] font-[900] mr-[6px]' />
                    <p className='text-grey font-FontSan text-[14px] leading-[28px]'>{jobDetail?.address}</p>
                </div>
            </div>

            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">Mô tả công việc</h2>
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
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">Yêu cầu ứng viên</h2>
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
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">Quyền lợi</h2>
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
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">Địa điểm làm việc</h2>
                <ul>
                    <li className='custom-class-li'>- Hà Nội: 32 Đại Từ, Hoàng Mai, Hà Nội, Hoàng Mai</li>
                </ul>
            </div>
            <div className='mb-[37px]'>
                <h2 className="text-black mb-[12px] font-FontSan text-[20px] font-[700] ">Thông tin liên hệ</h2>
                <ul>
                    <li className='custom-class-li'>Email: tuyendung@battrech.com</li>
                    <li className='custom-class-li'>Hotline: 0123456789</li>

                </ul>
            </div>
        </div>
    )
}
