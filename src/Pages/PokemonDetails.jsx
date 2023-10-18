import React from 'react';
import {useLocation} from "react-router-dom";

const PokemonDetails = () => {
    const location = useLocation()

    console.log(location.state)
    return <>
    </>;
};

export default PokemonDetails;