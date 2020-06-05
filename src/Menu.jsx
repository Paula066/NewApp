import React, { Component } from 'react';

class Menu extends React.Component {
    render() {
        console.log(this);
        return (
            <>
                <h3>Menu</h3>
                {this.props.items.map(item => <div key={item}>{item}</div>)}
            </>
        )
    }
}

export default Menu;
