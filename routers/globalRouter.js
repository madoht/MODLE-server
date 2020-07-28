import express from "express";
import routes from "../routes";
import {
  home,
  getJoin,
  getLogin,
  logout,
} from "../controllers/globalController";
import { search } from "../controllers/searchControllerer";
import { user } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);

globalRouter.get(routes.login, getLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.user, user);

export default globalRouter;
