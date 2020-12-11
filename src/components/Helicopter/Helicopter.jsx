import React from 'react';
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

export default function Helicopter (props) {
    
    const buttonText = "Airdrop!";
    
    return (
        <Section>
            <Button onClick = {props.handleHelicopter}>{buttonText}</Button>
        </Section>
    );
}

