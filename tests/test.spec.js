test('Jest runner works', () => {
  expect(jest).toBeDefined();
  expect(process.env.JEST_WORKER_ID).toBeDefined();
});
