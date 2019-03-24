import React from 'react';
import './Institution.css';

const Institution = (props) => (
    <div className="institution">
        <h1>{props.name}</h1>
        <img src={props.logo} alt={`Logo for ${props.name}`} />
    </div>
)

export default Institution;