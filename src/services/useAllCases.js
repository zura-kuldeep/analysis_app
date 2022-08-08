import { useCallback, useEffect, useState } from "react";

import { httpGetAllCases } from "./requests";

function useAllCases() {
  const [cases, saveCases] = useState([]);

  const getCases = useCallback(async () => {
    const fetchedCases = await httpGetAllCases();
    saveCases(fetchedCases);
  }, []);

  useEffect(() => {
    getCases();
  }, [getCases]);

  return cases;
}

export default useAllCases;