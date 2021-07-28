let jwt = require('jsonwebtoken');
const { generateSecretValue } = require('./secret');

async function verify(token) {
    let JWT_TOKEN_SECRET = await generateSecretValue();
    try {
        return jwt.verify(token, JWT_TOKEN_SECRET, function (err, decoded) {
            if (err) return err;
            else return decoded;
        })
    } catch (exception) {
        return exception;
    }
}

async function signJWT(userid, tenantId) {
    if (userid && tenantId) {
        let JWT_TOKEN_SECRET = await generateSecretValue();
        let iat = Date.now();
        let exp = Math.round((iat / 1000) + 24 * 60 * 60);
        return jwt.sign({ userid, tenantId, iat, exp }, JWT_TOKEN_SECRET)
    } else {
        return null;
    }
}

module.exports = { signJWT, verify }