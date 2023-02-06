const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', function () {
  test('It should response with 200 success', async () => {
    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test POST /launches', () => {
  const testLaunchData = {
    mission: 'USS Ricks Starship',
    rocket: 'RWP 66888-46',
    target: 'Kepler-186 f',
  };

  const launchDate = 'January 13, 2076';

  test('It should response with 201 created', async () => {

    const response = await request(app)
      .post('/launches')
      .send({
        ...testLaunchData,
        launchDate
      })
      .expect('Content-Type', /json/)
      .expect(201);

    const requestDate = new Date(launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);
    expect(response.body).toMatchObject(testLaunchData);
  });

  test('It should catch missing required property and respond 400', async () => {
    const response = await request(app)
      .post('/launches')
      .send(testLaunchData)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Invalid or missing date property'
    });
  });

  test('It should catch invalid dates and respond 400', async () => {
    const response = await request(app)
      .post('/launches')
      .send({ ...testLaunchData, launchDate: 'fooBar' })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Invalid or missing date property'
    });
  });
});