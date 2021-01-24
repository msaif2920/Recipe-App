import { useEffect, useState } from "react";
import fetchData from "./fetchData";
import Card from "./Card";
import Navbar from "./Navbar";

import "./App.css";

function App() {
  const [chickenRecipe, setChickenRecipe] = useState([{}]);
  const [beefRecipe, setBeefRecipe] = useState([{}]);
  const [seafoodRecipe, setSeafoodRecipe] = useState([{}]);
  const [veganRecipe, setVeganRecipe] = useState([{}]);
  const [vegetarianRecipe, setVegetarianRecipe] = useState([{}]);

  useEffect(() => {
    getData("recommendedbeef", setBeefRecipe);
    getData("recommendedchicken", setChickenRecipe);
    getData("recommendedseafood", setSeafoodRecipe);
    getData("recommendedvegan", setVeganRecipe);
    getData("recommendedvegetarian", setVegetarianRecipe);
    async function getData(collection, refrence) {
      const returnedData = await fetchData(collection);
      refrence(returnedData);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="app__titles">Chicken Recipes</div>
      <div className="app__flex">
        {chickenRecipe.map((el) => {
          return (
            <div id={el.url} onClick={(e) => console.log(e)}>
              <a href={el.url}>
                <Card
                  img={el.image}
                  title={el.label}
                  value={el.url}
                  key={el.label}
                />
              </a>
            </div>
          );
        })}
      </div>

      <div className="app__titles">Vegan Recipes</div>
      <div className="app__flex">
        {veganRecipe.map((el) => {
          return (
            <a href={el.url}>
              <Card
                img={el.image}
                title={el.label}
                value={el.url}
                key={el.label}
              />
            </a>
          );
        })}
      </div>

      <div className="app__titles">Beef Recipes</div>
      <div className="app__flex">
        {beefRecipe.map((el) => {
          return (
            <a href={el.url}>
              <Card
                img={el.image}
                title={el.label}
                value={el.url}
                key={el.label}
              />
            </a>
          );
        })}
      </div>

      <div className="app__titles">Sea Food Recipes</div>
      <div className="app__flex">
        {seafoodRecipe.map((el) => {
          return (
            <a href={el.url}>
              <Card
                img={el.image}
                title={el.label}
                value={el.url}
                key={el.label}
              />
            </a>
          );
        })}
      </div>

      <div className="app__titles">Vegetarian Recipes</div>
      <div className="app__flex">
        {vegetarianRecipe.map((el) => {
          return (
            <a href={el.url}>
              <Card
                img={el.image}
                title={el.label}
                value={el.url}
                key={el.label}
              />
            </a>
          );
        })}
      </div>

      {/* Search Bar Navbar*/}
      {/* Filters with Modal */}
      {/* Recommened Recipes */}
      {/* New Page*/}
      {/* List of Recipes*/}
      {/* Pagination */}
      {/* New Page on click then whole image*/}
    </div>
  );
}

export default App;
