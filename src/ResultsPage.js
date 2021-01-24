import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "./Card";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ResultPage.css";

function ResultsPage() {
  const [url, setUrl] = useState("");
  const location = useLocation();

  const [cardData, setData] = useState([{}]);

  useEffect(() => {
    setUrl(
      typeof location.data.url !== "undefined"
        ? location.data.url
        : localStorage.getItem("key")
    );
    localStorage.setItem("key", JSON.stringify(url));
    let getData = async (url) => {
      let value = await axios.get(url);
      setData(value.data);
    };
    getData(url);

    console.log(cardData);
  });

  return (
    <div>
      <Navbar />
      <div className="flex__grid">
        {typeof cardData.hits !== "undefined" &&
          cardData.hits.map((el, index) => {
            if (index <= 4) {
              return (
                <div className="flex__spacing">
                  <a href={el.recipe.url}>
                    <Card
                      img={el.recipe.image}
                      title={el.recipe.label}
                      value={el.recipe.url}
                      key={el.recipe.label}
                    />
                  </a>
                </div>
              );
            }
          })}
      </div>

      <div className="flex__grid">
        {typeof cardData.hits !== "undefined" &&
          cardData.hits.map((el, index) => {
            if (index >= 5) {
              return (
                <div className="flex__spacing">
                  <a href={el.recipe.url}>
                    <Card
                      img={el.recipe.image}
                      title={el.recipe.label}
                      value={el.recipe.url}
                      key={el.recipe.label}
                    />
                  </a>
                </div>
              );
            }
          })}
      </div>
      <div className="pagination__position">
        <Pagination
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
}

export default ResultsPage;
