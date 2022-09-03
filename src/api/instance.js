import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  if (!config.url) {
    return config;
  }

  const url = config.url
    .split("/")
    .map((item) => {
      if (item[0] !== ":") {
        return item;
      }

      const itemWithoutColumn = item.slice(1);

      return itemWithoutColumn in config.urlParams
        ? config.urlParams[itemWithoutColumn]
        : item;
    })
    .join("/");

  return {
    ...config,
    url,
  };
});

export default axiosInstance;
