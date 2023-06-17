import { api } from "../api";

const gradApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSocialiteOfTheYearGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Socialite of the year";
        });
      },
    }),

    getLifeOfThePartyGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Life of the party";
        });
      },
    }),

    getMostHandsomeGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Most Handsome";
        });
      },
    }),

    getMostBeautifulGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Most Beautiful";
        });
      },
    }),

    getMostInfluentialGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Most Influential";
        });
      },
    }),

    getMostPopularGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Most Popular";
        });
      },
    }),

    getBestDressedFemaleGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Best dressed(Female)";
        });
      },
    }),

    getBestDressedMaleGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Best dressed(Male)";
        });
      },
    }),

    getCoupleOfTheYearGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Couple of the year";
        });
      },
    }),

    getTechPersonalityOfTheYearMaleGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee?.category?.name === "G-Tech personality of the year(Male)"
          );
        });
      },
    }),

    getTechPersonalityOfTheYearFemaleGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee?.category?.name === "G-Tech personality of the year(Female)"
          );
        });
      },
    }),

    getEmergingEntrepreneurGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Emerging Entrepreneur";
        });
      },
    }),

    getStartupVisionaryAwardGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Start-up visionary award";
        });
      },
    }),

    getSocialMediaPersonalityGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Social Media Personality";
        });
      },
    }),

    getStudentEntertainerOfTheYearGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Student entertainer of the year";
        });
      },
    }),

    getMostVersatileGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Most Versatile";
        });
      },
    }),

    getSocialImpactAwardGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "G-Social Impact Award";
        });
      },
    }),

    getOutstandingAcademicPerformanceAwardGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee?.category?.name === "G-Outstanding Academic Performance Award"
          );
        });
      },
    }),

    getULESSportPersonalityOfTheYearMaleGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee?.category?.name === "G-ULES sport personality of the year"
          );
        });
      },
    }),

    getULESSportPersonalityOfTheYearFemaleGrad: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return (
            nominee?.category?.name ===
            "G-ULES sport personality of the year(Female)"
          );
        });
      },
    }),
  }),
  // @ts-ignore
  overrideExisting: module.hot?.status() === "apply",
});


export const { useGetSocialiteOfTheYearGradQuery,
  useGetLifeOfThePartyGradQuery,
  useGetCoupleOfTheYearGradQuery,
  useGetBestDressedFemaleGradQuery,
  useGetBestDressedMaleGradQuery,
  useGetMostVersatileGradQuery,
  useGetOutstandingAcademicPerformanceAwardGradQuery,
  useGetSocialImpactAwardGradQuery,
  useGetSocialMediaPersonalityGradQuery,
  useGetStartupVisionaryAwardGradQuery,
  useGetStudentEntertainerOfTheYearGradQuery,
  useGetEmergingEntrepreneurGradQuery,
  useGetMostBeautifulGradQuery,
  useGetMostHandsomeGradQuery,
  useGetMostInfluentialGradQuery,
  useGetMostPopularGradQuery,
  useGetTechPersonalityOfTheYearFemaleGradQuery,
  useGetTechPersonalityOfTheYearMaleGradQuery,
  useGetULESSportPersonalityOfTheYearFemaleGradQuery,
  useGetULESSportPersonalityOfTheYearMaleGradQuery
} = gradApi;
