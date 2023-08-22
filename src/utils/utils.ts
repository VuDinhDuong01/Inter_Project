

import { JobType } from "../types/Job.type"

export const getPathNewDetail = (title: string, id: string) => {
    return title.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, 'a')
        .replace(/[èéẻẽẹêềếểễệ]/g, 'e')
        .replace(/[ìíỉĩị]/g, 'i')
        .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, 'o')
        .replace(/[ùúủũụưừứửữự]/g, 'u')
        .replace(/[ỳýỷỹỵ]/g, 'y')
        .replace(/đ/g, 'd') + '-i,' + id
}

export const getId = (params: string) => {
    return params.split('-i,')[1]
}

export const filterData = (name: string, fakeDataJob: JobType[]) => {
    if (name === 'type') {
        return fakeDataJob.filter(item => item.type.toLowerCase().includes(name.trim().toLowerCase()))
    } else if (name === 'group') {
        return fakeDataJob.filter(item => item.group.toLowerCase().includes(name.trim().toLowerCase()))
    } else {
        return fakeDataJob.filter(item => item.location.toLowerCase().includes(name.trim().toLowerCase()))
    }
}

