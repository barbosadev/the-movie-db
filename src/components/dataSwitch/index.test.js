import { render, fireEvent } from "@testing-library/react";
import { DataSwitch } from "./index";

describe("Testes para o componente DataSwitch", () => {
  const mockOptions = [
    { option: "option1", text: "Opção 1" },
    { option: "option2", text: "Opção 2" },
    { option: "option3", text: "Opção 3" },
  ];

  const mockSelectedOption = "option1";
  const mockHandleSwitch = jest.fn();

  test("Renderiza o componente sem erros", () => {
    render(
      <DataSwitch
        options={mockOptions}
        selectedOption={mockSelectedOption}
        handleSwitch={mockHandleSwitch}
      />
    );
  });

  test("Exibe as opções corretamente", () => {
    const { getByText } = render(
      <DataSwitch
        options={mockOptions}
        selectedOption={mockSelectedOption}
        handleSwitch={mockHandleSwitch}
      />
    );

    mockOptions.forEach((option) => {
      expect(getByText(option.text)).toBeInTheDocument();
    });
  });

  test("Chama a função handleSwitch ao clicar em uma opção", () => {
    const { getByText } = render(
      <DataSwitch
        options={mockOptions}
        selectedOption={mockSelectedOption}
        handleSwitch={mockHandleSwitch}
      />
    );

    fireEvent.click(getByText(mockOptions[1].text));

    expect(mockHandleSwitch).toHaveBeenCalledWith(mockOptions[1].option);
  });
});
