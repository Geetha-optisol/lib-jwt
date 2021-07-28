// Require packages
const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert, expect } = chai;
chai.use(chaiHttp);
const { signJWT, verify } = require('../index');

//Variable declaration
let generated;
let userid = 01;
let tenantId = "tenantO1";


describe("*** Method : GET - signJWT Service ***", async function (done) {

    it('signJWT : Positive Scenario --> token exists', async () => {
        generated = await signJWT(userid, tenantId);
        assert.ok(generated);
        expect(generated).to.be.a('string');
    }).timeout(5000);

    it('signJWT : Negative Scenario --> token does not exist', async () => {
        let token = await signJWT();
        assert.equal(token, null);
    })

})


describe("*** Method : GET - Verify token Service ***", async function (done) {

    it('Verify : Positive Scenario --> token exists', async () => {
        let verifiedObj = await verify(generated);
        expect(verifiedObj).to.be.an('object');
        expect(verifiedObj).to.have.property('userid');
        expect(verifiedObj).to.have.property('tenantId');
        assert.equal(verifiedObj.userid, userid);
        assert.equal(verifiedObj.tenantId, tenantId);
    }).timeout(5000);

    it('Verify : Negative Scenario --> token does not exist', async () => {
        let verifiedObj = await verify(null);
        expect(verifiedObj).to.be.an('object');
        expect(verifiedObj).to.have.property('message');
        assert.equal(verifiedObj.message, 'jwt must be provided');
    })

    it('Verify : Negative Scenario --> malformed token', async () => {
        let verifiedObj = await verify("wrong token");
        expect(verifiedObj).to.be.an('object');
        expect(verifiedObj).to.have.property('message');
        assert.equal(verifiedObj.message, 'jwt malformed');
    })
})