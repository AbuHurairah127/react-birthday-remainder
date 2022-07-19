import { ADD_BIRTHDAY } from "../constants/types";

let initialState = {
  birthdaysList: [
    {
      name: "Abu hurairah",
      day: 21,
      month: 7,
      year: 2003,
      phone: "923207443537",
      gender: "Male",
    },
    {
      name: "Abu Bakar Siddique",
      day: 14,
      month: 1,
      year: 2011,
      phone: "923136718537",
      gender: "Male",
    },
  ],
};

const birthdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BIRTHDAY: {
      let newBirthdayList = [...state.birthdaysList, action.payload];
      return {
        ...state,
        birthdaysList: newBirthdayList,
      };
    }
    default:
      return state;
  }
};

export default birthdayReducer;
