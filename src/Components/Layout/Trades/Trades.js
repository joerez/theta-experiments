import React, { Component } from 'react';
import Trade from './Trade';

import './index.scss';

class Trades extends Component {

    componentDidMount() {
        console.log('trades:', this.props.trades);
    }

    render() { 
        return (
            <div className="trade-container">
                Trades
                {this.props.trades && this.props.trades.map((trade) => (
                    <Trade trade={trade} key={trade.guid} />
                ))}
            </div>
        );
    }
}
 
export default Trades;