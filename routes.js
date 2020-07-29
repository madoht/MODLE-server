//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//User
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Search Result
const SEARCH = "/search";
const SEARCH_DETAIL = "/search/:id";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  user: (id) => {
    if (id) {
      return `/user/${id}`;
    } else {
      return USER;
    }
  },
  userDetail: (id) => {
    if (id) {
      return `/user/${id}/userDetail`;
    } else {
      USER_DETAIL;
    }
  },
  editProfile: (id) => {
    if (id) {
      return `/user/${id}/edit-profile`;
    } else {
      return EDIT_PROFILE;
    }
  },
  changePassword: CHANGE_PASSWORD,
  search: SEARCH,
  searchDetail: SEARCH_DETAIL,
};

export default routes;
