import { useState } from "react";

const useListItem = () => {
  const [cYear, setCYear] = useState();
  const getAge = () => {
    let now = new Date().getFullYear();
    setCYear(now);
  };
  return { getAge, cYear };
};

export default useListItem;
