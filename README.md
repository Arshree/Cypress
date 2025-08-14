🧪 Cypress Automation Framework — Fusion Team Web (Autodesk)
Welcome to the Cypress Automation Test Suite for Autodesk Fusion Team Web. This is an enterprise-grade testing framework built with TypeScript, custom plugins, and mocking systems that enables scalable, maintainable, and high-confidence automated testing.

🏗️ Project Architecture
🔧 Core Stack
Cypress Version: 14.2.1

Language: TypeScript + JavaScript

command- npm run cypress:open

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
*******************************************************************************************************************************************************************************

Combined README.md that documents both the hybrid AngularJS + React framework and the Cypress automation framework in a single, well-structured doc. It's clean, readable, and production-ready.

🚀 Autodesk Fusion Team Web — Fullstack Architecture + Test Automation
This project represents a hybrid enterprise-grade web application combining AngularJS 1.x, React 18, and a Cypress automation framework. It enables scalable development, smooth modernization, and high-confidence CI/CD testing.

🧱 Fullstack Framework Architecture
🔄 Hybrid: AngularJS 1.x + React 18
The core app is built on AngularJS 1.x, while new features are implemented using React 18, integrated seamlessly via:

ts
Copy
Edit
// app/index.ts
import angular from 'angular';
import ngReact from '@pakenfit/ngreact-18';
🧩 @pakenfit/ngreact-18 bridges React components into Angular templates, allowing incremental migration.

🛠️ Tech Stack Overview
Core Libraries
Framework	Purpose
AngularJS 1.x	Legacy application framework
React 18	New feature/component implementation
UI-Router	AngularJS client-side routing
Redux/ng-redux	App-wide state management

Build Tooling
Webpack 5 – Bundler

TypeScript – Type-safe development

Babel – Transpilation

LESS – CSS preprocessor

Quality Tools
ESLint / Prettier – Code style & linting

Stylelint – CSS/LESS linting

Husky – Git hooks for pre-commit validation

🧩 React Inside Angular — Sample
js
Copy
Edit
// cde_fusion_common_admin.dir.js
import('@adsk/cde-fusion-common-admin').then(({ FCECommonAdmin }) => {
  compileProvider.directive('cdeFusionCommonAdmin', (reactDirective) =>
    reactDirective(FCECommonAdmin, [
      'hubId',
      'density',
      'forgeHubId',
      'userId',
      'scopeId',
      'hubOwnerEmail',
      'hcaptchaSiteKeys',
      'hubUrn',
    ])
  );
});
🧪 Cypress Automation Framework
This project features an enterprise-grade Cypress testing suite built with TypeScript, fixtures, HAR recording, and custom commands to ensure stable and repeatable automated testing.

📁 Folder Layout
bash
Copy
Edit
spec/cypress/
├── integration/      # Mocked integration tests
├── e2e/              # Full E2E real-data tests
├── support/          # Commands & mocking logic
config/cypress/       # Base Cypress configs
scripts/              # Suite runners & recorders
logs/cypress_e2e/     # Screenshots, videos, HAR files
⚙️ Cypress Config Highlights
js
Copy
Edit
// config/cypress/cypress-e2e.config.js
screenshotsFolder: 'logs/cypress_e2e/screenshots',
videosFolder: 'logs/cypress_e2e/videos',
env: {
  withMocks: false,
  rootOutputDir: 'logs/cypress_e2e',
},
requestTimeout: 20000,
defaultCommandTimeout: 60000,
🔌 Plugins & Extensions
✅ HAR Generator for network capture

🔐 Session Manager with persistent state

🚀 Feature Flag Toggle in test runtime

🧬 Advanced Mocking System with auto-blocking of unmocked APIs

🧠 Custom Command Modules
Located in spec/cypress/support/, the framework includes over 30+ command files like:

login_commands.ts

project_commands.ts

admin_commands.ts

hub_merge_commands.ts

api_commands.ts

🧪 Test Strategy
Test Type	Description	Folder
Integration Test	Mocked backend, fast feedback	spec/cypress/integration/
E2E Test	Real backend workflows	spec/cypress/e2e/
Recording	Record mock fixtures for reuse	via scripts/cypress.js

🧬 Suite Definitions
Defined in scripts/cypress.js:

js
Copy
Edit
record: {
  spec: 'spec/cypress/integration/_setup/**/*',
  env: { withMocks: false, newAccount: false },
},
feature_flag_recordings: {
  spec: ['feature_flag_fixtures.spec.ts'],
  env: { withMocks: false },
},
🚀 Cypress Run Commands
bash
Copy
Edit
npm run cypress:open             # Open interactive Cypress GUI
npm run cypress:run              # Run headless tests
npm run cypress:record:all       # Record all fixtures
npm run cypress:record:project   # Record project-specific mocks
🔒 Environment Config (example)
Stored in cypress.env.json:

json
Copy
Edit
{
  "test_accounts_password": "Autodesk123!",
  "oxygen_trust_token": "eyJhbGciOiJSUzI1NiIs..."
}
🧾 Example Cypress Test
ts
Copy
Edit
describe('navigation.projects', () => {
  beforeEach(() => {
    const features = new Map([
      ['ft-hide-wiki', 'false'],
      ['folder-permission-single-project-conversion', 'false'],
    ]);
    cy.toggleFeatureFlags(features);
    cy.stubProject(DEFAULT_PROJECT);
  });

  it('should load project base page', () => {
    cy.visitBasePage();
  });
});
✅ CI/CD + Reporting
JUnit XML & Mochawesome HTML reports

HAR logs, screenshots, and video capture

Jenkins Integration

Parallel Execution

Auto cleanup of passed test artifacts

🧩 Why This Setup?
Feature	Value
✅ Hybrid Frontend	Supports migration + stability
🚀 Cypress with Fixtures	Fast, reliable, isolated tests
🎛️ Feature Flag Toggle	Environment-specific logic
🧠 Custom Command Layer	Business logic abstraction
📈 CI/CD Friendly	Test insights & integration ready

👋 Maintainers
This framework is maintained by the QA and Web Engineering teams at Autodesk Fusion 360, and is actively used in production across global deployments.

