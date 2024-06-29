import React, { useState } from "react";
import "./Home.css";
import Header from "../../commponets/Header/Header";
import ExploreMenu from "../../commponets/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../commponets/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
