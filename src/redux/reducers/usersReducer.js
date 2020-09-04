import { normalizeArray } from "../../utils";
import CONSTANTS from "../constants";

const initialState = {
  users: [],
  dialog: {
    show: false,
    type: ""
  },
  searchString: "",
  searchDialog: {
    minPoints: "",
    maxPoints: "",
    available: false
  }
};

const data = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    thumbnail: "https://randomuser.me/api/portraits/men/17.jpg",
    games: [
      { name: "LOL", scoredPoints: 1 },
      { name: "WOW", scoredPoints: 24 },
      { name: "PES2020", scoredPoints: 89 }
    ],
    available: true
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    thumbnail: "https://randomuser.me/api/portraits/women/90.jpg",
    games: [
      { name: "Battlefield", scoredPoints: 65 },
      { name: "Max Payne", scoredPoints: 89 },
      { name: "FIFA20", scoredPoints: 21 }
    ],
    available: false
  },
  {
    id: 3,
    firstName: "Joe",
    lastName: "Exotic",
    thumbnail: "https://randomuser.me/api/portraits/men/31.jpg",
    games: [
      { name: "Battlefield", scoredPoints: 76 },
      { name: "Max Payne", scoredPoints: 23 },
      { name: "FIFA20", scoredPoints: 90 }
    ],
    available: true
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.GET_USERS:
      return {
        ...state,
        users: normalizeArray(data, "id")
      };
    case CONSTANTS.SHOW_DIALOG: {
      const newDialog = {
        show: !action.payload ? false : true,
        type: action.payload
      };
      return {
        ...state,
        dialog: newDialog
      };
    }
    case CONSTANTS.SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload
      };
    case CONSTANTS.ADD_USER: {
      const { id } = action.payload;
      return {
        ...state,
        users: {
          allIds: [id, ...state.users.allIds],
          byIds: { [id]: action.payload, ...state.users.byIds }
        }
      };
    }
    case CONSTANTS.REMOVE_USER: {
      delete state.users.byIds[action.payload];
      return {
        ...state,
        users: {
          allIds: state.users.allIds.filter(id => id !== action.payload),
          byIds: { ...state.users.byIds }
        }
      };
    }
    case CONSTANTS.SET_SEARCH_DIALOG:
      return {
        ...state,
        searchDialog: action.payload
      };
    default:
      return state;
  }
}
