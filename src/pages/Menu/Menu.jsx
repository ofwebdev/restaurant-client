import React, { useEffect, useState } from "react";
import { Helmet, HelmetData } from "react-helmet-async";
import Cover from "../Shared/Cover";
import useMenu from "../../hooks/useMenu";

import menuImg from "../../assets/menu/banner3.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

function Menu() {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Hello World</title>
      </Helmet>

      <Cover img={menuImg} title={`Our Title`} />

      <SectionTitle
        subTitle="What Our Client Say"
        title={"Testimonials"}
      ></SectionTitle>

      <MenuCategory items={offered} />
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
}

export default Menu;
