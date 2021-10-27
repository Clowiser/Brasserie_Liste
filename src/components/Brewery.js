import React from 'react';

const Brewery = (props) => {
    // console.log(props)
    const {element} = props;
    // console.log(element)

    return (
        <div>
            <li>
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

export default Brewery;