import React from 'react';

export default function ItemComponent(props) {
    const status = props.status;
    return (
        <>
        <li>Item description: {props.name} status: {status ? 'comprado' : 'pendente'}</li>
        </>
    )
}