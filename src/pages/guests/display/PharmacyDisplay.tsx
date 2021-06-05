import React, { useState } from "react";

import Search from "./Search";
import "./display.css";
import Pagination from "./Pagination";
import { IProduct } from "../../../models/product";
import { useQuery } from "react-query";
import { sendReq } from "../../../api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import paths from "../../../routes/paths";
import PatientSlider from "../../slider/PatientSlider";

const PharmacyDisplay = () => {
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
    <div>
      <PatientSlider/>
      <div className="product">
        <div className="small-container" >
          <Search />
          <div className="row">
            {products.map((product) => {
              const { id, name, currentPrice } = product;
              return (
                <div className="col-4" key={id}>
                  <div>
                    <Link to={paths.productview.replace(":id", id)}>
                      <img src="image/home.jpg" alt="" />
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

      <div className="product">
        <div className="small-container">
          <div className="row">
            {products.map((product) => {
              const { id, name, currentPrice } = product;
              return (
                <div className="col-4" key={id}>
                  <div>
                    <Link to={paths.productview.replace(":id", id)}>
                      <img src="image/home.jpg" alt="" />
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
            })}{" "}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default PharmacyDisplay;
