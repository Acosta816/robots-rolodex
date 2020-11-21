import React from 'react';
import './card.css';

export const Card = props => (
    <div className="card-container">
        <img alt='monster' src={`https://robohash.org/${props.card.id}?size=180x180`} />
        <h2>{props.card.name}</h2>
        <p>{props.card.email}</p>
    </div>

);