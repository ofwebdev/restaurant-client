import React from "react";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";
import { Link } from "react-router-dom";

function MenuCategory({ items, title, img }) {
  console.log(title);
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="text-center mb-12">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuCategory;
