## authentication

```js
const { PasswordAuthStrategy } = require("@Kestonejs/auth-password");
```

authentication strategies allowe users to identify
themseleves to kestone js. This can be used to
restrict access to the adminUI
and to configure access

# password auth stategy

authenticates a party (often a user) based on their
presentations of credential pair
the credential pair consist of an identifier and
secret (often email and password).

## usage

```js
Keystone.createList("User", {
  fields: {
    username: { type: Text },
    password: { type: password },
  },
});
```

**we can configure the keystoneJS auth strategy as:**

```js
const authStrategy = Keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: {
    identifyField: "username",
    secretFiel: "password",
  },
});
```

**protectIdenties:**

Generally, KeystoneJS strives to provides user with
detail error messages
when `protectIdenties` is `false`, authentication attemps will return helpful messages with know keys:

[passwordAuth:identiy:notfound],
[passwordAuth:identy:multipleFound],
[pass]

> _note:_ when `protectedIdenties` is `true` these erro messages
> and keys are suppressed.Responses to failed authentcation attemps
> contain only generic message and key

`[passwordAuth:failure]`
