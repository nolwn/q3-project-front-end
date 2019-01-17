import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchForm from './SearchForm'
import CardList from './CardList'
import CurveGraph from './CurveGraph'
import DeckCards from './DeckCards'

class CardView extends Component {
    // componentsDidMount = () => {
    //
    // }
    render = () =>
        <div className='container'>
            <div className="row" >
                <div className='col-8 border'>
                    <div className='row'>
                        <div className='col-4'>
                            <DeckCards />
                        </div>
                        <div className='col-8'>
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
