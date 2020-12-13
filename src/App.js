import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';

import '@fortawesome/fontawesome-free/js/all';

const Div = styled.div`
    text-align: center;
    background-color: rgb(30, 84, 119);
    color: #cccccc;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App (props) {
  
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all( promises );
    const coinPriceData = coinData.map (function(response) {
    const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      }
    })

    setCoinData(coinPriceData);
  }

  useEffect (function() {
    if (coinData.length === 0) {
      componentDidMount();
    }
  });

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/' + valueChangeId;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map( function( values ) {
      let newValues = {...values};
      if ( valueChangeId === values.key ) {
        newValues.price = newPrice;
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  const handleToggle = () => {
    
      setShowBalance(oldValue => !oldValue);
  } 
  const handleHelicopter = () => {
    
    setBalance(oldValue => oldValue + 1200);
  }
  const handleBuy = (value, coin_id, price) => {
    debugger;
    const newCoinData = coinData.map(values =>{
      let newValues = {...values};
      
      if(coin_id === newValues.key && value !== undefined){

        if(balance >= price*value){
          var check = window.confirm("Buy " + value + " " + coin_id + " for " + price*value + " USD?");
          if (check === true) {
            newValues.price = price;
            newValues.balance += parseFloat(value);
            setBalance(balance - price*value);
          } 
        }
        else {
          alert("Insufficient funds");
        }
      }
        return newValues;
    })
    setCoinData(newCoinData);
  }

  const handleSell = (value, coin_id, price) => {

    const newCoinData = coinData.map(values =>{
    let newValues = {...values};
    
    if(coin_id === newValues.key){
      if(newValues.balance >= value){
        var check = window.confirm("Sell " + value + " " + coin_id + " for " + price*value + " USD?");
        if (check === true) {
          newValues.price = price;
          newValues.balance -= value;
          setBalance(balance + price*value);
        }
      }
      else {
        alert("Insufficient funds");
      }
    }
      return newValues;
    })
    setCoinData(newCoinData);
  }

  return (
    <Div>
      <ExchangeHeader />
      <AccountBalance amount={balance} showBalance={showBalance} handleToggle={handleToggle} handleHelicopter={handleHelicopter}/>
      <CoinList coinData={coinData} showBalance={showBalance} handleRefresh={handleRefresh} handleBuy={handleBuy} handleSell={handleSell}/>
    </Div>
  );
}

export default App;
