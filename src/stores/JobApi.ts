import { axiosInstance } from '~/api/FakeApi'
import { GenerateType, JobType, QueryType } from '~/types'
export const getJobs= async(query:QueryType)=>{
    try{
        const response= await axiosInstance.get<GenerateType<JobType[]>>('/api/v2/jobs',{
            params:query
        })
        return response.data
    } 
    catch(err){
        console.log(err)
    }
}

export const getJobDetail= async(id:string)=>{
    try{
        const response = await axiosInstance.get<JobType>(`/api/v2/jobs/${id}`)
        return response.data
    }
    catch(err){
        console.log(err)
    }
}







