import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = () =>
  Axios.get(url).then(response => {
    return response.data;
  });

const urlTransfer = `${process.env.BASE_API_URL}/transfer`;

export const addTransfer = field =>
Axios.post(`${urlTransfer}`, field).then(response => {
    return response.data;
  });