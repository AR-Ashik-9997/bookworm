/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Auth } from "@/types/globalTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const auth:Auth|null =JSON.parse(localStorage.getItem('auth')||"null");
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${auth?.accessToken}`); 
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["All"],
  endpoints: () => ({}),
});
