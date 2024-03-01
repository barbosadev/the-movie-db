import { minutesToHours } from "./time";
describe("Testes para a função minutesToHours", () => {
  test("Teste Básico: 2 horas", () => {
    expect(minutesToHours(120)).toBe("2h00m");
  });

  test("Teste com Minutos Não Nulos: 2 horas e 15 minutos", () => {
    expect(minutesToHours(135)).toBe("2h15m");
  });

  test("Teste com Apenas Minutos: 45 minutos", () => {
    expect(minutesToHours(45)).toBe("0h45m");
  });

  test("Teste com Números Grandes: 25 horas", () => {
    expect(minutesToHours(1500)).toBe("25h00m");
  });

  test("Teste com Zero Minutos", () => {
    expect(minutesToHours(0)).toBe("0h00m");
  });

  test("Teste com Valor Não Numérico", () => {
    expect(minutesToHours("abc")).toBeNaN();
  });
});
