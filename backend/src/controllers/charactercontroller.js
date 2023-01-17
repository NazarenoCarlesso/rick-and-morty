const getAllCharacters = async (req, res) => {
    try {
        const characters = await fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
        res.status(200).json(characters)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

const getCharacterById = async (req, res) => {
    const { id } = req.params
    if (isNaN(id)) res.status(400).send('Bad Request')
    if (id < 1 || id > 826) res.status(400).send('Bad Request')
    try {
        const character = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
        res.status(200).json(character)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

const getCharacterDetail = async (req, res) => {
    const { id } = req.params
    if (isNaN(id)) res.status(400).send('Bad Request')
    if (id < 1 || id > 826) res.status(400).send('Bad Request')
    try {
        const character = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
        res.status(200).json(character)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

export { getAllCharacters, getCharacterById, getCharacterDetail }