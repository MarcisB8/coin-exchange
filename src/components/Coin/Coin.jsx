import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.td`
  border: 1px solid #cccccc;
  width: 25vh;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  color: #cccccc;
  background-color: rgb(30, 84, 119);
`;

export default function Coin (props) {

    /*
    componentDidMount() {
      const callback = () => {
        // set the state to a new random value
        const randomPercentage = 0.995 + Math.random() * 0.01;
        // !! DON'T:
        // this.state.price = this.state.price * randomPercentage;
        this.setState (function (oldState) {
          return {
            price: oldState.price * randomPercentage
          };
        });
      }
      setInterval (callback, 1000);
    }
    */

    const handleClick = (event) => {
      // prevent the default action of submitting the form

      event.preventDefault();
      props.handleRefresh(props.tickerId);
/*
      const randomPercentage = 0.995 + Math.random() * 0.01;
      this.setState (function (oldState) {
        return {
          price: oldState.price * randomPercentage
        };
      });
      */
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
