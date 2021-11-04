import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { articles } from "./ducks/articles";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(articles, applyMiddleware(thunk, logger));
