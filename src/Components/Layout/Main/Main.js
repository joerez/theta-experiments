import React, { Component } from 'react';
import Trades from '../Trades/Trades';
import Filters from '../Filters/Filters';
import dummyData from '../../../dummyData.json';
import './Main.scss';

class Main extends Component {

    state = {
        trades: []
    }

    componentDidMount() {
        this.getAllTrades();
    }

    getAllTrades = () => {
        const trades = [];

        dummyData.data.thots.forEach(trade => {
            if (trade.Trade) {
                trades.push(trade);
            }
        });

        this.setState({
            trades: trades
        })
    }

    filterByTradeType = (TYPE) => {

        this.setState({
            trades: []
        }, () => {
            const trades = [];

            if (TYPE === 'ALL') {
                this.getAllTrades();
            } else {
                dummyData.data.thots.forEach(trade => {
    
                    if (trade.Trade && trade.Trade.type === TYPE) {
                        trades.push(trade);
                    }
                })
        
                this.setState({
                    trades: trades
                })    
            }    
        })
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <div>Filter Menu</div>
                    <Filters filterByTradeType={this.filterByTradeType} />
                    <div>Trades</div>
                    <Trades trades={this.state.trades} />
                </div>
            </div>
        )
    }
}

export default Main;