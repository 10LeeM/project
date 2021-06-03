import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import paths from "../../../routes/paths";
import {
  getCart,
  getTotal,
  remove,
  setQuantity,
} from "../../../store/slices/cartSlice";
import "./cart.css";

const Cart = () => {
  const cart = useSelector(getCart);
  const total = useSelector(getTotal);
  let tax = 100;
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="small-container cart-page">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod, i) => {
            return (
              <tr key={i}>
                <td>
                  <div className="cart-info">
                    <img src="image/home.jpg" alt="" />
                    <div>
                      <div className="product-name">{prod.name}</div>
                      <small>Price: {prod.currentPrice}</small >
                      <br />

                      <span
                        onClick={(e) => {
                          dispatch(remove(prod));
                        }}
                      >
                        <i className="fa fa-trash"></i>Remove
                      </span>
                    </div>
                  </div>
                </td>
                <td className="toinput">
                  <input
                    type="number"
                    onChange={(e) => {
                      let quantity = parseInt(e.target.value);
                      const { id } = prod;

                      dispatch(setQuantity({ id, quantity }));
                    }}
                    defaultValue={1}
                    value={prod.num}
                  />
                </td>
                <td className="currentprice">{prod.num * parseFloat(prod.currentPrice)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>{tax}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{total + tax}</td>
          </tr>
        </table>
      </div>
      <Link
        to={pathname === paths.cart ? paths.checkout : paths.patient.checkout}
        className="btn"
      >
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
