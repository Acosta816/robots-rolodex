import React from 'react';
import { Card } from '../card/card';
import './card-list.css';

export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.monsters.map(mon => <Card key={mon.id} card={mon} />)
            }
        </div>
    )
} 