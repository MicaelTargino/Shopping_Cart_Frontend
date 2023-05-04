import React from 'react';

export default function ItemComponent(props) {
    const status = props.status;
    var backgroundstyle;
    if (status == 'true') {backgroundstyle = '#5c5034'} else {backgroundstyle = '#d1b999'};
    var style = {borderBottom: '1px solid #5c5034',listStyleType: 'none',padding: '5px 15px', width: '300px', background: backgroundstyle};
    return (
        <>
        <li style={style}>{props.name}</li>
        </>
    )
}