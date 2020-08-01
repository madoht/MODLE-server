import express from "express";
import routes from "../routes";
import {
  home,
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controllers/globalController";
import { search, searchDetail } from "../controllers/searchControllerer";
import { user } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.user(), user);
globalRouter.get(routes.searchDetail, searchDetail);

export default globalRouter;
