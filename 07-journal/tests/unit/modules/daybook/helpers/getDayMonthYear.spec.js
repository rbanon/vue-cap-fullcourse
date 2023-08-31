import getDayMonthYear from "@/modules/daybook/helpers/getDayMonthYear";

describe("Pruebas en el helper getDayMonthYear", () => {
  it("getDayMonthYear debe de retornar el día y el mes en el formato correcto", () => {
    const date = new Date(2021, 0, 1);
    const dayMonthYear = getDayMonthYear(date);
    expect(dayMonthYear).toEqual({
      day: 1,
      month: "Enero",
      yearDay: "2021, Viernes",
    });
  });
});
