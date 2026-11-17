# Test reports

After an authorized test run, generate and open Allure locally:

```powershell
npm run report:generate
npm run report:open
```

These two commands process existing results; they do not execute tests.
Allure results accumulate in allure-results. Remove that generated folder before
a fresh local run if you do not want to include earlier runs.

In GitHub, open Actions, select an API Smoke Tests run, and download the
allure-smoke-report artifact. Extract it, then serve the extracted report
directory with the project's local Allure CLI:

```powershell
npx allure open "C:\path\to\extracted\allure-smoke-report"
```

The workflow generates reports even when tests fail. A failed test still fails
the workflow. Raw Allure results and the Playwright HTML report are also
uploaded. Artifacts are retained for 7 days.

Cross-run history and public report hosting are not configured.
