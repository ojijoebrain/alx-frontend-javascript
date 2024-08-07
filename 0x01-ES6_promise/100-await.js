import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const result = { photo: null, user: null };

  try {
    result.photo = await uploadPhoto();
    result.user = await createUser();
  } catch (error) {
    console.error('Failed to upload photo or create user:', error);
  }

  return result;
};

export default asyncUploadUser;
