import faker from 'faker'

const generateUsers = {
  users: Array.from({ length: 10 }, (_, id) => {
    return {
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.firstName(),
      phoneNumber: faker.phone.phoneNumberFormat(),
    }
  }),
}

module.exports = generateUsers
