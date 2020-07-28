import { home } from "../db";

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "검색 결과", searchingBy, home });
};

export const searchDetail = (req, res) => {};
