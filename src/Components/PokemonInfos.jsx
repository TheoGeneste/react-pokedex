import React from 'react';

const PokemonInfos = ({height, weight, genus, habitat}) => {

    return <div className={"bg-primary d-flex fle"}>
        <div className={"text-center"}>
            <h4 className={"text-white p-3"}>Taille</h4>
            <p>{height}</p>
            <h4 className={"text-white p-3"}>Poids</h4>
            <p>{weight}</p>
        </div>
        <div className={"text-center"}>
            <h4 className={"text-white p-3"}>Catégories</h4>
            <p>{genus}</p>
            <h4 className={"text-white p-3"}>Habitat</h4>
            <p>{habitat}</p>
        </div>
    </div>;
};

export default PokemonInfos;