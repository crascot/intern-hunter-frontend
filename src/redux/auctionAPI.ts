import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auctionAPI = createApi({
    reducerPath: 'auctionApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://26.18.250.193:8000/api/' }),
    endpoints: (build) => ({
        getAuctions: build.query({
            query: (page) => `auction-list?${page && `page=${page}`}`,
        }),
        addAuction: build.mutation({
            query: (body) => ({
                url: 'auction-create',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetAuctionsQuery, useAddAuctionMutation } = auctionAPI;