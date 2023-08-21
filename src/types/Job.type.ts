export interface JobType{
    title:string 
    description:string
    address:string
    id:string,
    location:string 
    type:string 
    group:string
    jobDescription: {
        description1:string
        description2: string
        description3: string
        description4:string
        description5: string
        description6: string
    },
    candidateRequirements:{
        request1:string
        request2: string
        request3: string
        request4: string
        request5: string
        request6: string
    }
}