import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Testes para o componente Header", () => {
  test("Renderiza o componente sem erros", () => {
    render(<Header />);
  });

  test("Exibe o logotipo corretamente", () => {
    const { getByAltText } = render(<Header />);

    const logoElement = getByAltText("banner");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.src).toBe(
      "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
    );
  });
});
