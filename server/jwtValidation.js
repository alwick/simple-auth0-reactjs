const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const getSecret = () => {
  return jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://wickidcool-testing.auth0.com/.well-known/jwks.json`
  })
}

export const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: getSecret(),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://wickidcool-testing.auth0.com/`,
  algorithms: ['RS256']
});