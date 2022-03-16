import Axios from 'axios';

const urlMov = `${process.env.BASE_API_URL}/movements`;

export const getMovementsList = (accountId) =>
  Axios.get(`${urlMov}/?accountId=${accountId}`).then(response => {
    return response.data;
  });

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccountForPrint = id =>

  Axios.get(`${url}/${id}`).then(response => {
    return response.data;
  });