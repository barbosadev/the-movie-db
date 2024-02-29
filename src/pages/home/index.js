import { useHome } from "./useHome";
import { content } from "./content";
import { Header } from "../../components/header";
import { Trending } from "../../components/trending";
import { MostPopular } from "../../components/popular";
import { BannerHome } from "../../components/bannerHome";
import { SearchInput } from "../../components/searchInput";

export const Home = () => {
  const {
    trendingList,
    popularList,
    searchText,
    trendingOptionSelected,
    popularOptionSelected,
    setSearchText,
    handleTrendingSwitch,
    handlePopularSwitch,
    handleProgram,
    handleSearch,
  } = useHome();

  return (
    <>
      <Header />
      <BannerHome content={content}>
        <SearchInput
          text={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          handleSearch={() => handleSearch(searchText)}
          content={content.searchContent}
        />
      </BannerHome>
      <Trending
        trendingList={trendingList}
        handleProgram={handleProgram}
        content={content.trendingContent}
        period={trendingOptionSelected}
        handleSwitch={handleTrendingSwitch}
      />
      <MostPopular
        popularList={popularList}
        handleProgram={handleProgram}
        content={content.popularContent}
        media={popularOptionSelected}
        handleSwitch={handlePopularSwitch}
      />
    </>
  );
};
