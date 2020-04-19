import React, { Component } from 'react';
import './index.scss';

class Filters extends Component {

    filterByTradeType = (TYPE) => {
        this.props.filterByTradeType(TYPE)
    }

    render() {
        return (
            <div className="filter-menu">

                <div className="filter" onClick={(e) => this.props.filterByTradeType('ALL')}>
                    Show All
                </div>

                <div className="filter" onClick={(e) => this.props.filterByTradeType('SHORT NAKED PUT')}>
                    Short Naked Puts
                </div>

                <div className="filter" onClick={(e) => this.props.filterByTradeType('LONG NAKED PUT')}>
                    Long Naked Puts
                </div>

                <div className="filter" onClick={(e) => this.props.filterByTradeType('SHORT STRADDLE')}>
                    Short Straddle
                </div>

                <div className="filter" onClick={(e) => this.props.filterByTradeType('PUT CREDIT SPREAD')}>
                    Put Credit Spreads
                </div>

                <div className="filter" onClick={(e) => this.props.filterByTradeType('SHORT IRON CONDOR')}>
                    Short Iron Condors
                </div>

                <div className="filter" onClick={(e) => this.props.filterByTradeType('COVERED CALL')}>
                    Covered Calls
                </div>

            </div>
        )
    }
}

export default Filters;