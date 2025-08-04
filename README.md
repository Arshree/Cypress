🧪 Cypress Automation Framework — Fusion Team Web (Autodesk)
Welcome to the Cypress Automation Test Suite for Autodesk Fusion Team Web. This is an enterprise-grade testing framework built with TypeScript, custom plugins, and mocking systems that enables scalable, maintainable, and high-confidence automated testing.

🏗️ Project Architecture
🔧 Core Stack
Cypress Version: 14.2.1

Language: TypeScript + JavaScript

Folder Structure:

bash
Copy
Edit
├── spec/cypress/integration/     # Integration Tests (with mocks)
├── spec/cypress/e2e/             # E2E Tests (real backend)
├── spec/cypress/support/         # Custom commands, mocks, setup
├── config/cypress/               # Centralized config files
├── scripts/                      # CLI for recording & running suites
├── logs/cypress_e2e/             # Screenshots, videos, HAR files
└── cypress.env.json              # Environment variables
🛠️ Key Features
🔌 Plugins & Extensions
HAR File Generator: Tracks network traffic for debugging.

Session Manager: Maintains test state with session-specific data.

Feature Flag Control: Dynamically enables/disables app features during tests.

⚙️ Config Highlights
js
Copy
Edit
// config/cypress/cypress-e2e.config.js
screenshotsFolder: 'logs/cypress_e2e/screenshots',
videosFolder: 'logs/cypress_e2e/videos',
requestTimeout: 20000,
responseTimeout: 30000,
defaultCommandTimeout: 60000,
🔥 Custom Commands
Over 30+ modular command files:

ts
Copy
Edit
import './login_commands';
import './project_commands';
import './hub_merge_commands';
import './api_commands';
// ...and many more
They encapsulate logic like login, navigation, stubbing, API actions, permissions, and feature toggling.

🧪 Test Types
Type	Description	Folder
Integration Tests	Use mocked data for fast feedback	spec/cypress/integration/
E2E Tests	Real backend, real data	spec/cypress/e2e/
Recording Scripts	Fixture generation for mocks	scripts/cypress.js

📁 Test Suites
Suite execution is defined in scripts/cypress.js:

js
Copy
Edit
record: { spec: 'spec/cypress/integration/_setup/**/*', env: { withMocks: false } },
feature_flag_recordings: { spec: ['...'], env: { withMocks: false } },
Each suite is organized to support reuse across integration and E2E pipelines.

🚀 Run Commands
🧪 Local Testing
bash
Copy
Edit
npm run cypress:open     # Run tests interactively
npm run cypress:run      # Run tests headlessly
📼 Record Fixtures
bash
Copy
Edit
npm run cypress:record:feature-flags
npm run cypress:record:common
npm run cypress:record:project
npm run cypress:record:all
🔐 Environment & Auth
Stored in cypress.env.json:

json
Copy
Edit
{
  "test_accounts_password": "Autodesk123!",
  "oxygen_trust_token": "eyJhbGciOiJSUzI1NiIs..."
}
Supports multiple environments: local, staging, prod-like.

📊 Reporting & CI/CD
Mochawesome Reports (HTML)

JUnit Reports for Jenkins

HAR File Logs per run

Screenshots + Videos on failures

CI Ready: Parallel execution, cleanup, and aggregation

🧠 Example Test
ts
Copy
Edit
describe('Members and Permissions', () => {
  before('Login', () => {
    cy.login(Cypress.env('businessPrimaryEmails.navigation'), Cypress.env('businessDomainUrls.navigation'));
  });

  it('should redirect old members URL to new tab', () => {
    cy.visitBasePage();
    cy.navigateToProject(CONTROLLED_PROJECT);
    cy.url().then((url) => {
      const [projectPath] = url.split('/data');
      cy.visit(`${projectPath}/members`);
    });
    cy.get(PROJECT_PAGE_SELECTORS.MEMBERS_TAB).should('not.exist');
    cy.get(PROJECT_PAGE_SELECTORS.FOLDER_SECURITY_TAB_CDE).should('exist');
  });
});
💡 Highlights
✅ Mock & Real API Modes (switchable via env.withMocks)

🔄 Session & State Persistence

🧩 Feature Flag Testing

📡 Network Debugging with HAR

🧰 Fixture-based Test Isolation

💼 Enterprise CI/CD Compatible

👋 Contributors & Maintainers
This framework is maintained by the QA Automation team at Autodesk Fusion 360, built with ❤️ to test smarter, not harder.

