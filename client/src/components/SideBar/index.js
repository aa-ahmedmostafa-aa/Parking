import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import dashboardsSvg from "../../assits/005-dashboards.svg";
import departmentsSvg from "../../assits/department.svg";
import moneyCollectionSvg from "../../assits/020-wallet.svg";
import pricePlanSvg from "../../assits/016-send.svg";
import ticketSvg from "../../assits/009-order.svg";
import usersSvg from "../../assits/customer.svg";
import searchSvg from "../../assits/036-search.svg";
import profile from "../../assits/profile.jpeg";
import logo from "../../assits/logo.png";

export default function index() {
  return (
    <div className={styles.sideBar}>
      <div className={`${styles.logo}`}>
        <img src={logo} alt="logo" width="250px" height="200px" />
      </div>

      <ul class={styles.SideBarGroup}>
        <li class={styles.SideBarItem}>
          <NavLink className={styles.SideBarItemlink} to="/dashboard">
            <div className={styles.SideBarItemlinkSvg}>
              <img
                src={dashboardsSvg}
                alt="dashboardSvg"
                width="23"
                height="23"
              />
            </div>
            <div className={styles.SideBarText}>Dashboard</div>
          </NavLink>
        </li>
        <li class={styles.SideBarItem}>
          <NavLink className={styles.SideBarItemlink} to="/pricePlan">
            <div className={styles.SideBarItemlinkSvg}>
              <img
                src={pricePlanSvg}
                alt="dashboardSvg"
                width="23"
                height="23"
              />
            </div>
            <div className={styles.SideBarText}>PricePlan</div>
          </NavLink>
        </li>
        <li class={styles.SideBarItem}>
          <NavLink className={styles.SideBarItemlink} to="/tickets">
            <div>
              <img
                className={styles.SideBarItemlinkSvg}
                src={ticketSvg}
                alt="dashboardSvg"
                width="23"
                height="23"
              />
            </div>
            <div className={styles.SideBarText}>Tickets</div>
          </NavLink>
        </li>
        <li class={styles.SideBarItem}>
          <NavLink className={styles.SideBarItemlink} to="/moneyCollection">
            <div className={styles.SideBarItemlinkSvg}>
              <img
                src={moneyCollectionSvg}
                alt="dashboardSvg"
                width="23"
                height="23"
              />
            </div>
            <div className={styles.SideBarText}>MoneyCollection</div>
          </NavLink>
        </li>

        <li class={styles.SideBarItem}>
          <NavLink className={styles.SideBarItemlink} to="/users">
            <div>
              <img
                className={styles.SideBarItemlinkSvg}
                src={usersSvg}
                alt="dashboardSvg"
                width="23"
                height="23"
              />
            </div>
            <div className={styles.SideBarText}>Users</div>
          </NavLink>
        </li>
        <li class={styles.SideBarItem}>
          <NavLink className={styles.SideBarItemlink} to="/departments">
            <div className={styles.SideBarItemlinkSvg}>
              <img
                src={departmentsSvg}
                alt="dashboardSvg"
                width="23"
                height="23"
              />
            </div>
            <div className={styles.SideBarText}>Departments</div>
          </NavLink>
        </li>

        <li class={styles.SideBarItem}>
          <NavLink className={styles.SideBarItemlink} to="/search">
            <div>
              <img
                className={styles.SideBarItemlinkSvg}
                src={searchSvg}
                alt="dashboardSvg"
                width="23"
                height="23"
              />
            </div>
            <div className={styles.SideBarText}>Search</div>
          </NavLink>
        </li>
      </ul>
      <div className={styles.sideBarLine}></div>

      <div className={styles.sideBarFooter}>
        <div>
          <img
            className={styles.sideBarFooterImage}
            src={profile}
            alt="img"
          ></img>
        </div>
        <div className={styles.sideBarFooterName}>Mohamed</div>
      </div>
    </div>
  );
}
