export default async function uploadPhoto(filename) {
  try {
    throw new Error(`${filename} cannot be processed`);
  } catch (error) {
    return Promise.reject(error);
  }
}
