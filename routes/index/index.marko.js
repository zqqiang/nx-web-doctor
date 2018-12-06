// Compiled using marko@4.13.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nx-web-doctor$0.0.1/routes/index/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    nav_template = marko_loadTemplate(require.resolve("./components/nav")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    nav_tag = marko_loadTag(nav_template),
    site_layout_template = marko_loadTemplate(require.resolve("../../components/site-layout")),
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_layout_tag({
      renderBody: function renderBody(out) {
        nav_tag({}, out, __component, "1");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nx-web-doctor$0.0.1/routes/index/index.marko",
    tags: [
      "./components/nav",
      "../../components/site-layout"
    ]
  };
