import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "MODLE-궁금한 부동산 가격?";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
