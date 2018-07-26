exports.id = 0;
exports.modules = {

/***/ "./src/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);





function tweetsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { lista: [], tweetAtivo: {} };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (action.type === 'CARREGA_TWEETS') {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, state, {
            tweetAtivo: {},
            lista: action.tweets
        });
    }

    if (action.type === 'ADICIONA_TWEET') {
        state.lista = [action.novoTweet].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(state.lista));
    }

    if (action.type === 'REMOVE_TWEET') {
        var listaDeTweetsAtualizada = state.lista.filter(function (tweet) {
            return tweet._id !== action.idTweetQueVaiSerRemovido;
        });
        state.lista = listaDeTweetsAtualizada;
    }

    if (action.type === 'LIKE') {
        var _listaDeTweetsAtualizada = state.lista.filter(function (tweet) {
            if (tweet._id === action.idTweetLikeado) {
                var likeado = tweet.likeado,
                    totalLikes = tweet.totalLikes;


                if (tweet.likeado) {
                    tweet.likes = tweet.likes.filter(function (like) {
                        return like.usuario.login !== action.liker;
                    });
                } else {
                    tweet.likes = [{ usuario: { login: action.liker } }].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tweet.likes));
                }

                tweet.likeado = !likeado;
                tweet.totalLikes = likeado ? totalLikes - 1 : totalLikes + 1;
            }
            return tweet;
        });

        var tweetAtivoAtualizado = _listaDeTweetsAtualizada.find(function (tweet) {
            return tweet._id === state.tweetAtivo._id;
        });

        return {
            tweetAtivo: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, tweetAtivoAtualizado) || {},
            lista: _listaDeTweetsAtualizada
        };
    }

    if (action.type === 'REMOVE_TWEET_ATIVO') {
        state.tweetAtivo = {};
        // return Object.assign({}, state, {
        //     tweetAtivo: {}
        // })
    }

    if (action.type === 'ADD_TWEET_ATIVO') {
        state.tweetAtivo = action.tweetSelecionado;
    }

    return state;
}

function notificacaoReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (action.type === 'ADD_NOTIFICACAO') {
        state = action.notificacao;
    }
    if (action.type === 'REMOVE_NOTIFICACAO') {
        state = '';
    }
    return state;
}

function usuarioReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return state;
}

var configuraStore = function configuraStore(preloadedState) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"])({
        tweets: tweetsReducer,
        notificacao: notificacaoReducer,
        usuario: usuarioReducer
    }), preloadedState, Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a));
};
// window.store = store
/* harmony default export */ __webpack_exports__["a"] = (configuraStore);

/***/ })

};
//# sourceMappingURL=0.458f94e1a7e123773e07.hot-update.js.map