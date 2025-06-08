import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { userLoggedin } from "../authSlice"

const USER_API="http://localhost:3000/api/v1/user/"

export const authApi=createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include',

    })
    ,
    endpoints:(builder)=>{
        return {
            registerUser:builder.mutation({
                query:(userData)=>({

                        url:"register",
                        method:"POST",
                        body:userData
                    
                }),
            }),
            loadUser:builder.mutation({
                query:()=>({
                    url:"profile",
                    method:"GET"
                }),
                async onQueryStarted(arg,{queryFulfilled,dispatch}) {
                    try {
                        const result=await queryFulfilled;
                        dispatch(userLoggedin({user:result.data.user}))
                    } catch (error) {
                        console.error("Error loading user:", error);
                    }
                }
            }),
            loginUser:builder.mutation({
                query:(userData)=>({
                    
                        url:"login",
                        method:"POST",
                        body:userData
                    
                }),
                async onQueryStarted(arg,{queryFulfilled,dispatch}){
                    try {
                        const result=await queryFulfilled;
                        dispatch(userLoggedin({user:XPathResult.data.user}))
                    } catch (error) {
                        
                    }
                }
            }),
            loadUser: builder.query({
                query: () => ({
                    url:"profile",
                    method:"GET"
                }),
                async onQueryStarted(_, {queryFulfilled, dispatch}) {
                    try {
                        const result = await queryFulfilled;
                        dispatch(userLoggedIn({user:result.data.user}));
                    } catch (error) {
                        console.log(error);
                    }
                }
            }),
            logoutUser:builder.mutation({
                query:()=>({
                    url:"logout",
                    method:"GET"
                }),
                async onQueryStarted(arg,{queryFulfilled,dispatch}) {
                    try {
                        const result=await queryFulfilled;
                        dispatch(userLoggedin({user:null}))
                    } catch (error) {
                        console.error("Error logging out user:", error);
                    }
                }
            }),
            
            updateUser:builder.mutation({
                query:(formdata)=>({
                    url:"profile/update",
                    method:"PUT",
                    body:formdata,
                    
                    credentials:"include"

                })
            })
            
        }
    }
})
export const{
    useRegisterUserMutation,
    useLoginUserMutation,
    useLoadUserQuery,
    useUpdateUserMutation,
    useLogoutUserMutation
}=authApi;