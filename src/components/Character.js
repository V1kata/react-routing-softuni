import { useParams, useNavigate, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from '../styles/Nav.module.css';
import { CharacterFilms } from "./CharacterFilms";
import { CharacterStarships } from "./CharacterStarships";

const baseUrl = 'https://swapi.dev/api/people';

export const Character = () => {
    const { charId } = useParams();
    const navigate = useNavigate();
    const [char, setChar] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/${charId}`)
            .then(res => res.json())
            .then(data => {
                setChar(data)
            })
    }, [charId]);

    const onButtonClick = (e) => {
        // navigate('/characters')
        navigate('/characters') // back to previous page
    }

    return (
        <>
            <h1>Character page</h1>
            <p>{char.name} - {char.gender}</p>
            <p>Born on - {char['birth_year']}</p>

            <button onClick={onButtonClick}>Back</button>

            <nav className={styles.navigation}>
                <ul>
                    <li><Link to="films">Films</Link></li>
                    <li><Link to="starships">Starships</Link></li>
                    <li><Link to="vehicles">Vehicles</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/films" element={<CharacterFilms />}/>
                <Route path="/starships" element={<CharacterStarships />}/>
                <Route path="/vehicles" element={<h2>Luke's vehicles</h2>}/>
            </Routes>
        </>
    );
}