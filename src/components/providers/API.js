import axios from 'axios';

// 環境変数から取得
const APIURL = import.meta.env.VITE_APIURL;
const APIKEY = import.meta.env.VITE_APIKEY;

export const getXXXXX = async (xxxx, yyyy) => {
  const endpoint = '/get';
  const url = APIURL + endpoint;

  const params = {
    x: xxxx,
    y: yyyy,
  };

  const response = await axios.get(url, {
    params,
  });
  return response.data;
};
