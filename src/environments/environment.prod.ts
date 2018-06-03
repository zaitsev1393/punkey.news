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
