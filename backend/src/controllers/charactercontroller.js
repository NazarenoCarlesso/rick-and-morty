const getAllCharacters = (req, res) => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => res.json(data))
}

const getCharacterById = (req, res) => {
    const { id } = req.params
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

const getCharacterDetail = (req, res) => {
    const { id } = req.params
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

export { getAllCharacters, getCharacterById, getCharacterDetail }