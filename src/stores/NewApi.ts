
import { axiosInstance } from '~/api/FakeApi'
import { NewsType } from '~/types/News.type'
import { GenerateType } from '~/types/General.type'
import { QueryType } from '~/types/query.type'

export const getNews = async (query: QueryType) => {
    try {
        const response = await axiosInstance.get<GenerateType<NewsType[]>>('/api/v2/news', {
            params: query
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getNewDetail = async (id: string) => {
    try {
        const response = await axiosInstance.get<NewsType>(`/api/v2/news/${id}`)
        return response.data
    }
    catch (error) {
        console.error(error)
    }
}

