import routes from "../routes";

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "검색 결과", searchingBy });
};

export const searchDetail = (req, res) => {};
