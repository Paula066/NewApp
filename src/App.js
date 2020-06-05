import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Menu from './Menu';
import Layout from 'Layout';

const Input = styled.input`
    margin: 20px 0 20px 0;
    font-size: 20px;
`

const euroCurrency = 4.43;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: ''
        }
    }

    parseCurrency = (e) => {
        const value = e.target.value;
        const parsedValue = [...value].map(char => /\d|,|\./.test(char) ? char : '').join('');
        const parsedValueFloat = parseFloat(parsedValue) || 0;
        this.setState({ currentValue: (parsedValueFloat * euroCurrency).toFixed(2) })
    }

    render() {
        return (
            <>
                <Layout />
            </>
        );
    }
}

export default App;
