// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret

function createSecretHolder(secret) {
  let secretValue = secret;

  return {
    getSecret: function () {
      return secretValue;
    },
    setSecret: function (secret) {
      secretValue = secret;
    },
  };
}

obj = createSecretHolder(5);
console.log(createSecretHolder(5));
console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret());
