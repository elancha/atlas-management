import { createSlice } from '@reduxjs/toolkit'
import { defaultsDeep } from 'lodash'

const defaultState = {
  auth: {
    tokenInfo: null,
    userInfo: null,
    refreshToken: null,
    expires: null,
  },
  ui: {
    sidebarUnfoldable: true,
    sidebarShow: true,
    toasts: [],
  },
}

let persistedState = localStorage.getItem('app')

if( persistedState ) {
  persistedState = JSON.parse(persistedState)
} else {
  persistedState = {}
}

const initialState = defaultsDeep(persistedState, defaultState)

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Auth
    setToken: (state, action) => {
      const tokenInfo = action.payload;
      state.auth.tokenInfo = tokenInfo;
      state.auth.refreshToken = tokenInfo.refreshToken;
      state.auth.expires = Date.now() + 900*1000;


      state.auth.userInfo = {
        ...tokenInfo.userInfo,
      }
    },
    clearToken: (state) => {
      state.auth = defaultState.auth;
      state.core = defaultState.core;
    },



    // Toasts
    pushToast: (state, action) => {
      state.ui.toasts.push(action.payload);
    },
    clearToasts: (state, action) => {
      state.ui.toasts = [];
    }
  }
})

export const {
  // Auth
  setToken,
  clearToken,

  // UI
  setSidebarUnfoldable,
  setSidebarShow,
} = appSlice.actions

// Auth
export const getRefreshToken = (state) => state.app.auth.refreshToken
export const getToken = (state) => state.app.auth.tokenInfo?.accessToken
export const getUser = (state) => state.app.auth.userInfo
export const hasExpired = (state) => {
  if(!state.app.auth.userInfo) return true
  return Date.now() > state.app.auth.userInfo.exp * 1000
}

export default appSlice.reducer
