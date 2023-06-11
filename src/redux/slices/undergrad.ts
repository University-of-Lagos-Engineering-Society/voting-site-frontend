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

    getMostBeautiful: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Most Beautiful";
        });
      },
    }),

    getMostInfluential: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Most Influential";
        });
      },
    }),

    getMostPopular: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Most Popular";
        });
      },
    }),

    getMostFashionableFemale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Most Fashionable(Female)";
        });
      },
    }),

    getMostFashionableMale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Most Fashionable(Male)";
        });
      },
    }),

    getCliqueOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Clique of the year";
        });
      },
    }),

    getTechPersonalityOfTheYearMale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee.category.name === "U-Tech personality of the year(Male)"
          );
        });
      },
    }),

    getTechPersonalityOfTheYearFemale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee.category.name === "U-Tech personality of the year(Female)"
          );
        });
      },
    }),

    getEmergingEntrepreneur: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Emerging Entrepreneur";
        });
      },
    }),

    getCreativeOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "U-Creative of the year";
        });
      },
    }),

    getULESSportPersonalityOfTheYearMale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee.category.name ===
            "U-ULES sport personality of the year(Male)"
          );
        });
      },
    }),

    getULESSportPersonalityOfTheYearFemale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee.category.name ===
            "U-ULES sport personality of the year(Female)"
          );
        });
      },
    }),
  }),
});

export const {
  useGetSocialiteOfTheYearQuery,
  useGetLifeOfThePartyQuery,
  useGetCliqueOfTheYearQuery,
  useGetCreativeOfTheYearQuery,
  useGetEmergingEntrepreneurQuery,
  useGetMostBeautifulQuery,
  useGetMostFashionableFemaleQuery,
  useGetMostFashionableMaleQuery,
  useGetMostHandsomeQuery,
  useGetMostInfluentialQuery,
  useGetMostPopularQuery,
  useGetTechPersonalityOfTheYearFemaleQuery,
  useGetTechPersonalityOfTheYearMaleQuery,
  useGetULESSportPersonalityOfTheYearFemaleQuery,
  useGetULESSportPersonalityOfTheYearMaleQuery,
} = undergradApi;
