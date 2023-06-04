import { baseApi as api } from './baseApi'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<LoginUserApiResponse, LoginUserApiArg>({
      query: (queryArg) => ({ url: `/auth/user/login`, method: 'POST', body: queryArg.user }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as amApiSlice }
export type LoginUserApiResponse = /** status 200 A user token */ AuthToken
export type LoginUserApiArg = {
  user: User
}
export type AuthToken = {
  accessToken: string
  refreshToken: string
  tokenType: string
  expires: number
}
export type User = {
  email: string
  pass: string
}
export const { useLoginUserMutation } = injectedRtkApi
