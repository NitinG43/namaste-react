import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchResMenusData = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      setResInfo(json?.data);
    } catch (error) {
      console.log("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchResMenusData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;