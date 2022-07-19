import { ADD_BIRTHDAY } from "../constants/types";
export const addBirthday = (data) => {
  console.log("action:", data);
  return {
    type: ADD_BIRTHDAY,
    payload: data,
  };
};
