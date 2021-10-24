import React from 'react';
// import {findByDisplayValue} from "@testing-library/react";

const Factory = (props) => { // pour vérifier ce qui a été passé = props = ({ element }) -> les data sont passées
    // console.log(props)
    const element = props.element;  // <- le destructuring = const { element } = props
    // console.log(element) // on est directement sur chaque element

    return (
        <div>
            <li key={element.obdb_id}>
                <h3>{element.name}</h3>
                <h4>{element.country}</h4>
                <p>{element.city} - {element.state}</p>
                <p>{element.brewery_type}</p>
                <p>{element.street}</p>
                <p>{element.address_2}</p>
                <p>{element.address_3}</p>
                <p>{element.county_province}</p>
                <p>{element.postal_code}</p>
                <p>{element.website_url}</p>
                <p>{element.phone}</p>
                <p>{element.longitude}</p>
                <p>{element.latitude}</p>
                <p>{element.tags}</p>
            </li>
            <br/>
        </div>
    );
};

export default Factory;

// on met des composants dans des composants pour structurer, avoir un code lisible et facile à maintenir