import React from "react";
import { Content, SideBar } from "../../../components";
import styles from "./styles.module.css";

export default function index() {
  return (
    <section className={`${styles.master} vh-100`}>
      <div className="row no-gutters">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <Content />
        </div>
      </div>
    </section>
  );
}
