import { storage } from "./firebase";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export const uploadImage = async (file) => {
  try {
    const fileName = `${Date.now()}-${file.name}`;

    const imageRef = ref(storage, `products/${fileName}`);

    await uploadBytes(imageRef, file);

    const url = await getDownloadURL(imageRef);

    return url;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteImage = async (imageUrl) => {
  try {
    const imageRef = ref(storage, imageUrl);

    await deleteObject(imageRef);
  } catch (error) {
    console.error(error);
  }
};