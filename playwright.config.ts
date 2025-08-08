// playwright.config.ts

import { defineConfig, devices } from '@playwright/test';
export default defineConfig({

  use: {
    headless: true,
  },

  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
 