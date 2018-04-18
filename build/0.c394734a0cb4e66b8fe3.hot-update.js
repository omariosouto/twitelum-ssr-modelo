exports.id = 0;
exports.modules = {

/***/ "./src/server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser__ = __webpack_require__("cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_universal_fetch__ = __webpack_require__("universal-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_universal_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_universal_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__ = __webpack_require__("./src/server/ssr-helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Html__ = __webpack_require__("./src/components/Html/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store__ = __webpack_require__("./src/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack__ = __webpack_require__("react-loadable/webpack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json__ = __webpack_require__("./build/react-loadable.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json__);
var _jsxFileName = '/Users/soutomario/Desktop/ssr-test/react-charger-razzle/src/server/index.js';
// Coisas do Node



// Lib responsável por AJAX


// Helpers para o SSR


// Coisas do React




// Coisas da Aplicação



// Coisas do Redux



// Coisas do React Loadable (Componentes Assincronos)




var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// Cookies Support
server.use(__WEBPACK_IMPORTED_MODULE_1_cookie_parser___default()());

server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static("/Users/soutomario/Desktop/ssr-test/react-charger-razzle/public")).get('/*', function (request, resposta) {
  var status = 200;

  // 1 - Extrai a rota ativa
  var activeRoute = Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["c" /* getActiveRouteFromRoutes */])(request.url, __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */]);

  // 2 - Precisamos garantir que a rota 404 existe na aplicação.
  if (!activeRoute) {
    resposta.send("Você deve criar uma rota que represente a 404 com o path='*'.");
    return false;
  }

  // 3 - Define um redirect caso necessário
  if (activeRoute.props.render) {
    Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["a" /* doRedirect */])(activeRoute, resposta.redirect);
    return false;
  }

  // 4 - Extrai o componente
  Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["d" /* getCurrentComponent */])(activeRoute.props).then(function (component) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__ssr_helpers_js__["b" /* extractInitialData */])(component, request);
  }).then(function (_ref) {
    var component = _ref.component,
        initialData = _ref.initialData;

    // Setup da aplicação no server (obrigatório)
    var markup = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["StaticRouter"],
      { context: initialData, location: request.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })
    );
    // ./

    // Configuração do Redux (opcional)
    var store = Object(__WEBPACK_IMPORTED_MODULE_10__store__["a" /* default */])(initialData);
    markup = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_9_react_redux__["Provider"],
      { store: store, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      },
      markup
    );
    // ./

    // Configuração do React Loadable (obrigatória)
    var modules = [];
    markup = Object(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_react_loadable__["Capture"],
      { report: function report(moduleName) {
          return modules.push(moduleName);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      },
      markup
    ));
    var bundles = Object(__WEBPACK_IMPORTED_MODULE_12_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_13__build_react_loadable_json___default.a, modules);
    var chunks = bundles.filter(function (bundle) {
      return bundle.file.endsWith('.js');
    });
    assets.chunks = chunks;
    // ./


    resposta.status(status).send('<!doctype html>\n          ' + Object(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Html__["a" /* default */], { assets: assets, markup: markup, initialState: initialData, __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      }
    })));
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=0.c394734a0cb4e66b8fe3.hot-update.js.map