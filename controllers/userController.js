import { users } from "../db";

export const user = (req, res) => {
  res.render("user", { pageTitle: "홈", users });
};

export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "회원 정보", users });
};

export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "비밀번호 변경" });
};

export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "프로필 변경" });
};
