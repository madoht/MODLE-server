//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//User
const USER = "/user";
const USER_DETAIL = "/:id";

//Search Result
const SEARCH_RESULT = "/result";
const SEARCH_DETAIL = "/:id";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  user: USER,
  userDetail: USER_DETAIL,
  searchResult: SEARCH_RESULT,
  searchDetail: SEARCH_DETAIL,
};

export default routes;
