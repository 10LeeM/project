import React from "react";
import "./dashboard.css";

const Dummy = () => {
  return (
    <div>
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="number">2300</div>
            <div className="cardName">Doctors</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-eye" aria-hidden="true" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="number">2300</div>
            <div className="cardName">Patients</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-users" aria-hidden="true" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="number">2300</div>
            <div className="cardName">Orders</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="number">2300</div>
            <div className="cardName">Income</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-money" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="recentsActivities">
          <div className="cardHeader">
            <h2>Recent Orders</h2>
            <a href="#!" className="btn">
              View All
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mirriam</td>
                <td>mirriam@gmail.com</td>
                <td>070000000</td>
                <td>500/=</td>
                <td>
                  <span className="delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>mirriam@gmail.com</td>
                <td>070000000</td>
                <td>500/=</td>
                <td>
                  <span className="status del">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Doe</td>
                <td>mirriam@gmail.com</td>
                <td>070000000</td>
                <td>500/=</td>
                <td>
                  <span className="delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>Client</td>
                <td>mirriam@gmail.com</td>
                <td>070000000</td>
                <td>500/=</td>
                <td>
                  <span className="status del">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recentsDoctors">
          <div className="cardHeader">
            <h2>Recent Doctors</h2>
          </div>
          <table>
            <tbody>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img alt="" src="image/image.png" />
                  </div>
                </td>
                <td>
                  <h4>
                    David
                    <br />
                    <span>Kiambu</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img alt="" src="image/image.png" />
                  </div>
                </td>
                <td>
                  <h4>
                    David
                    <br />
                    <span>Kiambu</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img alt="" src="image/image.png" />
                  </div>
                </td>
                <td>
                  <h4>
                    David
                    <br />
                    <span>Nairobi</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img alt="" src="image/image.png" />
                  </div>
                </td>
                <td>
                  <h4>
                    David
                    <br />
                    <span>Nairobi</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img alt="" src="image/image.png" />
                  </div>
                </td>
                <td>
                  <h4>
                    David
                    <br />
                    <span>Medic</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img alt="" src="image/image.png" />
                  </div>
                </td>
                <td>
                  <h4>
                    David
                    <br />
                    <span>Medic</span>
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
