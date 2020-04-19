import React, { Component } from 'react';
import * as moment from 'moment';

class Trade extends Component {


    render() { 
        const trade = this.props.trade.Trade
        const user = this.props.trade.User
        console.log(trade, user)

        return (
            <div className="trade">
                <p>User: {user.username}</p>
                <p>Type: {trade.type}</p>
                <p>Ticker: {trade.symbol}</p>
                <p>Expire Date: {moment(trade.expiry_date).fromNow()}</p>

                <p>Note: {trade.note}</p>
            </div>
        );
    }
}
 
export default Trade;

/* 

guid: "7be545ca-14a7-4ef0-ba15-5e1d6248ecf5"
user_guid: "08e21430-d408-4dd1-9f23-a61741d4d72f"
root: true
count: 0
text: "Bullish on Tesla"
createdAt: "2020-04-17T18:30:20.879Z"
updatedAt: "2020-04-17T18:30:40.692Z"
    User:
    guid: "08e21430-d408-4dd1-9f23-a61741d4d72f"
    username: "theonlygt72"
    lowercase: "theonlygt72"
    flair: null
    role: "member"
    last_active: "2020-04-18T06:24:04.326Z"
    streak_updated_at: "2020-04-17T18:29:23.461Z"
    streak: 2
    createdAt: "2020-02-21T22:24:00.939Z"
    updatedAt: "2020-04-18T06:24:04.326Z"
    __proto__: Object
Trade:
guid: "43865791-43dc-4877-9e11-677320edb865"
expiry_date: "2020-04-17T07:00:00.000Z"
close_date: "2020-04-17T18:31:34.421Z"
open_date: "2020-04-17T18:30:20.887Z"
symbol: "TSLA"
quantity: 1
type: "PUT CREDIT SPREAD"
payment: "credit"
win: true
user_guid: "08e21430-d408-4dd1-9f23-a61741d4d72f"
tag: null
short_put: "735"
long_put: "730"
short_call: null
long_call: null
price_filled: 1.75
price_closed: 0.35
assigned: false
earnings: false
tweet_id: null
opened_during_market_hours: true
closed_during_market_hours: true
closed_before_expiration: false
note: "Bullish on Tesla"
closing_note: "80% profit trigger reached"
createdAt: "2020-04-17T18:30:40.655Z"
updatedAt: "2020-04-17T18:31:34.566Z"
ThotGuid: "7be545ca-14a7-4ef0-ba15-5e1d6248ecf5"
Actions: []

*/