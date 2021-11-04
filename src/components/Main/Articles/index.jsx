import React, { useEffect } from "react";
import Article from "./Article";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../../redux/ducks/articles";

function Articles() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const presetText = useSelector((state) => state.searchWord);
  const articles = useSelector((state) =>
    state.articles.filter(
      (article) =>
        article.title.toLowerCase().indexOf(presetText.toLowerCase()) !== -1
    )
  );

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div className="articles">
      {loading
        ? "Идет загрузка ..."
        : articles?.map((article) => {
            return <Article article={article} key={article.id} />;
          })}
    </div>
  );
}

export default Articles;
