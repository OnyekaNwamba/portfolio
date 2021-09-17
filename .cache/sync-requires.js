// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/onyeka/Documents/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/onyeka/Documents/portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/onyeka/Documents/portfolio/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/onyeka/Documents/portfolio/.cache/json/layout-index.json"),
  "404.json": require("/Users/onyeka/Documents/portfolio/.cache/json/404.json"),
  "index.json": require("/Users/onyeka/Documents/portfolio/.cache/json/index.json"),
  "404-html.json": require("/Users/onyeka/Documents/portfolio/.cache/json/404-html.json")
}