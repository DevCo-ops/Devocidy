import { testApiHandler } from 'next-test-api-route-handler';
import indexHandler from '@/pages/api/groups/index';
import slugHandler from '@/pages/api/groups/[id]';

import dbConnect from '@/utils/dbConnect';
import Group from '@/models/Group';
import mongoose from 'mongoose';

let db;

beforeAll(async () => {
  db = await dbConnect();
  return db;
});

afterAll(async () => {
  return await db.close();
});

describe('Group API Endpoints', () => {
  test('Index should allow GET requests', async () => {
    expect.hasAssertions();

    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/groups'),
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
      requestPatcher: (req) => (req.url = '/api/groups'),
      handler: indexHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
        });

        expect(res.status).toStrictEqual(400);
      },
    });
  });

  test('[id] should allow GET requests', async () => {
    expect.hasAssertions();
    const group = await Group.create({
      name: 'test',
      owner: [new mongoose.Types.ObjectId()],
    });

    expect(group).toBeInstanceOf(Group);

    await testApiHandler({
      requestPatcher: (req) => (req.url = `/api/groups/${group._id}`),
      handler: slugHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        });

        expect(res.status).toStrictEqual(200);
      },
    });
    await Group.deleteOne(group);
    expect(await Group.find({ _id: group._id })).toStrictEqual([]);
  });
  test('[id] should not allow other request methods', async () => {
    expect.hasAssertions();
    const group = await Group.create({
      name: 'test',
      owner: [new mongoose.Types.ObjectId()],
    });

    expect(group).toBeInstanceOf(Group);

    await testApiHandler({
      requestPatcher: (req) => (req.url = `/api/groups/${group._id}`),
      handler: slugHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'EDIT',
          headers: { 'content-type': 'application/json' },
        });

        expect(res.status).toStrictEqual(400);
      },
    });
    await Group.deleteOne(group);
    expect(await Group.find({ _id: group._id })).toStrictEqual([]);
  });
});
