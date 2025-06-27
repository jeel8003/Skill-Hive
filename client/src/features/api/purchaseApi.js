import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_PURCHASE_API = 'http://localhost:3000/api/v1/purchase';

export const purchaseApi = createApi({
    reducerPath: "purchaseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: COURSE_PURCHASE_API,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        createCheckoutSession: builder.mutation({
            query: (courseId) => ({
                url: "/create-checkout-session", // Updated URL
                method: "POST",
                body: { courseId }
            })
        }),
        getCourseWithStatus: builder.query({
            query: (courseId) => ({
                url: `/course/${courseId}/detail-with-status`,
                method: "GET"
            })
        }),
        getPurchasedCourses: builder.query({
            query: () => ({
                url: `/`,
                method: "GET"
            })
        }),
    })
})

export const { useCreateCheckoutSessionMutation, useGetCourseWithStatusQuery, useGetPurchasedCoursesQuery } = purchaseApi;