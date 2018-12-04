// Compiled using marko@4.14.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nx-web-doctor$0.0.1/src/components/dashboard/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white\"><div class=\"container\"><div class=\"navbar-wrapper\"><a class=\"navbar-brand\" href=\"\">Van Doctor</a></div><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"sr-only\">Toggle navigation</span><span class=\"navbar-toggler-icon icon-bar\"></span><span class=\"navbar-toggler-icon icon-bar\"></span><span class=\"navbar-toggler-icon icon-bar\"></span></button><div class=\"collapse navbar-collapse justify-content-end\"><ul class=\"navbar-nav\"><li class=\"nav-item\"><a href=\"\" class=\"nav-link\"><i class=\"material-icons\">dashboard</i> Dashboard</a></li><li class=\"nav-item \"><a href=\"\" class=\"nav-link\"><i class=\"material-icons\">person_add</i> Register</a></li><li class=\"nav-item \"><a href=\"\" class=\"nav-link\"><i class=\"material-icons\">fingerprint</i> Login</a></li><li class=\"nav-item  active \"><a href=\"\" class=\"nav-link\"><i class=\"material-icons\">lock_open</i> Lock</a></li></ul></div></div></nav><div class=\"wrapper wrapper-full-page\"><div class=\"page-header lock-page header-filter\" style=\"background-image: url('../../static/img/lock.jpg')\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 ml-auto mr-auto\"><div class=\"card card-profile text-center\"><div class=\"card-header \"><div class=\"card-avatar\"><a href=\"\"><img class=\"img\" src=\"../../static/img/avatar.jpg\"></a></div></div><div class=\"card-body \"><h4 class=\"card-title\">Doctor Liao</h4><div class=\"form-group bmd-form-group\"><label for=\"exampleInput1\" class=\"bmd-label-floating\">Enter Question</label><input type=\"password\" class=\"form-control\" id=\"exampleInput1\"></div></div><div class=\"card-footer justify-content-center\"><a href=\"\" class=\"btn btn-rose btn-round\">Let's talk</a></div></div></div></div></div><footer class=\"footer\"><div class=\"container\"><nav class=\"float-left\"><ul><li><a href=\"\">Doctor Liao</a></li><li><a href=\"\">About Us</a></li><li><a href=\"\">Blog</a></li><li><a href=\"\">Licenses</a></li></ul></nav><div class=\"copyright float-right\">© <script>\n              document.write(new Date().getFullYear())\n          </script>, made with <i class=\"material-icons\">favorite</i> for a better life.</div></div></footer></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nx-web-doctor$0.0.1/src/components/dashboard/index.marko"
  };
