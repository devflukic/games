import CONSTANTS from "./constants";

export default {
  getUsers: () => ({
    type: CONSTANTS.GET_USERS
  }),
  showDialog: payload => ({
    type: CONSTANTS.SHOW_DIALOG,
    payload
  }),
  setSearchString: payload => ({
    type: CONSTANTS.SET_SEARCH_STRING,
    payload
  }),
  addUser: payload => ({
    type: CONSTANTS.ADD_USER,
    payload
  }),
  removeUser: payload => ({
    type: CONSTANTS.REMOVE_USER,
    payload
  }),
  setSearchDialog: payload => ({
    type: CONSTANTS.SET_SEARCH_DIALOG,
    payload
  })
};
