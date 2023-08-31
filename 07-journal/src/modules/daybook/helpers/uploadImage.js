import axios from "axios";

const uploadImage = async (file) => {
  if (!file) {
    return;
  }
  try {
    const formData = new FormData();
    formData.append("upload_preset", "curso-vue");
    formData.append("file", file);

    const url = "https://api.cloudinary.com/v1_1/dvhy9z3n4/image/upload";
    const { data } = await axios.post(url, formData);
    console.log(data.secure_url);
    return data.secure_url;
  } catch (err) {
    console.error("Error al cargar el archivo");
    console.log(err);
    throw err;
  }
};

export default uploadImage;
