import { test, expect } from '../fixtures/api.fixture';
import type { CreatePostData } from '../clients/users.client';

test('JAPI-7: POST /posts creates a post with the submitted data', async ({ usersClient }) => {
  const postData: CreatePostData = {
    title: 'My test post',
    body: 'This is a test post body.',
    userId: 1,
  };

  const response = await usersClient.createPost(postData);

  expect(response.status()).toBe(201);
  expect(response.headers()['content-type']).toMatch(/^application\/json(?:\s*;|$)/i);

  const post = await response.json();

  expect(post).not.toBeNull();
  expect(typeof post).toBe('object');
  expect(Array.isArray(post)).toBe(false);
  expect(post).toMatchObject({
    ...postData,
    id: 101,
  });
});
