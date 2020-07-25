import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const getJoin = (req, res) => {
  res.send("It's time to join!");
};

export const postJoin = (req, res) => {};

export const login = (req, res) => {
  res.send("It's login page");
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
