import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { characterRequest } from '../utils/characterRequest';

const baseUrl = 'https://swapi.dev/api/people/';

export const CharacterStarships = () => {
    const { charId } = useParams();
    const [allStarShips, setAllStarShips] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const request = async () => {
            const { name, ships } = await characterRequest(baseUrl, charId, 'starships');

            setName(name)
            setAllStarShips(ships);
        }

        request();
    }, [charId]);

    return (
        <>
            <h2>{name || 'Character'}'s starships</h2>
            <h5>Model - passengers</h5>
            <ul>
                {allStarShips.map(x => {
                    return (
                        <li key={x.url.split('/').slice(-2)[0]}>
                            <p>{x.name} - {x.passengers}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}