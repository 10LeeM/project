import React, { useEffect, ReactElement, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { getRole } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import paths from "../../routes/paths";
import {
  GroupOutlined,
  HistoryOutlined,
  MessageOutlined,
  ShoppingBasket,
  Event,
  AccessibilityNew,
} from "@material-ui/icons";

type TLink = {
  icon: ReactElement;
  title: string;
  path: string;
};

const patient: TLink[] = [
  {
    icon: <DashboardIcon />,
    path: paths.dashboard,
    title: "Dashboard",
  },
  {
    icon: <AccessibilityNew />,
    path: paths.patient.vitals,
    title: "Vitals",
  },
  {
    icon: <LocalHospitalIcon />,
    path: paths.doctors,
    title: "Doctors",
  },
  {
    icon: <Event />,
    path: paths.common.appointments,
    title: "Appointments",
  },
  {
    icon: <ShoppingBasket />,
    path: paths.common.products,
    title: "Products",
  },
  {
    icon: <ShoppingCartIcon />,
    path: paths.patient.orders,
    title: "Orders",
  },

  {
    icon: <HistoryOutlined />,
    path: paths.common.history,
    title: "History",
  },
  {
    icon: <MessageOutlined />,
    path: paths.common.messages,
    title: "Messages",
  },
];

const pharmacy: TLink[] = [
  {
    icon: <DashboardIcon />,
    path: paths.dashboard,
    title: "Dashboard",
  },
  {
    icon: <ShoppingBasket />,
    path: paths.admin.products,
    title: "Products",
  },
  {
    icon: <ShoppingCartIcon />,
    path: paths.patient.orders,
    title: "Orders",
  },

  {
    icon: <MessageOutlined />,
    path: paths.common.messages,
    title: "Messages",
  },
];

const doctors: TLink[] = [
  {
    icon: <DashboardIcon />,
    path: paths.dashboard,
    title: "Dashboard",
  },
  {
    icon: <ShoppingCartIcon />,
    path: paths.doctor.patients,
    title: "Patients",
  },
  {
    icon: <Event />,
    path: paths.common.appointments,
    title: "Appointments",
  },
  {
    icon: <ShoppingCartIcon />,
    path: paths.patient.orders,
    title: "Orders",
  },

  {
    icon: <HistoryOutlined />,
    path: paths.common.history,
    title: "History",
  },
  {
    icon: <MessageOutlined />,
    path: paths.common.history,
    title: "Messages",
  },
];

const admin: TLink[] = [
  {
    icon: <DashboardIcon />,
    path: paths.dashboard,
    title: "Dashboard",
  },
  {
    icon: <LocalHospitalIcon />,
    path: paths.admin.doctors,
    title: "Doctors",
  },
  {
    icon: <GroupOutlined />,
    path: paths.admin.patients,
    title: "Patients",
  },
  {
    icon: <ShoppingBasket />,
    path: paths.admin.products,
    title: "Products",
  },
  {
    icon: <ShoppingCartIcon />,
    path: paths.admin.orders,
    title: "Orders",
  },

  {
    icon: <HistoryOutlined />,
    path: paths.admin.history,
    title: "History",
  },
  {
    icon: <MessageOutlined />,
    path: paths.admin.messages,
    title: "Messages",
  },
];

export const DashSideBar = () => {
  const role = useSelector(getRole);

  const { pathname } = useLocation();

  const h = useHistory();
  const [links, setLinks] = useState<TLink[]>([]);

  useEffect(() => {
    if (role === "admin") {
      setLinks(admin);
    }

    if (role === "client") {
      setLinks(patient);
    }

    if (role === "doctor") {
      setLinks(doctors);
    }

    if (role === "pharmacy") {
      setLinks(pharmacy);
    }
  }, [role]);

  return (
    <>
      {links &&
        links.map(({ icon, title, path }, i) => {
          return (
            <ListItem
              selected={pathname === path}
              button
              key={i}
              onClick={() => h.push(path)}
            >
              <ListItemIcon>{icon}</ListItemIcon>

              <ListItemText primary={title} />
            </ListItem>
          );
        })}
    </>
  );
};
