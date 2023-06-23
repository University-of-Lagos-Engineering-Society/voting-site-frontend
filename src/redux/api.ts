import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const BASE_URL = "https://ulawards-2e95d461af2c.herokuapp.com/";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
        return headers;
    }
});



export const api = createApi({
    baseQuery,
    endpoints: (builder) => ({
        
    }),
});




