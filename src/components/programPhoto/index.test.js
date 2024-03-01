import { render, fireEvent } from "@testing-library/react";
import { ProgramPhoto } from "./index";
import { LazyLoadImage } from "react-lazy-load-image-component";

describe("Testes para o componente ProgramPhoto", () => {
  const mockProgram = {
    media_type: "movie",
    id: 123,
    title: "Programa de Teste",
    name: "Nome de Teste",
    poster_path: "/poster.jpg",
  };

  const mockHandleProgram = jest.fn();

  test("Renderiza o componente sem erros", () => {
    render(
      <ProgramPhoto program={mockProgram} handleProgram={mockHandleProgram} />
    );
  });

  test("Chama a função handleProgram ao clicar na imagem", () => {
    const { getByAltText } = render(
      <ProgramPhoto program={mockProgram} handleProgram={mockHandleProgram} />
    );
    fireEvent.click(getByAltText(mockProgram.title || mockProgram.name));
    expect(mockHandleProgram).toHaveBeenCalledWith(
      mockProgram.media_type,
      mockProgram.id
    );
  });

  test("Exibe a imagem corretamente", () => {
    const { getByAltText } = render(
      <ProgramPhoto program={mockProgram} handleProgram={mockHandleProgram} />
    );

    const imageElement = getByAltText(mockProgram.title || mockProgram.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(
      `https://media.themoviedb.org/t/p/w94_and_h141_bestv2${mockProgram.poster_path}`
    );
  });
});
