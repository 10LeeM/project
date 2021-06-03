import React, { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { sendReq } from "../../../api/api";
import AppLoader from "../../../components/common/AppLoader";
import { IProduct } from "../../../models/product";
import { addToCart } from "../../../store/slices/cartSlice";
import Featuredproducts from "../Featuredproducts";
import Footer from "../Footer";
import "./productview.css";

const ProductView = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();
  const dispatch = useDispatch();

  const { isLoading } = useQuery(
    `Get product with id ${id}`,
    () =>
      sendReq<IProduct>({
        endpoint: `/pharmacy-products/${id}`,
        method: "GET",
      }),
    {
      onSuccess(data) {
        setProduct(data);
      },
    }
  );

  return (
    <div>
      {isLoading && <AppLoader />}
      {product && (
        <div className="row">
          <div className="col-2" >
            <img src="/image/home.jpg" width="100%" alt="" />
            <div className="col2">
              <div className="small-img-row2">
                <div className="small-img-col2">
                  <img src="/image/home.jpg" width="100%" alt="" />
                </div>
                <div className="small-img-col2">
                  <img src="/image/home.jpg" width="100%" alt="" />
                </div>
                <div className="small-img-col2">
                  <img src="/image/home.jpg" width="100%" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <h2>{product.name}</h2>
            <h3>Category</h3>
            <h4>{product.currentPrice}/=</h4>

            <div className="cart">
              <input type="number" defaultValue={1} />
              <span
                onClick={() => dispatch(addToCart(product))}
                className="btn"
              >
                Add Cart
              </span>
            </div>
            <h3>
              Product's Details <i className="fa fa-info"></i>
            </h3>
            <hr />
            <p>
              I specify on consultancy with outstanding result. I enjoy solving
              health challenges and see a health nation.
            </p>
            
            <h3>
              Dosage <i className="fa fa-stethoscope"></i>
            </h3>
            <hr />
            <p>
              I specify on consultancy with outstanding result. I enjoy solving
              health challenges and see a health nation.
            </p>

            <h3>
              Side Effect <i className="fa fa-heartbeat"></i>
            </h3>
            <hr />
            <p>
              I specify on consultancy with outstanding result. I enjoy solving
              health challenges and see a health nation.
            </p>
          </div>
        </div>
      )}
      <div className="small-container single-doctor"></div>
      <Featuredproducts />
      <Footer />
    </div>
  );
};

export default ProductView;
