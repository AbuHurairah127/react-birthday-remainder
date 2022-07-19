import { ADD_BIRTHDAY } from "../constants/types";
export const addBirthday = (data) => {
  return {
    type: ADD_BIRTHDAY,
    payload: data,
  };
};
