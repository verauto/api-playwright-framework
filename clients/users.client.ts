import type { APIRequestContext } from '@playwright/test';

export type CreatePostData = {
  title: string;
  body: string;
  userId: number;
};

export class UsersClient {
  constructor(private readonly request: APIRequestContext) {}

  async getById(id: number) {
    return this.request.get(`/users/${id}`);
  }

  async getAllPosts() {
    return this.request.get('/posts');
  }

  async createPost(data: CreatePostData) {
    return this.request.post('/posts', { data });
  }
}
