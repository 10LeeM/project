import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { sendReq } from "../../../api/api";
import { IPharmacy } from "../../../models/product";
import { useMutation, useQuery } from "react-query";
import { useLoading } from "../../../utils/hooks";
import { MenuItem, TextField } from "@material-ui/core";
import { toast } from "react-toastify";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 8,
      //   boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

type IModal = {
  open: boolean;
  toggle: () => void;
};

type TProduct = {
  id?: string;
  name?: string;
  serialNumber?: string;
  currentPrice?: string;
  pastPrice?: string;
  image?: string;
  description?: string;
  quantity?: string;
  effects?: string;
  pharmacyId?: string;
};

const CustomModal: FC<IModal> = ({ children, open, toggle }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [pharmacies, setPharmacies] = useState<IPharmacy[]>([]);
  const [product, setProduct] = useState<TProduct>({});

  const { mutate: create } = useMutation(
    async (body: TProduct) => {
      return sendReq({
        endpoint: `/pharmacies/${body.pharmacyId}/pharmacy-products`,
        method: "POST",
        auth: true,
        body,
      });
    },
    {
      onSuccess() {
        toast("Product added successfully", { type: "success" });
      },
      onError(err) {
        console.log(err);
        toast("Error adding product", { type: "error" });
      },
    }
  );

  const { isLoading } = useQuery(
    "Get pharmacies",
    async () =>
      await sendReq<IPharmacy[]>({
        endpoint: "/pharmacies",
        method: "GET",
        auth: true,
      }),
    {
      onSuccess(data) {
        setPharmacies(data);
      },
    }
  );

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setProduct({
      ...product,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let p: TProduct = {};

    let pkeys = Object.keys(product);
    pkeys.forEach((key) => {
      // @ts-ignore
      p[key === "undefined" ? "pharmacyId" : key] = product[key];
    });

    p.pastPrice = "0";
    p.image = "-";

    create(p);
  };

  useLoading(isLoading);

  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div>
            <form
              onSubmit={onSubmit}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField onChange={onChange} id="name" label="Name" />
              <TextField
                onChange={onChange}
                id="serialNumber"
                label="Serial Number"
              />
              <TextField onChange={onChange} id="currentPrice" label="Price" />
              <TextField
                onChange={onChange}
                id="description"
                label="Description"
              />
              <TextField onChange={onChange} id="quantity" label="Quantity" />
              <TextField onChange={onChange} id="effects" label="Effects" />
              {/* <TextField onChange={onChange} id="" label="Standard" /> */}
              <TextField
                onChange={onChange}
                select
                id="pharmacyId"
                label="Standard"
                value={product?.pharmacyId || ""}
              >
                {pharmacies?.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <input
                accept="image/*"
                // className={classes.input}
                id="icon-button-photo"
                // onChange={this.handleCapture}
                type="file"
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
