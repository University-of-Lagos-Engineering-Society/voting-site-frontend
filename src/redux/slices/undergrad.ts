import { transform } from "typescript";
import { api } from "../api";

const undergradApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSocialiteOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Socialite of the year";
        });
      },
    }),
    }),
    
});

export const {
    useGetSocialiteOfTheYearQuery,
} = undergradApi;
