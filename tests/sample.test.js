const app = require('../api/server');
const supertest = require('supertest');
const request = supertest(app);

describe('Sample Test', ()=> {

  it('should test that true === true', () => {
    expect(true).toBe(true)
  })

  it('should be true that 1 != 2', () => {
    expect(1).not.toBe(2)
  })

  it('should async test to /', async done => {
    await request.get('/')
    done() 
  })

  it('should async test to /api/users', async done => {
    await request.get('/api/users')
    done() 
  })

  it('should async test to /api/classes', async done => {
    await request.get('/api/classes')
    done() 
  })

})