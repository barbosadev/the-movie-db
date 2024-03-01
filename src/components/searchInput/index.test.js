import { render, fireEvent } from "@testing-library/react";
import { SearchInput } from "./index";

describe("Testes para o componente SearchInput", () => {
  const mockText = "Texto de teste";
  const mockContent = {
    inputPlaceholder: "Digite aqui",
    buttonText: "Buscar",
  };
  const mockOnChange = jest.fn();
  const mockHandleSearch = jest.fn();

  test("Renderiza o componente sem erros", () => {
    render(
      <SearchInput
        text={mockText}
        onChange={mockOnChange}
        handleSearch={mockHandleSearch}
        content={mockContent}
      />
    );
  });

  test("Chama a função onChange ao digitar no input", () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        text={mockText}
        onChange={mockOnChange}
        handleSearch={mockHandleSearch}
        content={mockContent}
      />
    );

    fireEvent.change(getByPlaceholderText(mockContent.inputPlaceholder), {
      target: { value: "Novo texto" },
    });

    expect(mockOnChange).toHaveBeenCalled();
  });

  test("Chama a função handleSearch ao pressionar Enter", () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        text={mockText}
        onChange={mockOnChange}
        handleSearch={mockHandleSearch}
        content={mockContent}
      />
    );

    fireEvent.keyDown(getByPlaceholderText(mockContent.inputPlaceholder), {
      key: "Enter",
    });

    expect(mockHandleSearch).toHaveBeenCalled();
  });

  test("Chama a função handleSearch ao clicar no botão", () => {
    const { getByText } = render(
      <SearchInput
        text={mockText}
        onChange={mockOnChange}
        handleSearch={mockHandleSearch}
        content={mockContent}
      />
    );

    fireEvent.click(getByText(mockContent.buttonText));

    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
