import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

function tweetsReducer(state = { lista: [], tweetAtivo: {} }, action = {}) {
    if(action.type === 'CARREGA_TWEETS') {
        state.lista = action.tweets
    }

    if(action.type === 'ADICIONA_TWEET') {
        state.lista = [action.novoTweet, ...state.lista]
    }

    if(action.type === 'REMOVE_TWEET') {
        const listaDeTweetsAtualizada = state.lista.filter( (tweet) => tweet._id !== action.idTweetQueVaiSerRemovido )
        state.lista = listaDeTweetsAtualizada
    }
    
    if(action.type === 'LIKE') {
        const listaDeTweetsAtualizada = state.lista.filter((tweet) => {
            if(tweet._id === action.idTweetLikeado) {
                const { likeado, totalLikes } = tweet

                if(tweet.likeado) {
                    tweet.likes = tweet.likes.filter( (like) => like.usuario.login !== action.liker )
                } else {
                    tweet.likes = [{ usuario: { login: action.liker } }, ...tweet.likes]
                }

                tweet.likeado = !likeado
                tweet.totalLikes = likeado ? totalLikes - 1 : totalLikes + 1
            }
            return tweet
        })

        const tweetAtivoAtualizado = listaDeTweetsAtualizada
                                        .find((tweet) => tweet._id === state.tweetAtivo._id)

        return {
            tweetAtivo: { ...tweetAtivoAtualizado } || {},
            lista: listaDeTweetsAtualizada
        }
    }


    if(action.type === 'REMOVE_TWEET_ATIVO') {
        state.tweetAtivo = {}
        // return Object.assign({}, state, {
        //     tweetAtivo: {}
        // })
    }

    if(action.type === 'ADD_TWEET_ATIVO') {
        state.tweetAtivo = action.tweetSelecionado
    }

    return state
}

function notificacaoReducer(state = '', action = {}) {
    if(action.type === 'ADD_NOTIFICACAO') {
        state = action.notificacao
    }
    if(action.type === 'REMOVE_NOTIFICACAO') {
        state = ''
    }
    return state
}

function usuarioReducer(state = {}, action = {}) {
    return state
}

const configuraStore = (preloadedState) => {
    return createStore(
        combineReducers({
                tweets: tweetsReducer,
                notificacao: notificacaoReducer,
                usuario: usuarioReducer
        }),
        preloadedState,
        applyMiddleware(
            thunk
        )
    )
}
// window.store = store
export default configuraStore