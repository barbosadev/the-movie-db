import { render, fireEvent } from "@testing-library/react";
import { ProgramWithoutPhoto } from "./index";
import { LazyLoadImage } from "react-lazy-load-image-component";

describe("Testes para o componente ProgramWithoutPhoto", () => {
  const mockProgram = {
    media_type: "movie",
    id: 123,
    title: "Programa de Teste",
    name: "Nome de Teste",
  };

  const mockHandleProgram = jest.fn();

  test("Renderiza o componente sem erros", () => {
    render(
      <ProgramWithoutPhoto
        program={mockProgram}
        handleProgram={mockHandleProgram}
      />
    );
  });

  test("Chama a função handleProgram ao clicar na imagem", () => {
    const { getByAltText } = render(
      <ProgramWithoutPhoto
        program={mockProgram}
        handleProgram={mockHandleProgram}
      />
    );

    fireEvent.click(getByAltText(mockProgram.title || mockProgram.name));

    expect(mockHandleProgram).toHaveBeenCalledWith(
      mockProgram.media_type,
      mockProgram.id
    );
  });

  test("Exibe a imagem de placeholder corretamente", () => {
    const { getByAltText } = render(
      <ProgramWithoutPhoto
        program={mockProgram}
        handleProgram={mockHandleProgram}
      />
    );

    const placeholderImage = getByAltText(
      mockProgram.title || mockProgram.name
    );
    expect(placeholderImage).toBeInTheDocument();
    expect(placeholderImage.src).toBe(
      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
    );
  });
});
