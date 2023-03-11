import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
        navigate(-1) // back to previous page
    }

    return (
        <>
            <h1>Character page</h1>
            <p>{char.name} - {char.gender}</p>
            <p>Born on - {char['birth_year']}</p>

            <button onClick={onButtonClick}>Back</button>
        </>
    );
}