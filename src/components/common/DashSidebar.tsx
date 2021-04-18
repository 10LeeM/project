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
  AccountBalanceWallet,
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
    icon: <AccountBalanceWallet />,
    path: paths.common.ewallet,
    title: "E Wallet",
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
    icon: <AccountBalanceWallet />,
    path: paths.common.ewallet,
    title: "E Wallet",
  },

  {
    icon: <MessageOutlined />,
    path: paths.common.history,
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
    icon: <AccountBalanceWallet />,
    path: paths.common.ewallet,
    title: "E Wallet",
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
    icon: <AccountBalanceWallet />,
    path: paths.admin.ewallet,
    title: "E Wallet",
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

// const DashSidebar = () => {
//   return (
//     <>
//       <div>
//         <nav className="sidebar sidebar-offcanvas" id="sidebar">
//           <ul className="nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/pharmacydash">
//                 <i className="mdi mdi-home menu-icon" />
//                 <span className="menu-title">Dashboard</span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/product">
//                 <i className="mdi mdi-shopping menu-icon" />
//                 <span className="menu-title">Product</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/addproduct">
//                 <i className="mdi mdi-plus-circle menu-icon" />
//                 <span className="menu-title">Add Product</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/orders">
//                 <i className="mdi mdi-package-variant menu-icon" />
//                 <span className="menu-title">Orders</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/completed">
//                 <i className="mdi mdi-emoticon menu-icon" />
//                 <span className="menu-title">Completed</span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/earn">
//                 <i className="mdi mdi-wallet menu-icon" />
//                 <span className="menu-title">Earning</span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/canceled">
//                 <i className="mdi mdi-heart-broken menu-icon" />
//                 <span className="menu-title">Canceled</span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/pharmusermanager">
//                 <i className="mdi mdi-file-document-box-outline menu-icon" />
//                 <span className="menu-title">User Manager</span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/pharmsetting">
//                 <i className="mdi mdi-wrench menu-icon" />
//                 <span className="menu-title">Setting</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default DashSidebar;
