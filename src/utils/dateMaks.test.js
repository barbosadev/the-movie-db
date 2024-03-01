import {
  convertDateToUTC,
  shortDateMask,
  longDateMask,
  numericDateMask,
  fullYearDateMask,
  mask,
} from "./dateMask";

describe("Testes para as funções de manipulação de datas", () => {
  test("Teste convertDateToUTC", () => {
    const date = new Date("2022-01-15T12:30:00Z");
    const utcDate = convertDateToUTC(date);

    expect(utcDate.getUTCFullYear()).toBe(2022);
    expect(utcDate.getUTCMonth()).toBe(0);
    expect(utcDate.getUTCDate()).toBe(15);
    expect(utcDate.getUTCHours()).toBe(15);
    expect(utcDate.getUTCMinutes()).toBe(30);
    expect(utcDate.getUTCSeconds()).toBe(0);
  });

  test("Teste mask", () => {
    const date = new Date("2022-01-15T12:30:00Z");
    const maskedDate = mask(date, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    expect(maskedDate).toBe("15 de jan. de 2022");
  });

  test("Teste shortDateMask", () => {
    const date = new Date("2022-01-15T12:30:00Z");
    const shortDate = shortDateMask(date);

    expect(shortDate).toBe("15 de jan. de 2022");
  });

  test("Teste longDateMask", () => {
    const date = new Date("2022-01-15T12:30:00Z");
    const longDate = longDateMask(date);

    expect(longDate).toBe("15 de janeiro de 2022");
  });

  test("Teste numericDateMask", () => {
    const date = new Date("2022-01-15T12:30:00Z");
    const numericDate = numericDateMask(date);

    expect(numericDate).toBe("15/01/2022");
  });

  test("Teste fullYearDateMask", () => {
    const date = new Date("2022-01-15T12:30:00Z");
    const fullYearDate = fullYearDateMask(date);

    expect(fullYearDate).toBe("2022");
  });
});
