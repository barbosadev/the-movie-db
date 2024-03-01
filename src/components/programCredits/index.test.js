import { render } from "@testing-library/react";
import { ProgramCredits } from "./index";
import { LazyLoadImage } from "react-lazy-load-image-component";

describe("Testes para o componente ProgramCredits", () => {
  const mockContent = {
    creditsTitle: "Créditos do Programa",
  };

  const mockProgramCreditsData = [
    { name: "Ator 1", character: "Personagem 1", profile_path: "/path1.jpg" },
    { name: "Ator 2", character: "Personagem 2", profile_path: "/path2.jpg" },
  ];

  test("Renderiza o componente sem erros", () => {
    render(
      <ProgramCredits
        content={mockContent}
        programCreditsData={mockProgramCreditsData}
      />
    );
  });

  test("Exibe o título corretamente", () => {
    const { getByText } = render(
      <ProgramCredits
        content={mockContent}
        programCreditsData={mockProgramCreditsData}
      />
    );

    expect(getByText(mockContent.creditsTitle)).toBeInTheDocument();
  });
});
