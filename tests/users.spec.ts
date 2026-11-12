import { test, expect } from '../fixtures/api.fixture';

test('GET /posts and check the title of last one.', async ({ usersClient }) => {

  const response = await usersClient.getAllPosts();
  const posts = await response.json();
  const lastPost = posts.at(-1);

  expect(lastPost.title).toBe('at nam consequatur ea labore ea harum');
})
