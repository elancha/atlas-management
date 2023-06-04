"use strict";
exports.__esModule = true;
exports.useLoginUserMutation = exports.amApiSlice = void 0;
var baseApi_1 = require("./baseApi");
var injectedRtkApi = baseApi_1.baseApi.injectEndpoints({
    endpoints: function (build) { return ({
        loginUser: build.mutation({
            query: function (queryArg) { return ({ url: "/auth/user/login", method: 'POST', body: queryArg.user }); }
        })
    }); },
    overrideExisting: false
});
exports.amApiSlice = injectedRtkApi;
exports.useLoginUserMutation = injectedRtkApi.useLoginUserMutation;
