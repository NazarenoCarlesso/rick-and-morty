const getCharacterById = (res, id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                image: data.image
            }
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(JSON.stringify(character))
        })
        .catch((error) => {
            res.writeHead(400, { 'Content-type': 'text/plain' })
            res.end('character not found')
        })
}

const getCharacterDetail = (res, id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                image: data.image,
                type: data.type,
                origin: data.origin,
                location: data.location
            }
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(JSON.stringify(character))
        })
        .catch((error) => {
            res.writeHead(400, { 'Content-type': 'text/plain' })
            res.end('character not found')
        })
}

module.exports = { getCharacterById, getCharacterDetail }