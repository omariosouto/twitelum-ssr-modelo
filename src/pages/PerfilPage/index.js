import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PerfilPage extends Component {
    
    constructor(props) {
        super()

        this.state = {
            login: props.match.params.login || ''
        }
        console.log(props)
    }

    static async getInitialData(infosDoRequest) {
        return {
            tweets: { 
                lista: await fetch('https://twitelum-api.herokuapp.com/tweets').then(res => res.json()),
                tweetAtivo: {}
            }
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