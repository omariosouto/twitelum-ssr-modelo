import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Páginas
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import PerfilPage from './pages/PerfilPage';

// Código da autenticação
import { Redirect } from 'react-router-dom'

// import Loadable from 'react-loadable'
// const Home = Loadable({
//     loader: () => import('./pages/Home'),
//     loading: () => null,
//   });

function estaAutenticado() {
    const navegador = typeof window !== 'undefined';
    if(navegador) {
        if(localStorage.getItem('TOKEN')) {
            return true
        } else {
            return false
        }
    }
    return true
}

class PrivateRoute extends Component {
    render() {
        const props = this.props

        if(estaAutenticado()) {
            return ( <Route {...props} /> )
        } else {
            return ( <Redirect to="/login"/> )
        }
    }
}

const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute path="/" component={Home} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/usuarios/:login" component={PerfilPage} />
            <Route path="*" component={ () => (<div>Página 404</div>) } />
        </Switch>
    )
}

export default Roteamento