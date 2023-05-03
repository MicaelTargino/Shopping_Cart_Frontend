import React from 'react';
import ItemComponent from './ItemComponent.js'

export default function ListComponent(props) {
    return (
        <>
        <h2>{props.name}</h2>
        <ul>
            {props.items.map(item => <ItemComponent key={item.id} name={item.name} />)}
        </ul>
        </>
    )
}