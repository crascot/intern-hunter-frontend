import { configureStore } from '@reduxjs/toolkit'
import { auctionAPI } from './auctionAPI'
import { usersAPI } from './usersAPI'
import { formAPI } from './formAPI'
import authSlice from './authSlice/authSlice'

export const store = configureStore({
    reducer: {
        [auctionAPI.reducerPath]: auctionAPI.reducer,
        [usersAPI.reducerPath]: usersAPI.reducer,
        [formAPI.reducerPath]: formAPI.reducer,
        authSlice
    },
    middleware: (getDefultMiddleware) =>
        getDefultMiddleware().concat(
            auctionAPI.middleware,
            usersAPI.middleware, formAPI.middleware
        )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch