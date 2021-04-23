import React from 'react';
import "./cart.css";


const Cart = () => {
 

    return (
        
      <div className="small-container cart-page">
          <table >
              <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Sub Total</th>
              </tr>
              <tr>
                  <td>
                      <div className="cart-info">
                      <img src="image/home.jpg"  alt="" />
                      <div>
                          <p>Panadol</p>
                          <small>Price: 100.00</small>
                          <br/>
                          <br/>
                        
                          <a href="/"><i className="fa fa-trash"></i>Remove</a>
                      </div>
                      </div>
                  </td>
                  <td> <input type="number" defaultValue={1} /></td>
                  <td>500.00</td>
              </tr>
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
          <a href ="/" className="btn">Checkout</a>
      </div>
      
      
    );
  };
  
  export default Cart;