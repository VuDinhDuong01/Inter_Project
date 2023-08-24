interface BannerType {
  Image1: string,
  Image2: string,
  width1: number,
  height1: number,
  width2: number,
  height2: number
  marginTop1?: number,
  marginTop2?: number
  content?: string,
  description?: string
  img?: string
}

export const Banner = (
  { Image1,
    Image2,
    width1,
    height1,
    width2,
    height2,
    marginTop1,
    marginTop2, content,
    description,
    img }
    : BannerType) => {

  return (
    <div className="xl:pl-[112px] justify-between xl:pr-[132px] lg:px-[0px] w-full lg:h-[260px] lg:mb-[120px] mb-[50px] lg:flex lg:bg-[#E9F9D6] bg-[#CEFFE8] ">
      <div style={{ marginTop: `${marginTop1}px` }} className='lg:flex hidden lg:mt-[20px]'>
        <img src={Image1} alt="" style={{ width: `${width1}px`, height: `${height1}px`, objectFit: 'cover' }} />
      </div>

      <div className='lg:hidden flex pt-[20px]  w-full h-full items-center justify-center'>
        <img src={Image1} alt="banner" />
      </div>

      <div className="flex flex-col items-center justify-center">
        {
          img ? (<img src={img} className="object-cover lg:w-[387px] lg:h-[36px] lg:px-0 px-[20px] lg:my-0 my-[50px]" />) : <h2 className="text-green lg:text-[32px] text-[25px] text-center font-[700] leading-[32px] px-[20px] lg:mb-[6px] mb-[15px] lg:mt-0 mt-[30px]">{content}</h2>
        }
        {description && <p className='text-[#444] items-center text-center lg:w-[453px] w-full font-FontSan text-[16px] font-[500] lg:px-0 px-[20px] lg:pb-0 pb-[20px] leading-[24px]'>{description}</p>}
      </div>
      <div className='lg:hidden flex w-full h-[100px] bg-green'></div>
      <div style={{ marginTop: `${marginTop2}px` }} className='lg:flex hidden'>
        <img src={Image2} alt="" style={{ width: `${width2}px`, height: `${height2}px`, objectFit: 'cover' }} />
      </div>
    </div>
  )
}
