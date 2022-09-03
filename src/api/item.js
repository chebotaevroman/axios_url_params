import axiosInstance from "./instance";
import ROUTES from "../constants/routes";

export const getItem = (id) =>
  axiosInstance.get(ROUTES.GET_ITEM, {
    urlParams: {
      id,
    },
  });
