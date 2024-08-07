export default async function signUpUser(firstName, lastName) {
  return {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  };
}
