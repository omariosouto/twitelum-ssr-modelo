import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../containers/TweetPadrao'

import Modal from '../../components/Modal'
import PropTypes from 'prop-types'

import * as TweetsAPI from '../../api/TweetsAPI'

class Home extends Component {
  constructor(props) {
    super()
    this.state = {
        novoTweet: '',
        tweetAtivo: {},
        tweets: []
    }

    this.adicionaTweet = this.adicionaTweet.bind(this)
  }

  componentDidMount() {
    this.context.store.subscribe(() => {
        console.log('Subscribe executou')
        this.setState({
            tweets: this.context.store.getState().tweets.lista,
            tweetAtivo: this.context.store.getState().tweets.tweetAtivo
        })
    })
    this.context.store.dispatch(TweetsAPI.carrega())
  }

  adicionaTweet(event) {
    event.preventDefault()
    this.context.store.dispatch(TweetsAPI.adiciona(this.state.novoTweet))
    this.setState({
        novoTweet: ''
    })
  }

  abreModalParaTweet = (event, IDtweetSelecionado) => {
    const isTweetFooter = event.target.closest('.tweet__footer')

    
    if(isTweetFooter) return false
    
    
    const tweetSelecionado = this.state.tweets.find( tweet => tweet._id === IDtweetSelecionado  )

    console.log(tweetSelecionado, this.state)
    
    this.context.store.dispatch({ type: 'ADD_TWEET_ATIVO', tweetSelecionado  })
  }

  fechaModal = (event) => {
    const isModal = event.target.closest('.widget')
    if(!isModal) {
        console.log('Fecha o modal')
        this.context.store.dispatch({ type: 'REMOVE_TWEET_ATIVO' })
    }
  }

  render() {
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                  <form className="novoTweet" onSubmit={ this.adicionaTweet }>
                      <div className="novoTweet__editorArea">
                          <span
                              className={`
                                  novoTweet__status
                                  ${ this.state.novoTweet.length > 140
                                    ? 'novoTweet__status--invalido' : '' }
                              `}>
                              { this.state.novoTweet.length }/140
                          </span>
                          <textarea
                              className="novoTweet__editor"
                              value={ this.state.novoTweet }
                              onInput={ (event) => this.setState({ novoTweet: event.target.value }) }
                              placeholder="O que está acontecendo?">
                          </textarea>
                      </div>
                      <button className="novoTweet__envia"
                              disabled={ this.state.novoTweet.length > 140 ? true : false }
                              type="submit">
                          Tweetar
                      </button>
                  </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        { this.state.tweets.length === 0 ? 'Nenhum tweet encontrado :(' : '' }
                        { this.state.tweets.map(
                            (tweetInfo, index) =>
                                <Tweet
                                    key={tweetInfo._id}
                                    texto={tweetInfo.conteudo}
                                    handleAbreModalParaTweet={(event) => this.abreModalParaTweet(event,tweetInfo._id)}
                                    tweetInfo={tweetInfo}/>
                            )
                        }
                    </div>
                </Widget>
            </Dashboard>
        </div>

        <Modal fechaModal={this.fechaModal} isAberto={!!this.state.tweetAtivo._id}>
            <Widget>
                <Tweet
                    key={this.state.tweetAtivo._id}
                    texto={this.state.tweetAtivo.conteudo || ''}
                    tweetInModal={true}
                    tweetInfo={this.state.tweetAtivo}/>
            </Widget>
        </Modal>

        { this.context.store.getState().notificacao &&
            <div className="notificacaoMsg">
                { this.context.store.getState().notificacao }
            </div>
        }
      </Fragment>
    );
  }
}

Home.contextTypes = {
    store: PropTypes.object.isRequired
}

export default Home;
