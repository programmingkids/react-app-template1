import axios from 'axios';

// 環境変数から取得
const APIURL = process.env.REACT_APP_APIURL;
const APIKEY = process.env.REACT_APP_APIKEY;

export const getXXXXX = async (xxxx,yyyy) => {
  const endpoint = '/get';
  const url = APIURL + endpoint;
  
  const params = {
    x: xxxx,
    y: yyyy,
  };
  
  const response = await axios.get(url, {
    params
  });
  return response.data;
};
