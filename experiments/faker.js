import { fakerEN_GB as faker } from '@faker-js/faker';

function generatePersona() {
  const firstName = faker.person.firstName();
  const middleName = faker.person.middleName();
  const lastName = faker.person.lastName();
  
  return {
    firstName,
    middleName,
    lastName,
    fullName: `${firstName} ${middleName} ${lastName}`,
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: faker.location.zipCode(),
    phone: faker.phone.number(),
    email: faker.internet.email({ firstName, lastName })
  };
}

console.log(generatePersona());