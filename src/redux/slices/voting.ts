import { api } from "../api";

const votingApi = api.injectEndpoints({
    endpoints: (builder) => ({
        vote: builder.mutation<any, any>({
            query: (body: any) => {
                return {
                  url: `/votes/vote`,
                  method: "POST",
                  body,
                };
            }
        }),
    }),
});

export const { useVoteMutation } = votingApi;
