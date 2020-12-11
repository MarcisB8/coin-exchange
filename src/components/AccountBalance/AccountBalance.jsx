import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

const Button = styled.button`
  border: 1px solid #cccccc;
  color: #cccccc;
  background-color: rgb(40, 100, 130);
`;

export default function AccountBalance (props) {
    
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    
    if (props.showBalance) {
        content = <> Balance: $ {props.amount} </> 
    }
    
    return (
        <Section>
            {content} <br></br>
            <Button onClick = {props.handleToggle}>{buttonText}</Button>
        </Section>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
