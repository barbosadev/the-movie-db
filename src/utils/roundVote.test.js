import { roundVote } from "./roundVote";
describe("Testes para a função roundVote", () => {
  test("Teste Básico: Arredondar para o número inteiro mais próximo", () => {
    expect(roundVote(4.3)).toBe(43);
  });

  test("Teste com Número Decimal Terminando em .5", () => {
    expect(roundVote(6.5)).toBe(65);
  });

  test("Teste com Número Decimal Inferior a .5", () => {
    expect(roundVote(7.2)).toBe(72);
  });

  test("Teste com Número Decimal Superior a .5", () => {
    expect(roundVote(8.7)).toBe(87);
  });

  test("Teste com Valor Zero", () => {
    expect(roundVote(0)).toBe(0);
  });

  test("Teste com Valor Negativo", () => {
    expect(roundVote(-3.8)).toBe(-38);
  });

  test("Teste com Valor Não Numérico", () => {
    expect(roundVote("abc")).toBeNaN();
  });
});
