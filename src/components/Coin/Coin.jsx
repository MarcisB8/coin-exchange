import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.td`
  border: 1px solid #cccccc;
  width: 9vw;
`;

const Actions = styled(CoinRow)`
    width: 29vw;
`;

const Button = styled.button`
  font-size: 15px;
  width: 80px;
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
          <input className="ml-5 mt-2 mr-2 bg-info text-white border-0 w-25" placeholder="Enter amount" value={value} onChange={onChange} />
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
          <CoinRow>{props.showBalance ? props.balance : "-"}</CoinRow>
          <Actions>
            <form action="#" method="POST">
              <Button className="mb-2 mr-5 btn btn-info" onClick = {handleClick}>Refresh</Button>
              <Input type="number"/>
              <Button className="mb-2 mr-2 btn btn-warning" onClick = {HandleBuyClick}>Buy</Button>
              <Button className="mb-2 btn btn-danger" onClick = {HandleSellClick}>Sell</Button>
            </form>
          </Actions>
        </tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
