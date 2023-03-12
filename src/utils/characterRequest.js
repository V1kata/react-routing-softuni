export const characterRequest = async (baseUrl, charId, caller) => {
    const res = await fetch(baseUrl + charId);

    const data = await res.json();

    switch (caller) {
        case 'films':
            return films(data);

        case 'starships':
            return starships(data)

        default:
            return data;
    }
}

const films = async (data) => {
    const arr = [];

    for (let url of data.films) {
        const response = await fetch(url);
        const info = await response.json();
        arr.push(info);
    }

    return {
        name: data.name,
        films: arr
    }
}

const starships = async (data) => {
    const arr = [];

    for (let url of data.starships) {
        const response = await fetch(url);
        const info = await response.json();
        arr.push(info);
    }

    return {
        name: data.name,
        ships: arr
    }
}