import assert from "assert";

function birthdayParty(birthday: Date): Date {
  const day: number = birthday.getDay();
  if (0 < day && day < 6) {
    birthday.setDate(birthday.getDate() + 6 - day);
  }
  return birthday;
}

assert.deepStrictEqual(
  birthdayParty(new Date(2022, 0, 5)),
  new Date(2022, 0, 8)
);
assert.deepStrictEqual(
  birthdayParty(new Date(2022, 1, 21)),
  new Date(2022, 1, 26)
);
assert.deepStrictEqual(
  birthdayParty(new Date(2022, 2, 26)),
  new Date(2022, 2, 26)
);
assert.deepStrictEqual(
  birthdayParty(new Date(2022, 3, 17)),
  new Date(2022, 3, 17)
);
assert.deepStrictEqual(
  birthdayParty(new Date(2022, 2, 30)),
  new Date(2022, 3, 2)
);