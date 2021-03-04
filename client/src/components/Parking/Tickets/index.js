import React, { useState } from "react";
import styles from "./styles.module.css";
import searchSvg from "../../../assits/036-searchTicket.svg";
import { ClosedTickets, OpenTickets } from "../..";

export default function Index() {
  const [opentTickets, setOpentTickets] = useState(true);
  const handleTogellTickets = () => {
    setOpentTickets(!opentTickets);
  };

  return (
    <div className={styles.Tickets}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className={styles.TicketsHeaders}>
            <div className={styles.TicketsHeadersLeft}>Tickets</div>

            <div className={styles.TicketsHeadersRight}>
              <div
                onClick={handleTogellTickets}
                className={styles.TicketsHeadersOpenTickets}
              >
                <div
                  className={
                    opentTickets
                      ? styles.TicketsHeadersClosedTickets
                      : styles.TicketsHeadersOpenTicketsLeft
                  }
                >
                  Open Tickets
                </div>
                <div
                  className={
                    opentTickets
                      ? styles.TicketsHeadersOpenTicketsLeft
                      : styles.TicketsHeadersClosedTickets
                  }
                >
                  Closed Tickets
                </div>
              </div>

              <div className={styles.TicketsHeadersSearch}>
                <div className={styles.SearchParent}>
                  <input
                    className={styles.TicketsHeadersSearchInput}
                    rows="1"
                    placeholder="Search ...."
                  ></input>
                  <div className={styles.SideBarItemlinkSearchSvg}>
                    <img
                      src={searchSvg}
                      alt="dashboardSvg"
                      width="23"
                      height="23"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {opentTickets ? <OpenTickets /> : <ClosedTickets />}
      
    </div>
  );
}
