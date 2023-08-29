import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { axiosInstance } from '~/api/FakeApi'  
import { JobType } from '~/types/Job.type' 
import { GenerateType } from '~/types/General.type'  
import { QueryType } from '~/types/query.type' 
 
interface UsersState {
    jobsData: GenerateType<JobType[]>,
    jobDetail: JobType
    isLoading: boolean,
    isLoadingDetail:boolean
}

export const fetchJobs = createAsyncThunk(
    'jobs',
    async (query: QueryType, thunkAPI) => {
        try {
            const result = await axiosInstance.get<GenerateType<JobType[]>>(`/api/v2/jobs`, {
                signal: thunkAPI.signal,
                params: query
            })
            return result.data
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error: any) {
            if (error?.name === 'AxiosError') return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const fetchJobDetail = createAsyncThunk(
    'news detail',
    async (id: string, thunkAPI) => {
        try {
            const result = await axiosInstance.get<JobType>(`/api/v2/jobs/${id}`, {
                signal: thunkAPI.signal,
            })
            return result.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error: any) {
            if (error?.name === 'AxiosError') return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
)

const initialState = {
    jobsData: {},
    jobDetail: {
        id: '',
        title: '',
        address: '',
        description: '',
        jobDescription: {
            description1: '',
            description2: '',
            description3: '',
            description4: '',
            description5: '',
            description6: '',
        },
        candidateRequirements: {
            request1: '',
            request2: '',
            request3: '',
            request4: '',
            request5: '',
            request6: '',
        }
    },
    isLoading: false,
    isLoadingDetail:false
} as UsersState

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            if (action.payload) {
                state.jobsData = action.payload
                state.isLoading = false
            }

        })
        builder.addCase(fetchJobs.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(fetchJobDetail.pending, (state) => {
            state.isLoadingDetail = true
        })

        builder.addCase(fetchJobDetail.fulfilled, (state, action) => {
            if (action.payload) {
                state.jobDetail = action.payload
                state.isLoadingDetail = false
            }
        })

        builder.addCase(fetchJobDetail.rejected, (state) => {
            state.isLoadingDetail = false
        })

    },
})

export default jobsSlice.reducer


