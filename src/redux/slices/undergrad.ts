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

    getRookieOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "Rookie of the year";
        });
      },
    }),

    getLifeOfTheParty: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Life of the party";
        });
      },
    }),

  



    getMostHandsome: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Most Handsome";
        });
      },
    }),














  }),
});

export const { useGetSocialiteOfTheYearQuery,
  useGetRookieOfTheYearQuery,
  useGetLifeOfThePartyQuery,
} = undergradApi;
