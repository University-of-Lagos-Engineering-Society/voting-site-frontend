import { api } from "../api";

const generalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getULESTrailblazerAward: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "ULES Trailblazer Award";
        });
      },
    }),

    getULESVolunteerOfTheYearAward: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "ULES Volunteer of the year";
        });
      },
    }),

    getULESPersonOfTheYearAward: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "UULES Person of the year";
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
          return nominee?.category?.name === "Rookie of the year";
        });
      },
    }),

    getSophomoreOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Sophomore of the year";
        });
      },
    }),

    getFaceOfYearThree: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of year 3";
        });
      },
    }),

    getFaceOfYearFour: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of year 4";
        });
      },
    }),

    getFinalistOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Finalist of the year";
        });
      },
    }),

    getMVPOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "MVP of the year";
        });
      },
    }),

    getExcoOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Exco of the year";
        });
      },
    }),

    getExcoBodytOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Exco body of the year(Department)";
        });
      },
    }),

    getLecturerOfTheYear: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Lecturer of the year";
        });
      },
    }),

    getFaceOfDepartmentCEG: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-CEG";
        });
      },
    }),

    getFaceOfDepartmentCHG: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-CHG";
        });
      },
    }),

    getFaceOfDepartmentCPE: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-CPE";
        });
      },
    }),

    getFaceOfDepartmentEEG: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-EEG";
        });
      },
    }),

    getFaceOfDepartmentMEG: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-MEG";
        });
      },
    }),

    getFaceOfDepartmentMME: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-MME";
        });
      },
    }),

    getFaceOfDepartmentPGG: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-PGG";
        });
      },
    }),

    getFaceOfDepartmentSVY: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-SVY";
        });
      },
    }),

    getFaceOfDepartmentSSG: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-SSG";
        });
      },
    }),

    getFaceOfDepartmentBME: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "Face of Department-BME";
        });
      },
    }),

    getRookieOfTheYearFemale: builder.query<any, void>({
      query: () => {
        return {
          url: `/nominees`,
          method: "GET",
        };
      },

      transformResponse: (response: any) => {
        return response.filter((nominee: any) => {
          return nominee?.category?.name === "ROOKIE OF THE YEAR(FEMALE)";
        });
      },
    }),
  }),
  // @ts-ignore
  overrideExisting: module.hot?.status() === "apply",
});

export const {
    useGetExcoBodytOfTheYearQuery,
    useGetExcoOfTheYearQuery,
    useGetFaceOfDepartmentBMEQuery,
    useGetFaceOfDepartmentCEGQuery,
    useGetFaceOfDepartmentCHGQuery,
    useGetFaceOfDepartmentCPEQuery,
    useGetFaceOfDepartmentEEGQuery,
    useGetFaceOfDepartmentMEGQuery,
    useGetFaceOfDepartmentMMEQuery,
    useGetFaceOfDepartmentPGGQuery,
    useGetFaceOfDepartmentSSGQuery,
    useGetFaceOfDepartmentSVYQuery,
    useGetFaceOfYearFourQuery,
    useGetFaceOfYearThreeQuery,
    useGetFinalistOfTheYearQuery,
    useGetLecturerOfTheYearQuery,
    useGetMVPOfTheYearQuery,
    useGetRookieOfTheYearQuery,
    useGetRookieOfTheYearFemaleQuery,
    useGetSophomoreOfTheYearQuery,
    useGetULESPersonOfTheYearAwardQuery,
    useGetULESTrailblazerAwardQuery,
    useGetULESVolunteerOfTheYearAwardQuery
} = generalApi;