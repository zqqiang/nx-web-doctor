// Compiled using marko@4.14.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nx-web-doctor$0.0.1/src/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    dashboard_template = marko_loadTemplate(require.resolve("./components/dashboard")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    dashboard_tag = marko_loadTag(dashboard_template),
    site_layout_template = marko_loadTemplate(require.resolve("./components/site-layout")),
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_layout_tag({
      styles: {
          renderBody: function renderBody(out) {
            out.w("<link rel=\"icon\" type=\"image/png\" href=\"/static/img/cloud.png\"><link rel=\"stylesheet\" type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css\"><link href=\"/static/style.css\" media=\"all\" rel=\"stylesheet\">");
          }
        },
      scripts: {
          renderBody: function renderBody(out) {
            out.w("<script src=\"/static/bundle.js\"></script>");
          }
        },
      title: {
          renderBody: function renderBody(out) {
            out.w("Van Doctor");
          }
        },
      body: {
          renderBody: function renderBody(out) {
            dashboard_tag({
                page: input.page,
                subpage: input.subpage
              }, out, __component, "10");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nx-web-doctor$0.0.1/src/index.marko",
    tags: [
      "./components/dashboard",
      "./components/site-layout"
    ]
  };
