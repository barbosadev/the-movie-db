import { useEffect, useState } from "react";
import { getSearchResult } from "../../services/search";
import { useParams, useNavigate } from "react-router-dom";

export const useSearch = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [resultList, setResultList] = useState([]);

  const handleProgram = (media_type, id) => {
    navigate(`/${media_type}/${id}`);
  };

  useEffect(() => {
    getSearchResult(query).then((result) => {
      setResultList(result.results);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { resultList, handleProgram };
};
