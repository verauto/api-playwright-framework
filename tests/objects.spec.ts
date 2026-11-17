import { test, expect } from '../fixtures/api.fixture';
import { existingObjectId } from '../data/objects.data';

test('[Positive] JAPI-15: GET /objects returns a non-empty list', { tag: '@smoke' }, async ({ usersClient }) => {
  const response = await usersClient.getAllObjects();

  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/json');

  const objects = await response.json();

  expect(objects.length).toBeGreaterThan(0);
});

test('[Positive] GET /objects/{id} returns the requested object', { tag: '@regression' }, async ({ usersClient }) => {
  const response = await usersClient.getObjectById(existingObjectId);

  expect(response.ok(), 'Response should be successful').toBe(true);
  expect(response.headers()['content-type'], 'Response should be JSON').toContain('application/json');

  const object = await response.json();

  expect(object.id, 'Response should contain the requested object ID').toBe(existingObjectId);
});
