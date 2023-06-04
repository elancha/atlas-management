const config = {
  schemaFile: "http://localhost:2000/docs/openapi.json",
  apiFile: "./src/store/baseApi.js",
  apiImport: "baseApi",
  exportName: "amApiSlice",
  outputFile: './src/store/amApiSlice.ts',
  hooks: true,
}

module.exports = config;
