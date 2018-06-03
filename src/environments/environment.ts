// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBase: 'http://localhost:3000',
  token_auth_config: {
    apiBase: 'http://localhost:3000',

    signInPath: 'api/auth/sign_in',

    signOutPath: 'api/auth/sign_out',

    registerAccountPath: 'api/auth/sign_up',

    validateTokenPath: 'api/auth/validate_token',

    globalOptions: {
      headers: {
        'Content-Type':     'application/json',
        'Accept':           'application/json'
      }
    }
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
