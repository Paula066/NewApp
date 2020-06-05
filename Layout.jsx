import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';


const Container = styled.div`
    display: flex;
`

class Layout extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <Menu />
                </div>
                <div></div>
            </Container>
        )
    }
}

export default Layout;