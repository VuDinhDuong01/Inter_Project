import { UseFormRegister } from "react-hook-form";

interface InputType {
  placeholder: string,
  icon?: string,
  label?: string,
  name: string,
  error?: string,
  className: string
  classNameDiv?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

export const Input = ({ placeholder, icon, label, name, register, error, className, classNameDiv }: InputType) => {
  return (
    <div className={classNameDiv}>
      {
        label && <label htmlFor="" className='flex font-FontSan text-[16px] mb-[6px] '>{label}<p className='text-[#D80027]'>*</p></label>
      }
      <div className='relative'>
        <input  {...register(name)} type="text" placeholder={placeholder} className={className} />
        <img src={icon} alt="" className='absolute top-[25%] left-[12px] ' />
      </div>
      {
        error && <span className='text-[red]'>{error}</span>
      }
    </div>
  )
}
