/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "@/redux/api/apiSlice";
import { IBook } from "@/types/globalTypes";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postBooks: builder.mutation({
      query: ({ data }) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
    updateBook: builder.mutation<IBook, Partial<IBook>>({
      query: ({_id,...data}) => ({
        url: `/books/${_id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ['comments'],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostBooksMutation,
  useUpdateBookMutation,
} = bookApi;
