import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAlumno: build.query({
            query: (queryArg) => ({ url: `/alumnos/${queryArg.dni}` }),
        }),
        updateAlumno: build.mutation({
            query: (queryArg) => ({
                url: `/alumnos/${queryArg.dni}`,
                method: "PUT",
                body: queryArg.alumno,
            }),
        }),
        deleteAlumno: build.mutation({
            query: (queryArg) => ({
                url: `/alumnos/${queryArg.dni}`,
                method: "DELETE",
            }),
        }),
        getAlumnos: build.query({
            query: () => ({ url: `/alumnos` }),
        }),
        insertAlumno: build.mutation({
            query: (queryArg) => ({
                url: `/alumnos`,
                method: "POST",
                body: queryArg.alumno,
            }),
        }),
        loginUser: build.mutation({
            query: (queryArg) => ({
                url: `/auth/login`,
                method: "POST",
                body: queryArg.user,
            }),
        }),
    }),
    overrideExisting: false,
});
export { injectedRtkApi as amApiSlice };
export const { useGetAlumnoQuery, useUpdateAlumnoMutation, useDeleteAlumnoMutation, useGetAlumnosQuery, useInsertAlumnoMutation, useLoginUserMutation, } = injectedRtkApi;
