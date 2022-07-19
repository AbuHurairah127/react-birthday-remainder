import { ADD_BIRTHDAY, CLEAR_ALL } from "../constants/types";

let initialState = {
  birthdaysList: [
    {
      name: "Abu hurairah",
      day: 21,
      month: 7,
      year: 2003,
      phone: "923207443537",
    },
    {
      name: "Abu Bakar Siddique",
      day: 14,
      month: 1,
      year: 2011,
      phone: "923136718537",
    },
  ],
};

const birthdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BIRTHDAY: {
      let newBirthdayList = [...state.birthdaysList, action.payload];
      console.log(newBirthdayList);
      return {
        ...state,
        birthdaysList: newBirthdayList,
      };
    }
    case CLEAR_ALL: {
      let newBirthdayList = [];
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
