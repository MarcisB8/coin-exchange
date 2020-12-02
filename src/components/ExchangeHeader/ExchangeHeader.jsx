import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 36px;
    color: white;
`;

const Logo = styled.img`
    height: 8rem;
    pointer-events: none;
`;

const Title = styled.h1`
    font-size: 4rem;
`;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                <Logo src={logo} alt="React logo"/>
                <Title>
                    Coin exchange
                </Title>
            </Header>
        )
    }
}
