import React, {useEffect, useState} from 'react';
import typeServices from "../Services/typeServices";

const PokemonWeekness = ({type}) => {
    const [currentType, setCurrentType] = useState({});

    const fetchTypeById = async () => {
        try {
            const response = await typeServices.getTypeById(type.type.url.substring(30).replaceAll("/", ""))
            setCurrentType(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchTypeById()
    }, [])

    return <ul>
        {currentType.damage_relations != undefined && currentType.damage_relations.double_damage_from.map(week => {
            return <li className={week.name}>{week.name}</li>
        })}
    </ul>;
};

export default PokemonWeekness;