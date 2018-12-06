// Compiled using marko@4.13.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nx-web-doctor$0.0.1/routes/index/components/nav/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    nav_template = marko_loadTemplate(require.resolve("./")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    nav_tag = marko_loadTag(nav_template);

function render(input, out, __component, component, state) {
  var data = input;

  nav_tag({
      class: "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar top-nav-collapse",
      renderBody: function renderBody(out) {
        out.w("<div class=\"container\"><a class=\"navbar-brand\" href=\"\" target=\"_blank\"><strong>VAN DOCTOR</strong></a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link waves-effect waves-light\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link waves-effect waves-light\" href=\"\" target=\"_blank\">About Liao</a></li><li class=\"nav-item\"><a class=\"nav-link waves-effect waves-light\" href=\"\" target=\"_blank\">Free download</a></li><li class=\"nav-item\"><a class=\"nav-link waves-effect waves-light\" href=\"\" target=\"_blank\">Free tutorials</a></li></ul><ul class=\"navbar-nav nav-flex-icons\"><li class=\"nav-item\"><a href=\"\" class=\"nav-link waves-effect waves-light\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li><li class=\"nav-item\"><a href=\"\" class=\"nav-link waves-effect waves-light\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li><li class=\"nav-item\"><a href=\"\" class=\"nav-link border border-light rounded waves-effect waves-light\" target=\"_blank\"><i class=\"fa fa-github mr-2\"></i>Van Doctor</a></li></ul></div></div>");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nx-web-doctor$0.0.1/routes/index/components/nav/index.marko",
    tags: [
      "./"
    ]
  };
