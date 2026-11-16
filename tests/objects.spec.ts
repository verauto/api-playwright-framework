import { test, expect } from '../fixtures/api.fixture';

test('[Positive] JAPI-15: GET /objects returns a non-empty list', { tag: '@smoke' }, async ({ usersClient }) => {
  const response = await usersClient.getAllObjects();

  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/json');

  const objects = await response.json();

  expect(objects.length).toBeGreaterThan(0);
});
