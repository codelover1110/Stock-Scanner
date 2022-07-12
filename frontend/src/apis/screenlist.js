import axios from "axios";

// const headers = {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
// }

const SERVER_URL = "http://127.0.0.1:8000/screenlist/";

export const getScreenList = () => {
    return axios.get(SERVER_URL).then((resp) => {
        return resp.data;
    });
}

export const saveScreenList = (data) => {
    return axios.post(SERVER_URL,data).then((resp) => {
        return resp.data;
    })
}