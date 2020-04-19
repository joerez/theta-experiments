import React, { Component } from 'react';

class Filters extends Component {

    filterByTradeType = (TYPE) => {
        this.props.filterByTradeType(TYPE)
    }

    render() {
        return (
            <div>
                Filter Menu

                <div onClick={(e) => this.props.filterByTradeType('ALL')}>
                    Show All
                </div>

                <div onClick={(e) => this.props.filterByTradeType('SHORT NAKED PUT')}>
                    Short Naked Puts
                </div>
            </div>
        )
    }
}

export default Filters;