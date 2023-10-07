import { configureStore } from '@reduxjs/toolkit'
import countryFilterReducer from './countryFilter/countryFilterSlice'

export const store = configureStore({
  reducer: {
    countryFilter: countryFilterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch