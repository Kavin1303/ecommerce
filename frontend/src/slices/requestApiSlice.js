import { REQUESTS_URL} from "../constants";
import { apiSlice } from "./apiSlice";


export const requestsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getRequests: builder.query({
        query: ({pageNumber}) =>({
            url: REQUESTS_URL,
            params: {
                pageNumber,
            },
        }),
        providesTags:['Requests'],
        keepUnusedDataFor: 5,
    }),
    getRequestDetail: builder.query({
        query:(requestId) => ({
            url: `${REQUESTS_URL}/${requestId}`,
        }),
        keepUnusedDataFor: 5,
    }),
    createRequest: builder.mutation({
        query:() => ({
            url: `${REQUESTS_URL}/mine`,
            method :'POST',
        }),
        invalidatesTags:['Requests'],
    }),
    updateRequest: builder.mutation({
        query:(data) =>({
            url:`${REQUESTS_URL}/${data.requestId}`,
            method:'PUT',
            body: data,
        }),
        invalidatesTags:['Requests'],
    }),
    deleteRequest: builder.mutation({
        query: (requestId) => ({
          url: `${REQUESTS_URL}/${requestId}`,
          method: 'DELETE',
        }),
        providesTags: ['Request'],
      }),
    getMyRequests: builder.query({
        query: () => ({
          url: `${REQUESTS_URL}/mine`,
        }),
        keepUnusedDataFor: 5,
      }),
})
});

export const {useGetRequestsQuery,
     useGetRequestDetailQuery, 
     useCreateRequestMutation,
     useUpdateRequestMutation,
     useDeleteRequestMutation,
     useGetMyRequestsQuery,
} = requestsApiSlice;