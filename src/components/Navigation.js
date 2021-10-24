import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <>
         <NavLink exact to="/">
             Accueil
         </NavLink>
        </>
    );
};

export default Navigation;

//NavLink -> component spécifique de REACT = <a> + # (ancre) de HTML