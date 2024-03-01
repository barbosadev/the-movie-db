import { render } from "@testing-library/react";
import { BannerHome } from "./index";

describe("Testes para o componente BannerHome", () => {
  test("Renderiza o componente sem erros", () => {
    render(
      <BannerHome
        content={{ welcome: "Bem-vindo", description: "Descrição" }}
      />
    );
  });

  test("Exibe o conteúdo passado como propriedade", () => {
    const content = {
      welcome: "Bem-vindo ao BannerHome",
      description: "Isso é uma descrição",
    };
    const { getByText } = render(<BannerHome content={content} />);
    expect(getByText(content.welcome)).toBeInTheDocument();
    expect(getByText(content.description)).toBeInTheDocument();
  });

  test("Utiliza a imagem de fundo correta", () => {
    const { getByTestId } = render(
      <BannerHome
        content={{ welcome: "Bem-vindo", description: "Descrição" }}
      />
    );

    const backgroundImageElement = getByTestId("banner-background");

    expect(backgroundImageElement).toHaveStyle({
      backgroundImage: `url('https://deliriumnerd.com/wp-content/uploads/2022/09/Ruptura-serie.jpg')`,
    });
  });
});
