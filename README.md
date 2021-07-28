<h1 align=center>
  JWT Library
</h1>

<p align=center>
  This is a private JWT library for <a href="https://github.com/MoleculeEngineering">MoleculeEngineering</a> and the package details and how we can extend and configure it will be explained below.  
</p>


## What is jwt?

It is an _json web token generation library_, which generates token from input. 

## Installation

### Node.js

`lib-jwt` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install --save-dev @moleculeengineering/lib-jwt

## Usage

Import the library in your code, and then pick `signJWT` to generate token:

### Pre-Native Modules Usage (_as local variables_)

```js
const { signJWT, verify } = require("@moleculeengineering/lib-jwt");
```

### Related Projects

api-company (https://github.com/MoleculeEngineering/api-company)

### Contributors

Geetha Selvaraj