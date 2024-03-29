import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/router.js'

import dotenv from 'dotenv'
dotenv.config()
const { PORT } = process.env

class Server {
    constructor() {
        this.app = express()
        this.port = PORT

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
        this.app.use(bodyParser.json({ limit: "50mb" }))
        this.app.use(cors())
    }

    routes() {
        this.app.use('/api', router)
    }

    listen() {
        return this.app.listen(this.port, () => {
            console.log('Server running on port', this.port)
        })
    }
}

export default Server