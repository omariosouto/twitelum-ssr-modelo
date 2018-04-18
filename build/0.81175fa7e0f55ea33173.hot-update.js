exports.id = 0;
exports.modules = {

/***/ "./src/components/NavMenu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navMenu_css__ = __webpack_require__("./src/components/NavMenu/navMenu.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navMenu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__navMenu_css__);





var _jsxFileName = '/Users/soutomario/Desktop/ssr-test/react-charger-razzle/src/components/NavMenu/index.js';




var NavMenu = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(NavMenu, _Component);

    function NavMenu() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, NavMenu);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (NavMenu.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(NavMenu)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(NavMenu, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'nav',
                { className: 'navMenu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'ul',
                    { className: 'navMenu__lista', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'a',
                            { className: 'navMenu__link', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                }
                            },
                            'Bem vindo(a): ',
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('br', {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                                'strong',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 13
                                    }
                                },
                                this.props.usuario
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'a',
                            { className: 'navMenu__link', href: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            'P\xE1gina Inicial'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            'a',
                            { className: 'navMenu__link', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            },
                            'Hashtags'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        'li',
                        { className: 'navMenu__item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
                            { to: '/login', className: 'navMenu__link', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            'Logout'
                        )
                    )
                )
            );
        }
    }]);

    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NavMenu);

/***/ }),

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Home__ = __webpack_require__("./src/pages/Home/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_LoginPage__ = __webpack_require__("./src/pages/LoginPage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_PerfilPage__ = __webpack_require__("./src/pages/PerfilPage/index.js");






var _jsxFileName = '/Users/soutomario/Desktop/ssr-test/react-charger-razzle/src/routes.js';



// Páginas




// Código da autenticação


// import Loadable from 'react-loadable'
// const Home = Loadable({
//     loader: () => import('./pages/Home'),
//     loading: () => null,
//   });

function estaAutenticado() {
    var navegador = typeof window !== 'undefined';
    if (navegador) {
        if (localStorage.getItem('TOKEN')) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

var PrivateRoute = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(PrivateRoute, _Component);

    function PrivateRoute() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, PrivateRoute);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PrivateRoute.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PrivateRoute)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(PrivateRoute, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            if (estaAutenticado()) {
                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }));
            } else {
                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Redirect"], { to: '/login', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                });
            }
        }
    }]);

    return PrivateRoute;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

var Roteamento = function Roteamento() {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Switch"],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 44
            }
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(PrivateRoute, { path: '/', component: __WEBPACK_IMPORTED_MODULE_8__pages_Home__["a" /* default */], exact: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
            }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], { path: '/login', component: __WEBPACK_IMPORTED_MODULE_9__pages_LoginPage__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 46
            }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], { path: '/usuarios/:login', component: __WEBPACK_IMPORTED_MODULE_10__pages_PerfilPage__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 47
            }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], { path: '*', component: function component() {
                return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    },
                    'P\xE1gina 404'
                );
            }, __source: {
                fileName: _jsxFileName,
                lineNumber: 48
            }
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Roteamento);

/***/ }),

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

/***/ }),

/***/ "./src/server/ssr-helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getActiveRouteFromRoutes;
/* harmony export (immutable) */ __webpack_exports__["a"] = doRedirect;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCurrentComponent;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return extractInitialData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);






function getActiveRouteFromRoutes(url, router) {
  var routesArray = Object(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])().props.children.map(function (route) {
    return route;
  });

  var routesArraySample = routesArray.map(function (route) {
    console.log(route);
    return {
      path: route.props.path
    };
  });

  console.log(Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["matchPath"])(url, routesArraySample));
  // let activeRoute = routesArray.find( route => { 
  //   let currentPath = route.props.path
  //   const urlArray = url.split('/')
  //   // console.log(currentPath.split('/'))
  //   // console.log(urlArray)

  //   // const currentRouteUrl = currentPath.split('/').reduce((previousValue, currentValue, currentIndex) => {
  //   //   if(currentIndex > 0) {
  //   //       console.log(previousValue, previousValue.replace('/') === urlArray[currentIndex - 1])

  //   //     return previousValue + '/' + currentValue
  //   //   }
  //   //   return previousValue
  //   // }, '')

  //   console.log('_____')
  //   // console.log(currentRouteUrl, route.props.path)


  //   return currentPath.match(new RegExp(`${url}`)) ? route : false
  // })

  // if(!activeRoute) { // Set 404 Route
  //     activeRoute = routesArray.find( route => route.props.path.match(/\*/) ? route : false )
  // }

  return function () {};
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

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

};
//# sourceMappingURL=0.81175fa7e0f55ea33173.hot-update.js.map