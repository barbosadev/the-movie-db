import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrendingPrograms } from "../../services/trending";
import { getPopular } from "../../services/popular";

export const useHome = () => {
  const navigate = useNavigate();
  const [trendingList, setTrendingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [trendingOptionSelected, setTrendingOptionSelected] = useState("day");
  const [popularOptionSelected, setPopularOptionSelected] = useState("tv");

  const getTrendingList = () => {
    getTrendingPrograms(trendingOptionSelected).then((res) => {
      setTrendingList(res.results);
    });
  };

  const getPopularList = () => {
    getPopular(popularOptionSelected).then((res) => {
      setPopularList(res.results);
    });
  };

  const handleSearch = (query) => {
    navigate(`/search-page/${query}`);
  };

  const handleProgram = (media_type, id) => {
    navigate(`/${media_type}/${id}`);
  };

  const handleTrendingSwitch = (option) => {
    setTrendingOptionSelected(option);
  };

  const handlePopularSwitch = (option) => {
    setPopularOptionSelected(option);
  };

  useEffect(() => getTrendingList(), [trendingOptionSelected]);
  useEffect(() => getPopularList(), [popularOptionSelected]);

  return {
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
  };
};
