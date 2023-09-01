import uploadImage from "@/modules/daybook/helpers/uploadImage";
import axios from "axios";

describe("Pruebas en el helper uploadImage", () => {
  jest.setTimeout(10000);
  it("Debe de cargar un archivo y retornar el URL", async () => {
    const { data } = await axios.get(
      "https://res.cloudinary.com/dvhy9z3n4/image/upload/v1674815473/w0y5x6raaoy8akpiagqr.jpg",
      {
        responseType: "arraybuffer",
      }
    );
    const file = new File([data], "foto.jpg");
    const url = await uploadImage(file);

    expect(typeof url).toBe("string");
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
