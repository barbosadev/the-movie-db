import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { SearchInput } from "../../components/searchInput";
import { Trending } from "../../components/trending";
import { getTrendingPrograms } from "../../services/trending";
import { MostPopular } from "../../components/popular";
import { content } from "./content";
import { BannerHome } from "../../components/bannerHome";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const [trendingList, setTrendingList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getTrendingList = () => {
    getTrendingPrograms("day").then((res) => {
      setTrendingList(res.results);
    });
  };

  useEffect(() => getTrendingList(), []);

  const handleSearch = (query) => {
    navigate(`/search-page/${query}`);
  };

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
        />
      </BannerHome>
      <Trending trendingList={trendingList} />
      <MostPopular popularList={trendingList} />
    </>
  );
};
