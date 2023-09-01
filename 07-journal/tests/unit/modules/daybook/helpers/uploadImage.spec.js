import cloudinary from "cloudinary";
import uploadImage from "@/modules/daybook/helpers/uploadImage";
import axios from "axios";

cloudinary.config({
  cloud_name: "dvhy9z3n4",
  api_key: "745725197471665",
  api_secret: "8SMr1SD14-4Z5Vfy6ujEcb8xK-k",
});

//jest.setTimeout(15000);
describe("Pruebas en el helper uploadImage", () => {
  it("Debe de cargar un archivo y retornar el URL", async () => {
    const { data } = await axios.get(
      "https://res.cloudinary.com/dvhy9z3n4/image/upload/v1674815473/w0y5x6raaoy8akpiagqr",
      {
        responseType: "arraybuffer",
      }
    );
    const file = new File([data], "foto.jpg");
    const url = await uploadImage(file);

    expect(typeof url).toBe("string");

    // Tomar el ID
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    await cloudinary.v2.api.delete_resources(imageId);
  });

  // it("Debe de cargar un archivo y retornar el URL", () => {
  //   axios
  //     .get(
  //       "https://res.cloudinary.com/dvhy9z3n4/image/upload/v1674815473/w0y5x6raaoy8akpiagqr.jpg",
  //       {
  //         responseType: "arraybuffer",
  //       }
  //     )
  //     .then((response) => {
  //       const file = new File([response.data], "foto.jpg");
  //       uploadImage(file).then((response) => {
  //         console.log(response);
  //         expect(typeof url).toBe("string");
  //       });
  //     });
  // });
});
