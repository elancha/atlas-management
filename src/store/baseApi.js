import { Mutex } from 'async-mutex'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { clearToken, setToken } from './appSlice';

// initialize an empty api service that we'll inject endpoints into later as needed
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: '/api/',
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState().app.auth.tokenInfo;

    if (token && endpoint !== 'refreshUser') {
      headers.set('Authorization', `Bearer ${token.accessToken}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  keepUnusedDataFor: Infinity,
  baseQuery: async (args, api, extraOptions) => {
    const { expires, refreshToken, userInfo } = api.getState().app.auth;

    // check if we should get a new token
    if(expires && refreshToken && expires < Date.now()) {

      // checking whether the mutex is locked
      if (!mutex.isLocked()) {

        const release = await mutex.acquire();

        // It seems that we have a refreshToken and an expire date. Let's see if
        // we have to refresh the credentials...
        const refreshResult = await baseQuery({
          url: '/auth/user/refresh',
          body: {
            refreshToken,
            email: userInfo.email,
          },
          method: 'POST',
        }, {
          ...api,
          endpoint: "refreshUser",
        }, extraOptions);

        if (refreshResult.data) {
          // store the new token
          api.dispatch(setToken(refreshResult.data));
        } else {
          api.dispatch(clearToken());
        }

        release();
      }
    }

    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    const result = await baseQuery({
      responseHandler: 'content-type', // https://github.com/reduxjs/redux-toolkit/pull/2363
      ...args,
    }, api, extraOptions);

    return result;
  },
  endpoints: () => ({}),
});