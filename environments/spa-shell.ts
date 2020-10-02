// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const env = 'dev19';

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
  settingsUrl: `https://settings.${env}.signin.nhs.uk`,
  accessFrontEndUrl: `https://access.${env}.signin.nhs.uk`,
  cookieDomain : 'localhost',
  hmr: true,
  iproovUrl: `https://nhs.rp.secure.iproov.me`,
  applicationName: 'account',
  helpCentreUrl: 'http://helpcente'
};
