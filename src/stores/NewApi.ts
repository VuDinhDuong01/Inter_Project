import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { axiosInstance } from '../api/FakeApi' 
import { NewsType } from '../types/News.type' 
import { GenerateType } from '../types/General.type'
import { QueryType } from '../types/query.type'

// eslint-disable-next-line react-hooks/rules-of-hooks
export const fetchNews = createAsyncThunk(
    'news',
    async (query: QueryType, thunkAPI) => {
        try {
            const result = await axiosInstance.get<GenerateType<NewsType[]>>('/api/v2/news', {
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

export const fetchNewsDetail = createAsyncThunk(
    'news detail',
    async (id: string, thunkAPI) => {
        try {
            const result = await axiosInstance.get<NewsType>(`/api/v2/news/${id}`, {
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


interface UsersState {
    newsData: GenerateType<NewsType[]>,
    newDataDetail: NewsType
    isLoading: boolean
}

const initialState: UsersState = {
    newsData: {
        data: [],
        totalItem: 0,
        totalPages: 0
    },
    newDataDetail: {
        id: '',
        content: '',
        description: '',
        image: '',
        detail: {
            detailOne: "",
            detailTwo: "",
            detailThree: "",
        }
    },
    isLoading: false
}

const newSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            if (action.payload) {
                state.newsData = action.payload
                state.isLoading = false
            }
        })
        builder.addCase(fetchNews.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(fetchNewsDetail.fulfilled, (state, action) => {
            if (action.payload) {
                state.newDataDetail = action.payload
            }
        })
    },
})

export default newSlice.reducer


