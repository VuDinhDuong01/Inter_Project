
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



