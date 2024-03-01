import { useEffect, useState } from "react";
import { getSearchResult } from "../../services/search";
import { useParams, useNavigate } from "react-router-dom";

export const useSearch = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [resultList, setResultList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleProgram = (media_type, id) => {
    navigate(`/${media_type}/${id}`);
  };

  const handleSearch = (query) => {
    navigate(`/search-page/${query}`);
  };

  useEffect(() => {
    getSearchResult(query).then((result) => {
      setResultList(result.results);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    resultList,
    handleProgram,
    searchText,
    setSearchText,
    handleSearch,
  };
};
