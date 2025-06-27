import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const COURSE_API = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/course`;

export const courseApi = createApi({
    reducerPath: "courseApi",
    tagTypes: ['Refetch_Creator_Course', 'Refetch_Lecture'],
    baseQuery: fetchBaseQuery({
        baseUrl: COURSE_API,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: ({ courseTitle, category }) => ({
                url: "",
                method: "POST",
                body: { courseTitle, category }
            }),
            invalidatesTags: ['Refetch_Creator_Course']
        }),
        getSearchCourses: builder.query({
            query: ({ searchQuery, categories, sortByPrice }) => {
                // build a query string
                let queryString = `/search?query=${encodeURIComponent(searchQuery)}`

                // append category
                if (categories && categories.length > 0) {
                    const categoriesString = categories.map(encodeURIComponent).join(",");
                    queryString += `&categories=${categoriesString}`;
                }

                // append sortByPrice 

                if (sortByPrice) {
                    queryString += `&sortByPrice=${encodeURIComponent(sortByPrice)}`
                }

                return {
                    url: queryString,
                    method: "GET",
                }
            }
        }),
        getPublishedCourse: builder.query({
            query: () => ({
                url: "/published-courses",
                method: "GET"
            })
        }),
        getCreatorCourse: builder.query({
            query: () => ({
                url: "",
                method: "GET"
            }),
            providesTags: ['Refetch_Creator_Course']
        }),
        editCourse: builder.mutation({
            query: ({ formData, courseId }) => ({
                url: `/${courseId}`,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ['Refetch_Creator_Course']
        }),
        getCourseById: builder.query({
            query: (courseId) => ({
                url: `/${courseId}`,
                method: "GET"
            })
        }),
        createLecture: builder.mutation({
            query: ({ lectureTitle, courseId }) => ({
                url: `/${courseId}/lecture`,
                method: "POST",
                body: { lectureTitle }
            })
        }),
        getCourseLecture: builder.query({
            query: (courseId) => ({
                url: `/${courseId}/lecture`,
                method: "GET"
            }),
            providesTags: ['Refetch_Lecture']
        }),
        editLecture: builder.mutation({
            query: ({ lectureTitle, videoInfo, isPreviewFree, courseId, lectureId }) => ({
                url: `/${courseId}/lecture/${lectureId}`,
                method: "POST",
                body: { lectureTitle, videoInfo, isPreviewFree }
            }),
            invalidatesTags: ['Refetch_Lecture']
        }),
        removeLecture: builder.mutation({
            query: (lectureId) => ({
                url: `/lecture/${lectureId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Refetch_Lecture']
        }),
        getLectureById: builder.query({
            query: (lectureId) => ({
                url: `/lecture/${lectureId}`,
                method: "GET"
            })
        }),
        publishCourse: builder.mutation({
            query: ({ courseId, query }) => ({
                url: `/${courseId}?publish=${query}`,
                method: "PATCH"
            })
        }),
        removeCourse: builder.mutation({
            query: (courseId) => ({
                url: `/course/${courseId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Refetch_Creator_Course']
        })
    })
})

export const {
    useCreateCourseMutation,
    useGetSearchCoursesQuery,
    useGetPublishedCourseQuery,
    useGetCreatorCourseQuery,
    useEditCourseMutation,
    useGetCourseByIdQuery,
    useCreateLectureMutation,
    useGetCourseLectureQuery,
    useEditLectureMutation,
    useRemoveLectureMutation,
    useGetLectureByIdQuery,
    usePublishCourseMutation,
    useRemoveCourseMutation
} = courseApi;