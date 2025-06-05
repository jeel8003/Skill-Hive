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
    useLoadUserMutation,
    useUpdateUserMutation
}=authApi;