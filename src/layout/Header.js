import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>TodoList </h1>
                <Link style={linkStyle} to="/">Home</Link>|<Link style={linkStyle} to="/about">About</Link>
            </header>
        )
    }
}

//Header Style
const headerStyle={
    backgroundColor:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

//Link Style
const linkStyle={
    color:'#fff',
    textDecoration:'none'
}

export default Header
