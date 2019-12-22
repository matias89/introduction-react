import axios from "axios";

const get = url => {
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

export { get, post };
