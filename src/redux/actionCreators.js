import * as actionTypes from "./actionConstants";
import axios from "axios";

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item,
  };
};

const setData = (payload) => {
  return {
    type: actionTypes.SET_DATA,
    payload,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    const url = "/mockdata/data.json";
    return axios
      .get(url)
      .then((res) => {
        dispatch(setData(res.data));
      })
      .catch(() => {
        alert("fetch data error.");
      });
  };
};
