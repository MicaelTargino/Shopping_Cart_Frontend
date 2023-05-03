import React from 'react';
import ItemComponent from './ItemComponent.js'

export default function ListComponent(props) {
    return (
        <>
        <h2>{props.name}</h2>
        <ul>
            <ItemComponent name={'Item 1'} />
            <ItemComponent name={'Item 2'} />
        </ul>
        </>
    )
}