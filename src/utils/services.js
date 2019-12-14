import axios from 'axios';

const get = url => {
    /*return window.fetch(url)
    .then(response => {
        return response.json()
    });*/
    return axios({
        method: 'get',
        url: url
    });
}

const post = () => {

}

export {
    get,
    post
}