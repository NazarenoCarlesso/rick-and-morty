// import http from 'http'
// import url from 'url'
// import db from '../utils/data'
const http = require('http')
const url = require('url')
const db = require('../utils/data')

const { getCharacterById, getCharacterDetail } = require('../controllers/charactercontroller')

const PORT = 3001

// console.log(db)

http.createServer((req, res) => {
    if (req.url === '/rickandmorty/characters') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(db))
    }
    if (req.url === '/rickandmorty/character') {
        const id = Number(req.url.split('/').pop())
        getCharacterById(res, id)
    }
    if (req.url === '/rickandmorty/detail') {
        const id = Number(req.url.split('/').pop())
        getCharacterDetail(res, id)
    }
}).listen(PORT)
