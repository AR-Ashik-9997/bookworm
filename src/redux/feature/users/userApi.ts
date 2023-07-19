/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "@/redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["All"],
    }),
    loginUser: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),   
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,  
} = userApi;
