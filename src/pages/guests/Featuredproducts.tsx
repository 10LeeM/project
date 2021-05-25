import React, { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendReq } from "../../api/api";
import { IProduct } from "../../models/product";
import paths from "../../routes/paths";
import { addToCart } from "../../store/slices/cartSlice";

import "./featureddoctors.css";

const Featuredproducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useQuery(
    "Get products",
    async () =>
      await sendReq<IProduct[]>({
        endpoint: "/pharmacy-products",
        method: "GET",
      }),
    {
      onSuccess(data) {
        setProducts(data);
      },
    }
  );

  return (
    <div className="product">
      <div className="small-container">
        <div className="row row-2">
          <h2 className="title">Featured Products</h2>
          <a href="/pharmacyhome">
            <p className="view">View All</p>
          </a>
        </div>
        <div className="row">
          {products.map((product) => {
            const { id, name, currentPrice } = product;
            return (
              <div className="col-4" key={id}>
                <div>
                  <Link to={paths.productview.replace(":id", id)}>
                    <img src="/image/home.jpg" alt="" />
                    <h6>{name}</h6>
                  </Link>
                </div>
                <p>{currentPrice}/=</p>
                <span
                  onClick={() => dispatch(addToCart(product))}
                  className="btn"
                >
                  Add Cart
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featuredproducts;
