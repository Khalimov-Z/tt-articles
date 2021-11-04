import React from "react";
import { useDispatch } from "react-redux";
import { removeArticle } from "../../../redux/ducks/articles";

function Article({ article }) {
  const dispatch = useDispatch();

  const handleDeleteArticle = (id) => {
    dispatch(removeArticle(id));
  };

  return (
    <div className="article">
      <div className="article__date">
        {new Date(article.date).toDateString()}
      </div>
      <div className="article__title">{article.title}</div>
      <div className="article__button">
        <button
          type="submit"
          className="btn article__btn"
          onClick={() => handleDeleteArticle(article.id)}
          disabled={article.deleting}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Article;
