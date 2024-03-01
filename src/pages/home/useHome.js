import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrendingPrograms } from "../../services/trending";
import { getPopular } from "../../services/popular";

export const useHome = () => {
  const navigate = useNavigate();
  const [trendingList, setTrendingList] = useState([[], []]);
  const [popularList, setPopularList] = useState([[], []]);
  const [searchText, setSearchText] = useState("");
  const [trendingOptionSelected, setTrendingOptionSelected] = useState("day");
  const [popularOptionSelected, setPopularOptionSelected] = useState("tv");

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

  useEffect(() => {
    const getTrendingList = () => {
      if (trendingOptionSelected === "day" && trendingList[0].length === 0) {
        getTrendingPrograms(trendingOptionSelected).then((res) => {
          setTrendingList([[...res.results], []]);
        });
      }

      if (trendingOptionSelected === "week" && trendingList[1].length === 0) {
        getTrendingPrograms(trendingOptionSelected).then((res) => {
          const auxTrendingList = trendingList[0];
          setTrendingList([auxTrendingList, [...res.results]]);
        });
      }
    };

    getTrendingList();
  }, [trendingOptionSelected]);

  useEffect(() => {
    const getPopularList = () => {
      if (popularOptionSelected === "tv" && popularList[0].length === 0) {
        getPopular(popularOptionSelected).then((res) => {
          setPopularList([[...res.results], []]);
        });
      }

      if (popularOptionSelected === "movie" && popularList[1].length === 0) {
        getPopular(popularOptionSelected).then((res) => {
          const auxPopularList = popularList[0];
          setPopularList([auxPopularList, [...res.results]]);
        });
      }
    };

    getPopularList();
  }, [popularOptionSelected]);

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
