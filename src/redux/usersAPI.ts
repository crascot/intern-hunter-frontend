import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersAPI = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://26.18.250.193:8000/',
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
        addUser: build.mutation({
            query: (body) => ({
                url: 'auction-create',
                method: 'POST',
                body
            })
        }),
        profile: build.mutation({
            query: () => ({
                url: 'profile',
                method: 'GET'
            })
        })
    })
})

export const { useGetUserQuery, useAddUserMutation, useProfileMutation } = usersAPI;