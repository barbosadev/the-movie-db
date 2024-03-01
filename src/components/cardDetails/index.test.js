import { render, fireEvent } from "@testing-library/react";
import { CardDetails } from "./index";
import { longDateMask } from "../../utils/dateMask";

describe("Testes para o componente CardDetails", () => {
  const mockProgram = {
    title: "Programa de Teste",
    name: "Nome de Teste",
    release_date: "2022-02-20",
    first_air_date: "2022-02-20",
    overview: "Descrição de teste para o programa.",
    media_type: "movie",
    id: 123,
  };

  const mockHandleProgram = jest.fn();

  test("Renderiza o componente sem erros", () => {
    render(
      <CardDetails program={mockProgram} handleProgram={mockHandleProgram} />
    );
  });

  test("Exibe os detalhes do programa corretamente", () => {
    const { getByText } = render(
      <CardDetails program={mockProgram} handleProgram={mockHandleProgram} />
    );
    expect(
      getByText(mockProgram.title || mockProgram.name)
    ).toBeInTheDocument();
    expect(
      getByText(
        longDateMask(mockProgram.release_date || mockProgram.first_air_date)
      )
    ).toBeInTheDocument();
    expect(getByText(mockProgram.overview)).toBeInTheDocument();
  });

  test("Chama a função handleProgram ao clicar no título", () => {
    const { getByText } = render(
      <CardDetails program={mockProgram} handleProgram={mockHandleProgram} />
    );

    fireEvent.click(getByText(mockProgram.title || mockProgram.name));

    expect(mockHandleProgram).toHaveBeenCalledWith(
      mockProgram.media_type,
      mockProgram.id
    );
  });
});
