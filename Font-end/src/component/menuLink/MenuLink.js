import React from 'react'
import { Nav } from 'react-bootstrap'
import './MenuLink.css'

export default function MenuLink(props) {
    const executeScroll = props.executeScroll;
    
    return (
        <Nav.Link className='linkLabel' onClick={() => executeScroll(props.refer)}>{props.name}</Nav.Link>
    )
}