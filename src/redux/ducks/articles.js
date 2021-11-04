const initialState = {
  articles: [],
  loading: false,
  loadWord: "",
  searchWord: "",
};

export function articles(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case ARTICLES_LOAD_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };

    case ARTICLE_REMOVE_START:
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.id === action.payload) {
            return {
              ...article,
              deleting: true,
            };
          }
          return article;
        }),
      };

    case ARTICLE_REMOVE_SUCCESS:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.payload
        ),
      };
    case LOAD_WORD:
      return {
        ...state,
        loadWord: action.payload,
      };
    case SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };

    default:
      return state;
  }
}

const ARTICLES_LOAD_START = "articles/load/start";
const ARTICLES_LOAD_SUCCESS = "articles/load/success";
const ARTICLE_REMOVE_START = "article/remove/start";
const ARTICLE_REMOVE_SUCCESS = "article/remove/success";
const LOAD_WORD = "load/word";
const SEARCH_WORD = "search/word";

export const loadArticles = () => {
  return (dispatch) => {
    dispatch({ type: ARTICLES_LOAD_START });
    fetch("/articles")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: ARTICLES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};

export const removeArticle = (id) => {
  return (dispatch) => {
    dispatch({ type: ARTICLE_REMOVE_START, payload: id });
    fetch(`/articles/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: ARTICLE_REMOVE_SUCCESS,
          payload: id,
        });
      });
  };
};

export const SetWord = (value) => {
  return {
    type: LOAD_WORD,
    payload: value,
  };
};

export const startSearch = (value) => {
  return {
    type: SEARCH_WORD,
    payload: value,
  };
};
