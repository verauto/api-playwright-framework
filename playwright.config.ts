import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'node:path';

const environment = process.env.TEST_ENV ?? 'dev';

if (!['dev', 'qa'].includes(environment)) {
  throw new Error(`Unsupported TEST_ENV: ${environment}. Use dev or qa.`);
}

const envFile = path.resolve(__dirname, `.env.${environment}`);
const result = dotenv.config({ path: envFile });

if (result.error) {
  throw result.error;
}

const baseURL = process.env.API_BASE_URL;

if (!baseURL) {
  throw new Error(`API_BASE_URL is missing. Check ${envFile}.`);
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
});
