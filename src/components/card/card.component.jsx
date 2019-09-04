import React from 'react';

import './card.styles.css';

const Card = (props) => (
    
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set4&size=150x150`} alt="robohash"/>
        <h2>{props.monster.name}</h2>
        <span>{props.monster.email}</span>
    </div>
);

export default Card;