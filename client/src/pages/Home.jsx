import React from "react";
import { Anons } from "../components/Anons";
import { AttractiveMenu } from "../components/AttractiveMenu";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Anons />
      <Navbar />
      <Slider />
      <AttractiveMenu />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
