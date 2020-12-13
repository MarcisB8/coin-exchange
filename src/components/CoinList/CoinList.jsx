import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default function CoinList (props) {
    
    return (
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Ticker</th>
                <th>Balance</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                props.coinData.map( ({key, name, ticker, price, balance}) => 
                    <Coin key={key}
                        handleRefresh={props.handleRefresh}
                        handleBuy={props.handleBuy}
                        handleSell={props.handleSell}
                        name={name} 
                        ticker={ticker} 
                        price={price}
                        balance={balance}
                        showBalance={props.showBalance}
                        tickerId={key} />
                    )
                }
            </tbody>
        </Table>
    )
}


