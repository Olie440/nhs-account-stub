// Copy and paste this file into src/environments/environments.ts in spa-account-management

const env = 'dev';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000',
  accountApiUrl: 'http://localhost:4000',
  authenticateApiUrl: 'http://localhost:4000',
  accApiUrl: 'http://localhost:4000',
  idCheckerApiUrl: 'http://localhost:4000',
  deployDomain: `https://api.${env}.signin.nhs.uk`,
  healthServiceApiUrl: 'http://localhost:4000',
  manageAccountApiUrl: 'http://localhost:4000',
  accountFrontEndUrl: `https://account.${env}.signin.nhs.uk/#/account`,
  accessFrontEndUrl: `https://access.${env}.signin.nhs.uk`,
  cookieDomain: 'localhost',
  hmr: true,
  applicationName: 'settings'
};
