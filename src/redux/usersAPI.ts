import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersAPI = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://26.18.250.193:8000/api/',
        prepareHeaders: (headers, { getState }: any) => {
            const { authSlice } = getState();
            headers.set('Authorization', `Token ${authSlice.token ?? ''}`)
            return headers;
        }
    }),
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `search-student/${id}`,
        }),
        profile: build.mutation({
            query: () => ({
                url: 'profile',
                method: 'GET'
            })
        }),
        editProfile: build.mutation({
            query: (body) => ({
                url: 'profile',
                method: 'POST',
                body
            })
        }),

        getAuction: build.query({
            query: (id) => `auction-detail/${id}`,
        }),

        sendTask: build.mutation({
            query: (body) => ({
                url: `auction-detail/${body.id}/task-create`,
                method: 'POST',
                body: { task: body.task }
            })
        }),

        createAuction: build.mutation({
            query: (body) => ({
                url: 'auction-create',
                method: 'POST',
                body
            })
        }),
        activeAuction: build.mutation({
            query: (body) => ({
                url: `auction-edit/${body.id}`,
                method: 'PUT',
                body: body.auction
            })
        }),

        ratingStudent: build.mutation({
            query: (body) => ({
                url: `auction-detail/${body.id}/rating-add`,
                method: 'POST',
                body: body.student
            })
        })
    })
})

export const {
    useGetUserQuery,
    useProfileMutation,
    useEditProfileMutation,
    useGetAuctionQuery,
    useSendTaskMutation,
    useCreateAuctionMutation,
    useActiveAuctionMutation,
    useRatingStudentMutation
} = usersAPI;