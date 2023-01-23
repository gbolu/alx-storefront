/* eslint-disable no-undef */
import supertest from 'supertest'

import app from '../../app'

const request = supertest(app)
describe('Test server error responses', () => {
  it('Returns a 404 endpoint response to an invalid enpoint', async () => {
    const response = await request.get('/api')
    expect(response.status).toBe(404)
  })
})
