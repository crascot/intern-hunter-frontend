import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const formAPI = createApi({
    reducerPath: 'formAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://26.18.250.193:8000/api/' }),
    endpoints: (build) => ({
        signupStudent: build.mutation({
            query: (body) => ({
                url: 'student-signup',
                method: 'POST',
                body
            })
        }),
        signupEmployer: build.mutation({
            query: (body) => ({
                url: 'employer-signup',
                method: 'POST',
                body
            })
        }),

        signin: build.mutation({
            query: (body) => ({
                url: 'signin',
                method: 'POST',
                body
            })
        }),
        signout: build.mutation({
            query: (body) => ({
                url: 'signout',
                method: 'POST',
                body
            })
        }),
    })
})

export const { useSignupStudentMutation, useSignupEmployerMutation, useSigninMutation, useSignoutMutation } = formAPI;