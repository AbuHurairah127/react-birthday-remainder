import { ADD_BIRTHDAY, CLEAR_ALL } from "../constants/types";
export const addBirthday = (data) => {
  return {
    type: ADD_BIRTHDAY,
    payload: data,
  };
};
export const allClear = () => {
  return {
    type: CLEAR_ALL,
  };
};
