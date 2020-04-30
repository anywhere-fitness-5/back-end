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

    describe('server response body', () => {
        it('should return Message', async () => {
            const res = await request(server).get('/')

            expect(res.body.message).toBe("*** server running ***");
        })
    })

   
});