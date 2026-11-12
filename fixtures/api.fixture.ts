import { test as base } from '@playwright/test';
import { UsersClient } from '../clients/users.client';

type ApiFixtures = {
  usersClient: UsersClient;
};

export const test = base.extend<ApiFixtures>({
  usersClient: async ({ request }, use) => {
    const usersClient = new UsersClient(request);
    await use(usersClient);
  },
});

export { expect } from '@playwright/test';
