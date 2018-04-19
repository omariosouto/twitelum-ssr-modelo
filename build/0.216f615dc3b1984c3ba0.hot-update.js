exports.id = 0;
exports.modules = {

/***/ "./src/server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__("cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_universal_fetch__ = __webpack_require__("universal-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_universal_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_universal_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ssr_helpers_js__ = __webpack_require__("./src/server/ssr-helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Html__ = __webpack_require__("./src/components/Html/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store__ = __webpack_require__("./src/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_loadable_webpack__ = __webpack_require__("react-loadable/webpack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_loadable_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_loadable_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__build_react_loadable_json__ = __webpack_require__("./build/react-loadable.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__build_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__build_react_loadable_json__);

var _jsxFileName = '/Users/soutomario/Desktop/twitelum-ssr-modelo/src/server/index.js';
// Coisas do Node



// Lib responsável por AJAX


// Helpers para o SSR


// Coisas do React




// Coisas da Aplicação



// Coisas do Redux



// Coisas do React Loadable (Componentes Assincronos)




var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_1_express___default()();

// Cookies Support
server.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());

server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static("/Users/soutomario/Desktop/twitelum-ssr-modelo/public")).get('/*', function (request, resposta) {
  var status = 200;

  // 1 - Extrai a rota ativa
  var activeRoute = Object(__WEBPACK_IMPORTED_MODULE_4__ssr_helpers_js__["b" /* extractActiveRouteInfoFromRoutes */])(request.url, __WEBPACK_IMPORTED_MODULE_9__routes__["a" /* default */]);

  // 2 - Precisamos garantir que a rota 404 existe na aplicação.
  if (!activeRoute) {
    resposta.send("Você deve criar uma rota que represente a 404 com o path='*'.");
    return false;
  }

  // 3 - Define um redirect caso necessário
  if (activeRoute.props.render) {
    Object(__WEBPACK_IMPORTED_MODULE_4__ssr_helpers_js__["a" /* doRedirect */])(activeRoute, resposta.redirect);
    return false;
  }

  // 4 - Extrai o componente
  Object(__WEBPACK_IMPORTED_MODULE_4__ssr_helpers_js__["d" /* getCurrentComponent */])(activeRoute.props).then(function (component) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__ssr_helpers_js__["c" /* extractInitialData */])(component, request);
  }).then(function (_ref) {
    var component = _ref.component,
        initialData = _ref.initialData;

    // Setup da aplicação no server (obrigatório)
    var markup = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["StaticRouter"],
      { context: initialData, location: request.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      },
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })
    );
    // ./

    // Configuração do Redux (opcional)
    var storeInicial = Object(__WEBPACK_IMPORTED_MODULE_11__store__["a" /* default */])(); // Pega o esqueleto da store do redux
    var store = Object(__WEBPACK_IMPORTED_MODULE_11__store__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, storeInicial.getState(), initialData)); // Cria a store, somente alterando o dado passado, mas mantendo o esqueleto

    // Essa alteração deve ser feita, somente por conta do redux estar sendo aplicado no projeto
    initialData = store.getState();

    markup = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_10_react_redux__["Provider"],
      { store: store, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      },
      markup
    );
    // ./

    // Configuração do React Loadable (obrigatória)
    var modules = [];
    markup = Object(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_12_react_loadable__["Capture"],
      { report: function report(moduleName) {
          return modules.push(moduleName);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      },
      markup
    ));
    var bundles = Object(__WEBPACK_IMPORTED_MODULE_13_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_14__build_react_loadable_json___default.a, modules);
    var chunks = bundles.filter(function (bundle) {
      return bundle.file.endsWith('.js');
    });
    assets.chunks = chunks;
    // ./


    resposta.status(status).send('<!doctype html>\n          ' + Object(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Html__["a" /* default */], { assets: assets, markup: markup, initialState: initialData, __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      }
    })));
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/server/ssr-helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extractActiveRouteInfoFromRoutes;
/* harmony export (immutable) */ __webpack_exports__["a"] = doRedirect;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCurrentComponent;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extractInitialData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);






function extractActiveRouteInfoFromRoutes(url, router) {
  var routesArray = Object(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])().props.children.map(function (route) {
    return route;
  });

  var activeRoute = routesArray.find(function (route, index) {
    var routeInfoOnly = { path: route.props.path, exact: route.props.exact };
    var checkPathWithCurrentRoute = Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["matchPath"])(url, routeInfoOnly);
    if (checkPathWithCurrentRoute) {
      return route;
    }

    return false;
  });

  if (!activeRoute) {
    // Set 404 Route
    activeRoute = routesArray.find(function (route) {
      return route.props.path.match(/\*/) ? route : false;
    });
  }

  return activeRoute;
}

function doRedirect(activeRoute, redirect) {
  if (activeRoute.props.render().props.to) {
    redirect(activeRoute.props.render().props.to);
  }
}

function getCurrentComponent(_ref) {
  var component = _ref.component;


  if (component.preload) {
    // Load Async
    return component.preload().then(function (component) {
      return component.default;
    });
  } else {
    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve) {
      // Load Sync
      resolve(component);
    });
  }
}

var extractInitialData = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(component, request) {
    var initialData;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initialData = {};
            // console.log('extractInitialData', component)

            if (!component.getInitialData) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return component.getInitialData(request);

          case 4:
            initialData = _context.sent;

          case 5:
            return _context.abrupt('return', {
              component: component,
              initialData: initialData
            });

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function extractInitialData(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

};
//# sourceMappingURL=0.216f615dc3b1984c3ba0.hot-update.js.map