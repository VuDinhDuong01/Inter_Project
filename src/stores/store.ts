import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import newsReducer from './NewApi'
import jobsReducer from './JobApi'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        jobs:jobsReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
