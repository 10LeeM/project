import { Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { sendReq } from "../../api/api";
import { IProduct } from "../../models/product";
import { addToCart } from "../../store/slices/cartSlice";

const PatientProducts = () => {
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
      <div>
        <h4>Products</h4>
      </div>
      <Grid spacing={2} container>
        {products.map((product) => {
          const { id, name, currentPrice } = product;
          return (
            <Grid item key={id} xs={12} md={6} lg={4} xl={3}>
              <Paper
                style={{
                  padding: "8px",
                }}
              >
                <img
                  style={{ width: "95%", display: "block", margin: "auto" }}
                  src="/image/image.png"
                  alt=""
                />
                <div>
                  <h5>
                    <small>{name.slice(0, 32)}</small>
                  </h5>
                  <small>{currentPrice}</small>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PatientProducts;
