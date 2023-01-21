import session from 'supertest'
import Server from '../server'

let server, app, agent

describe('Routes Test', () => {
    beforeAll(() => {
        server = new Server()
        app = server.listen()
        agent = session(app)
    })

    describe('GET CHARACTERS', () => {
        it('Status code should be 200', async () => {
            await agent.get('/rickandmorty/characters')
                .expect(200)
                .expect('Content-Type', /json/)
        })

        it('Should get 826 characters', async () => {
            const response = await agent.get('/rickandmorty/characters')
            const { info } = response.body
            expect(info.count).toBe(826)
        })
    })

    describe('GET CHARACTER', () => {
        it('Status code should be 200', async () => {
            await agent.get('/rickandmorty/character/1')
                .expect(200)
                .expect('Content-Type', /json/)
        })

        it('Status code should be 400 when ID is invalid', async () => {
            await agent.get('/rickandmorty/character/invalid')
                .expect(400)
        })

        it('Response should have properties: id, name, species, gender, image', async () => {
            const response = await agent.get('/rickandmorty/character/1')
            expect(response.body).toHaveProperty('id')
            expect(response.body).toHaveProperty('name')
            expect(response.body).toHaveProperty('species')
            expect(response.body).toHaveProperty('gender')
            expect(response.body).toHaveProperty('image')
        })

        it('Character name should be Rick Sanchez', async () => {
            const response = await agent.get('/rickandmorty/character/1')
            expect(response.body.name).toBe('Rick Sanchez')
        })
    })

    describe('GET CHARACTER DETAIL', () => {
        it('Status code should be 200', async () => {
            await agent.get('/rickandmorty/detail/1')
                .expect(200)
                .expect('Content-Type', /json/)
        })

        it('Status code should be 400 when ID is invalid', async () => {
            await agent.get('/rickandmorty/detail/invalid')
                .expect(400)
        })

        it('Response should have properties: type, origin, location', async () => {
            const response = await agent.get('/rickandmorty/detail/1')
            expect(response.body).toHaveProperty('type')
            expect(response.body).toHaveProperty('origin')
            expect(response.body).toHaveProperty('location')
        })

        it('Character origin should be Earth (C-137)', async () => {
            const response = await agent.get('/rickandmorty/detail/1')
            expect(response.body.origin.name).toBe('Earth (C-137)')
        })
    })

    afterAll(() => {
        app.close()
    })
})