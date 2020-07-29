import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "홈" });
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원 가입" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, nickname, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    //////<---사용자 등록 & 로그인 기능--->
    res.redirect(routes.home);
  }
  res.render("join", { pageTitle: "회원 가입" });
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;
  res.render("login", { pageTitle: "로그인" });
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
