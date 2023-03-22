function find(object, path) {
  const keys = path.split(".");
  let value = object;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (Array.isArray(value)) {
      value = value[+key];
    } else if (value && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
}

find(
  {
    user: {
      name: { first: "Ann", second: "White" },
      isActive: true,
      hobbies: [
        ["swimming", "jogging", "running", "climbing"],
        "painting",
        "coding",
        "books",
        "comedies",
      ],
    },
  },
  "user.hobbies.0.3"
); // 'climbing'
