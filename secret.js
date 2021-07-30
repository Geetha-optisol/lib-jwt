const dotenv = require('dotenv').config()
const AWS = require("aws-sdk")

module.exports.generateSecretValue = async function () {
    var client = new AWS.SecretsManager({
        region: process.env.AWS_DEFAULT_REGION,
    });
    if (process.env.JWT_TOKEN_SECRET) {
        return process.env.JWT_TOKEN_SECRET;
    } else {
        let secretData = await client.getSecretValue({ SecretId: process.env.AWS_ECS_CLUSTER_NAME }).promise();
        if (secretData && secretData.SecretString) {
            secretData.SecretString = JSON.parse(secretData.SecretString);
            return secretData.SecretString.JWT_TOKEN_SECRET;
        }
    }
}