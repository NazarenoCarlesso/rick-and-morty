let favorites = []

const getFavorites = async (req, res) => {
    res.status(200).json(favorites)
}

const setFavorites = async (req, res) => {
    const character = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image
    }
    favorites.push(character)

    res.status(201).json(character)
}

const deleteFavorite = async (req, res) => {
    const { id } = req.params

    const character = favorites.find(f => f.id === Number(id))
    if (!character) return res.status(400).send('Bad Request')

    favorites = favorites.filter(f => f.id !== Number(id))
    res.status(202).json(character)
}

export { getFavorites, setFavorites, deleteFavorite }