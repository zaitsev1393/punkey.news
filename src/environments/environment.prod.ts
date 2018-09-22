export const environment = {
  production: true,
  apiBase: 'https://violet-monkey-api.herokuapp.com',
  token_auth_config: {
    apiBase: 'https://violet-api.herokuapp.com',

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
