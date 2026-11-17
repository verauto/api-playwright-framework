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

## Online report

Enable Settings > Pages > Build and deployment > Source > GitHub Actions
in the GitHub repository once.

After a manual run on main, the workflow publishes the latest Allure report at:
https://verauto.github.io/api-playwright-framework/

Reports from other branches remain downloadable artifacts and do not overwrite
the published main report. A failed smoke test can still publish its report;
the test job remains failed. If no report was generated, publication fails and
the previous published report remains available.

The site is public. Do not include credentials or private data in test reports.
The site shows the latest deployed run; cross-run history is not configured.

## Manual execution

Pushes do not start tests. To run smoke tests, open GitHub Actions > API Smoke
Tests > Run workflow, choose the branch, then click Run workflow.
Choose main to also update the online Allure report.