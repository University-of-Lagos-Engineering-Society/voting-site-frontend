import { api } from "../api";

const gradApi = api.injectEndpoints({
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
          return nominee.category.name === "G-Socialite of the year";
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
          return nominee.category.name === "G-Life of the party";
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
          return nominee.category.name === "G-Most Handsome";
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
          return nominee.category.name === "G-Most Beautiful";
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
          return nominee.category.name === "G-Most Influential";
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
          return nominee.category.name === "G-Most Popular";
        });
      },
    }),

    getBestDressedFemale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Best dressed(Female)";
        });
      },
    }),

    getBestDressedMale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Best dressed(Male)";
        });
      },
    }),

    getCoupleOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Couple of the year";
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
          return nominee.category.name === "G-Tech personality of the year(Male)";
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
          return nominee.category.name === "G-Tech personality of the year(Female)";
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
          return nominee.category.name === "G-Emerging Entrepreneur";
        });
      },
    }),

    getStartupVisionaryAward: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Start-up visionary award";
        });
      },
    }),

    getSocialMediaPersonality: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Social Media Personality";
        });
      },
    }),

    getStudentEntertainerOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Student entertainer of the year";
        });
      },
    }),

    getMostVersatile: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Most Versatile";
        });
      },
    }),

    getSocialImpactAward: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Social Impact Award";
        });
      },
    }),

    getOutstandingAcademicPerformanceAward: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee.category.name === "G-Outstanding Academic Performance Award";
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
          return nominee.category.name === "G-ULES sport personality of the year";
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
          return nominee.category.name === "G-ULES sport personality of the year(Female)";
        });
      },
    })
  }),
});


export const { useGetSocialiteOfTheYearQuery,
  useGetLifeOfThePartyQuery,
  useGetCoupleOfTheYearQuery,
  useGetBestDressedFemaleQuery,
  useGetBestDressedMaleQuery,
  useGetMostVersatileQuery,
  useGetOutstandingAcademicPerformanceAwardQuery,
  useGetSocialImpactAwardQuery,
  useGetSocialMediaPersonalityQuery,
  useGetStartupVisionaryAwardQuery,
  useGetStudentEntertainerOfTheYearQuery,
  useGetEmergingEntrepreneurQuery,
  useGetMostBeautifulQuery,
  useGetMostHandsomeQuery,
  useGetMostInfluentialQuery,
  useGetMostPopularQuery,
  useGetTechPersonalityOfTheYearFemaleQuery,
  useGetTechPersonalityOfTheYearMaleQuery,
  useGetULESSportPersonalityOfTheYearFemaleQuery,
  useGetULESSportPersonalityOfTheYearMaleQuery
} = gradApi;
