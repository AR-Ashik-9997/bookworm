/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "@/redux/api/apiSlice";
import { IBook } from "@/types/globalTypes";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBooks: builder.mutation({
      query: ({ data }) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    getBooks: builder.query({
      query: (searchTerm) => `/books/?searchTerm=${searchTerm}`,
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),
    updateBook: builder.mutation<IBook, Partial<IBook>>({
      query: ({ _id, ...data }) => ({
        url: `/books/${_id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
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
  useDeleteBookMutation,
} = bookApi;
