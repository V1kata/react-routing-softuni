import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { characterRequest } from '../utils/characterRequest';

const baseUrl = 'https://swapi.dev/api/people/';

export const CharacterFilms = () => {
    const { charId } = useParams();
    const [allFilms, setAllFilms] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const request = async () => {
            const { name, films } = await characterRequest(baseUrl, charId, 'films');

            setName(name)
            setAllFilms(films);
        }

        request();
    }, [charId]);

    return (
        <>
            <h2>{name || 'Character'}'s films</h2>

            <ul>
                {allFilms.map(x => {
                    return (
                        <li key={x['episode_id']}>
                            <p>{x.title} - {x.director}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}