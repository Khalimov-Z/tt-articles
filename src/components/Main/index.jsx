import React from "react";
import SearchArticles from "./SearchArticles";
import Articles from "./Articles";

function Main() {
  return (
    <div className="main">
      <div className="main__body">
        <SearchArticles />
        <Articles />
      </div>
    </div>
  );
}

export default Main;
