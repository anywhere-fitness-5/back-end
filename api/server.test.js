require('dotenv').config();
const request = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('environment', () => {
        
        it('should return status 200', async () => {
            const res = await request(server).get('/')

            expect(res.status).toBe(200);
        })
    })
});