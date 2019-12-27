import 'babel-polyfill';
import axios from "axios";

const _get = url => {
  return window.fetch(url).then(response => {
    return response.json();
  });
  /*
    return axios({
        method: 'get',
        url: url
    });
  */ 
};

const get = async (url) => {
  const response = await window.fetch(url);
  const j = await response.json();
  return j;
  //console.log('>>> JSON', j);
  //return response.json();
}

const test = async (url1, url2, url3) => {

  const response1 = await get(url1);
  const response2 = await get(url2);
  const response3 = await get(url3);

  return {
    r1: response1,
    response2,
    response3
  }
}



const post = (url, data) => {
  return window
    .fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json();
    });
};

export { get, _get, post, test };
