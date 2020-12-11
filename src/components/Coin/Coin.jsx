import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.td`
  border: 1px solid #cccccc;
  width: 25vh;
`;

const Button = styled.button`
  border: 1px solid #cccccc;
  color: #cccccc;
  background-color: rgb(40, 100, 130);
`;

const InputStyle = styled.input`
  border: none;
  width: 25vh;
  background-color: rgb(40, 100, 130);
`;

export default function Coin (props) {

    const handleClick = (event) => {
      // prevent the default action of submitting the form
      event.preventDefault();
      props.handleRefresh(props.tickerId);
    }

    const [value, setValue] = useState();

    const Input = () => {
      
      const onChange = (event) => {
        setValue(event.target.value);
      };
      return (
        <>
          <input placeholder="Enter amount" value={value} onChange={onChange} />
        </>
      );
    }

    const HandleBuyClick = (event) => {

      event.preventDefault();
      props.handleBuy(value, props.tickerId, props.price)
    }

    const HandleSellClick = (event) => {

      event.preventDefault();
      props.handleSell(value, props.tickerId, props.price)
    }

    return (
        <tr>
          <CoinRow>{props.name}</CoinRow>
          <CoinRow>{props.ticker}</CoinRow>
          <CoinRow>${props.price}</CoinRow>
          {props.showBalance ? <CoinRow>{props.balance}</CoinRow> : null}
          <CoinRow>
            <form action="#" method="POST">
              <Button onClick = {handleClick}>Refresh</Button>
            </form>
            <form action="#" method="POST">
              <Input type="number" style={InputStyle}/><br></br>
              <Button onClick = {HandleBuyClick}>Buy</Button>
              <Button onClick = {HandleSellClick}>Sell</Button>
            </form>
          </CoinRow>
        </tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
