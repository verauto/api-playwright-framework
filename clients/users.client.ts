import type { APIRequestContext } from '@playwright/test';

export class UsersClient {
  constructor(private readonly request: APIRequestContext) {}

  async getAllObjects() {
    return this.request.get('/objects');
  }

  async getObjectById(id: string) {
    return this.request.get('/objects/' + encodeURIComponent(id));
  }
}
