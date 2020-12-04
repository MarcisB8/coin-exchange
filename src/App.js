import React from 'react';
import styled from 'styled-components';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance'
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';

const Div = styled.div`
    text-align: center;
    background-color: rgb(30, 84, 119);
    color: #cccccc;
`;

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      showBalance: true,
      coinData: [

        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 18000.99,
          balance: 0.50
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 599.99,
          balance: 32.00
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.00,
          balance: 0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.59,
          balance: 1000
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 299.99,
          balance: 0
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map( function({ticker, name, price, balance}) {
      let newPrice = price;
      if ( valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice,
        balance
      }
    });
    this.setState ({coinData: newCoinData});
  }

  handleToggle() {
    
      this.setState (function (oldState) {
        return {
          ...oldState,
          showBalance: !oldState.showBalance
        }
      });
    
   /* if (this.state.showBalance === true) {
      this.setState ({
        showBalance: false
      });
    }
    else {
      this.setState ({
        showBalance: true
      });
    } */
  } 

  render() {

    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleToggle={this.handleToggle}/>
        <CoinList coinData={this.state.coinData} showBalance={this.state.showBalance} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}

export default App;
