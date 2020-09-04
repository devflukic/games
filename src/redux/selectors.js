import { createSelector } from "reselect";

const getUsers = state => state.users.users;
const getSearchString = state => state.users.searchString;
const getDialog = state => state.users.dialog;
const getSearchDialog = state => state.users.searchDialog;

const getUsersList = createSelector(
  [getUsers, getSearchString, getSearchDialog],
  (users, searchString, searchDialog) => {
    const byIds = users.byIds;

    if (users && users.allIds) {
      return users.allIds.reduce((acc, id) => {
        const a = acc;
        const user = byIds[id];
        const { games, firstName, lastName, available } = user;
        const fullName = `${firstName} ${lastName}`;

        let sumScoredPoints = 0;
        let averagePoints;
        if (games) {
          games.forEach(game => {
            sumScoredPoints = sumScoredPoints + game.scoredPoints;
          });
          averagePoints = (sumScoredPoints / games.length).toFixed(2);

          user.averageScore = averagePoints;
        } else {
          user.averageScore = sumScoredPoints;
        }

        const isBetween =
          user.averageScore >= parseInt(searchDialog.minPoints) &&
          user.averageScore <= parseInt(searchDialog.maxPoints);

        if (fullName.toLowerCase().includes(searchString.toLowerCase())) {
          if (searchDialog.available && !available) {
            return a;
          }

          if (
            searchDialog.minPoints !== "" &&
            searchDialog.maxPoints !== "" &&
            !isBetween
          ) {
            return a;
          }

          a.push(user);
        }
        return a;
      }, []);
    }
  }
);

export default {
  getUsers,
  getUsersList,
  getDialog,
  getSearchDialog
};
