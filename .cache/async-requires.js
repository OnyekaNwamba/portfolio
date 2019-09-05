// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/onyeka/Documents/me/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/onyeka/Documents/me/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/onyeka/Documents/me/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/onyeka/Documents/me/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/onyeka/Documents/me/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/onyeka/Documents/me/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/onyeka/Documents/me/.cache/layouts/index.js")
}