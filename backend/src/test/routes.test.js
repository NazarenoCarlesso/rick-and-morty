import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import request from 'supertest'
import Server from '../server.js'

const server = new Server()
const agent = request(server.app)

describe('API routes', () => {
    describe('GET CHARACTERS', () => {
        it('returns the first page of characters', async () => {
            const response = await agent.get('/api/characters')
            assert.equal(response.status, 200)
            assert.match(response.headers['content-type'], /json/)
        })

        it('includes the total character count', async () => {
            const response = await agent.get('/api/characters')
            const { info } = response.body
            assert.equal(info.count, 826)
        })
    })

    describe('GET CHARACTER', () => {
        it('returns a character by ID', async () => {
            const response = await agent.get('/api/character/1')
            assert.equal(response.status, 200)
            assert.match(response.headers['content-type'], /json/)
        })

        it('returns 400 when ID is invalid', async () => {
            const response = await agent.get('/api/character/invalid')
            assert.equal(response.status, 400)
        })

        it('returns the character summary properties', async () => {
            const response = await agent.get('/api/character/1')
            assert.equal(response.status, 200)
            for (const property of ['id', 'name', 'image']) {
                assert.ok(property in response.body)
            }
        })

        it('returns Rick Sanchez for ID 1', async () => {
            const response = await agent.get('/api/character/1')
            assert.equal(response.body.name, 'Rick Sanchez')
        })
    })

    describe('GET CHARACTER DETAIL', () => {
        it('returns character detail', async () => {
            const response = await agent.get('/api/detail/1')
            assert.equal(response.status, 200)
            assert.match(response.headers['content-type'], /json/)
        })

        it('returns 400 when ID is invalid', async () => {
            const response = await agent.get('/api/detail/invalid')
            assert.equal(response.status, 400)
        })

        it('returns type, origin, and location', async () => {
            const response = await agent.get('/api/detail/1')
            assert.equal(response.status, 200)
            for (const property of ['type', 'origin', 'location']) {
                assert.ok(property in response.body)
            }
        })

        it('returns Earth (C-137) as the origin of ID 1', async () => {
            const response = await agent.get('/api/detail/1')
            assert.equal(response.body.origin.name, 'Earth (C-137)')
        })
    })
})