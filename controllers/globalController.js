import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "홈" });
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원 가입" });
};

export const postJoin = (req, res) => {};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = (req, res) => {};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
