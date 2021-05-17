import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, remove, setQuantity } from "../../../store/slices/cartSlice";
import "./cart.css";

const Cart = () => {
  const cart = useSelector(getCart);
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
                      <div>{prod.name}</div>
                      <small>Price: {prod.currentPrice}</small>
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
                <td>
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
                <td>{prod.num * parseFloat(prod.currentPrice)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>100</td>
          </tr>
        </table>
      </div>
      <a href="/" className="btn">
        Checkout
      </a>
    </div>
  );
};

export default Cart;
