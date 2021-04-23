import { testApiHandler } from 'next-test-api-route-handler';
import indexHandler from '@/pages/api/users/index';
import slugHandler from '@/pages/api/users/[id]';
import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

let db;

beforeAll(async () => {
  db = await dbConnect();
  return db;
});

afterAll(async () => {
  return await db.close();
});

describe('User API Endpoints', () => {
  test('Index should allow GET requests', async () => {
    expect.hasAssertions();

    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/users'),
      handler: indexHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        });

        expect(res.status).toStrictEqual(200);
      },
    });
  });

  test('Index should NOT allow other request methods', async () => {
    expect.hasAssertions();

    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/users'),
      handler: indexHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          headers: { 'content-type': 'application/json' },
        });

        expect(res.status).toStrictEqual(400);
      },
    });
  });

  test('[id] should allow GET requests', async () => {
    expect.hasAssertions();
    const user = await User.create({
      name: 'test',
      email: 'dont@me.com',
      image: 'test.jpg',
    });

    expect(user).toBeInstanceOf(User);

    await testApiHandler({
      requestPatcher: (req) => (req.url = `/api/users/${user._id}`),
      handler: slugHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        });

        expect(res.status).toStrictEqual(200);
      },
    });
    await User.deleteOne(user);
    expect(await User.find({ _id: user._id })).toStrictEqual([]);
  });
  test('[id] should not allow other request methods', async () => {
    expect.hasAssertions();
    const user = await User.create({
      name: 'test',
      email: 'dont@me.com',
      image: 'test.jpg',
    });

    expect(user).toBeInstanceOf(User);

    await testApiHandler({
      requestPatcher: (req) => (req.url = `/api/users/${user._id}`),
      handler: slugHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'EDIT',
          headers: { 'content-type': 'application/json' },
        });

        expect(res.status).toStrictEqual(400);
      },
    });
    await User.deleteOne(user);
    expect(await User.find({ _id: user._id })).toStrictEqual([]);
  });
});
