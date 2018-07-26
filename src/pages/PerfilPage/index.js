import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PerfilPage extends Component {
    
    constructor(props) {
        super()
        console.log('Rodou em')
        this.state = {
            login: props.match.params.login || '',
        }
    }

    static async getInitialData(infosDoRequest) {
        return {
            usuario: await fetch(`https://twitelum-api.herokuapp.com/usuarios/${infosDoRequest.params.login}`).then(res => res.json()),
            tweets: await fetch(`https://twitelum-api.herokuapp.com/usuarios/${infosDoRequest.params.login}/tweets`).then(res => res.json()),
        }
    }

    render() {
        return (
            <div>
                { this.state.login }
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default PerfilPage