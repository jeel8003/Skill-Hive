import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";
import authSlice from "@/features/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer,

    auth: authSlice
})

export default rootReducer