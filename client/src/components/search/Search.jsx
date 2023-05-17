import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Metadata from "../../Rconfig/Metadata";
import './search.scss'

const Search = () => {
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
        navigate(`/collection/${keyword}`);
      } else {
        navigate("/collection");
      }
    };
  return (
    <>
      <Metadata title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;
