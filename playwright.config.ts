import { defineConfig, devices } from "@playwright/test";
import type { TestOptions } from "./test-options";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<TestOptions>({
  // timeout: 10000,
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:4200/",
    // globalsQaURL: "https://www.globalsqa.com/demo-site/draganddrop/",
    //With plain JS
    // baseURL:
    //   process.env.DEV === "1"
    //     ? "http://localhost:4200/"
    //     : process.env.STAGING === "1"
    //     ? "http://localhost:4202/"
    //     : "http://localhost:4200/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "dev",
      use: { ...devices["Desktop Chrome"], baseURL: "http://localhost:4200/" },
    },
    {
      name: "staging",
      use: { ...devices["Desktop Chrome"], baseURL: "http://localhost:4200/" },
    },
    {
      name: "mobile",
      testMatch: "testMobile.spec.ts",
      use: {
        ...devices["iPhone 15 Pro Max"],
        baseURL: "http://localhost:4200/",
      },
    },
  ],
});
