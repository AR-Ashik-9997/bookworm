/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "@/redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),      
    }),
  }),
});

export const {useCreateUserMutation} = userApi;
