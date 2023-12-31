import { ComponentPropsWithRef } from "react"
import { DataType } from "~/types/query.type"

type InputProps = ComponentPropsWithRef<"input"> & {
    item: DataType,
    checkedRadio: string
}


export const InputCheckRadio = ({ item, onChange, checkedRadio }: InputProps) => {
    return (
        <div className='flex items-center gap-[8px]'>
            <input type="radio" className="w-[17px] h-[17px]  text-green cursor-pointer" checked={checkedRadio === item.id} onChange={onChange} />
            <h3 className="lg:text-black text-[#706361] font-FontSan text-[16px]  font-[500] leading-[24px]">{item.name}</h3>
        </div>
    )

}
