import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import SearchForm from './SearchForm'
import CardList from './CardList'
import CurveGraph from './CurveGraph'
import DeckCards from './DeckCards'

const server = process.env.REACT_APP_API_URL

class CardView extends Component {

    componentDidMount = () => {
        axios.get(server + '/users/1/decks/1/cards')
            .then(data => {
                console.log(data)
            })
    }

    render = () =>
        <div className='container'>
            <div className="row" >
                <div className='col-8 border'>
                    <div className='row'>
                        <div className='col-5'>
                            <DeckCards />
                        </div>
                        <div className='col-7'>
                            <CurveGraph />
                        </div>
                    </div>
                </div>
                <div className="col-4 border">
                    <h2
                        className="navbar-brand">
                        Search Magic Cards
                    </h2>
                    <SearchForm />
                    <CardList foundCards = {this.props.cards} />
                </div>
            </div>
        </div>
}

const mapStateToProps = ({ cards }) => ({ cards })

export default connect(mapStateToProps, null)(CardView)
