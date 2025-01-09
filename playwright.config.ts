import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config({
  path: process.env.Test_Name? `./env-files/.env.${process.env.Test_Name}`: "./env-files/.env.dev"
})
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './API',
  /*Using tag we can run the specific tag
  // grep: /@Smoke.*@Sanity/,
  testDir: './tests_usedFor_POM_Patterns',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: [["html", { open: 'on-failure' }]],
  //reporter: [["allure-playwright", {outputFolder:"karthik_allures"}]]
  reporter:[["allure-playwright", {outputFolder:"GoogleAllureResults4"}],["html"]],
  //reporter: [["html", { open: 'always', outputFolder: 'test-results' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://restful-booker.herokuapp.com',
    // extraHTTPHeaders: {
    //   Accept: 'string'
    // }

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    headless: false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      //testMatch: /.*\.setup.ts/,
      testMatch: 'global.setup.ts',
    },

    {
      name: 'chromium',
      dependencies: ["setup"],
      use: {
        ...devices['Desktop Chrome'],
        storageState: './playwright/.auth/auth.json'
      }
    },

    // {
    //   name: 'firefox',
    //   dependencies: ["setup"],
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     storageState: './playwright/.auth/auth.json'
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});