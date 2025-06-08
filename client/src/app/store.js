import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/features/api/authApi.js";
import rootReducer from "./rootReducer.js";
import { courseApi } from "@/features/api/courseApi.js";

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware,courseApi.middleware)
})


//IF refresh the browser it have to fetch the user
export const setupStore = () => {
    if (typeof window !== 'undefined') {
        appStore.dispatch(authApi.endpoints.loadUser.initiate());
    }
    return appStore;
};

const initialApp=async()=>{
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetsch:true}))
}
initialApp().catch((error) => {
    console.error("Error initializing app store:", error);
});

