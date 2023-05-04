import React from 'react';
import ItemComponent from './ItemComponent.js'

var style = {display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}
var styleHeading = {color: 'white'}
export default function ListComponent(props) {
    return (
        <div style={style}>
        <h2 style={styleHeading}>{props.name}</h2>
        <ul>
            {props.items.map(item => <ItemComponent key={item.id} name={item.name} status={item.status} />)}
        </ul>
        </div>
    )
}