import React, { useState } from "react";
import styles from "./styles.module.css";
import searchSvg from "../../../assits/036-searchTicket.svg";

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

              <div onClick={handleTogellTickets} className={styles.TicketsHeadersOpenTickets}>
                <div className={ opentTickets ? styles.TicketsHeadersClosedTickets :styles.TicketsHeadersOpenTicketsLeft}>
                  Open Tickets
                </div>
                <div className={opentTickets ? styles.TicketsHeadersOpenTicketsLeft: styles.TicketsHeadersClosedTickets }>
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
      <div className={styles.TicketsSecondSection}>
        <div className="row no-gutters">
          <div className="col-md-2">
            <div className={styles.TicketsTotal}>Total:40 EGB</div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div className={styles.TicketsTotal}>Numbers : 2</div>
          </div>
        </div>
      </div>

      <div className={styles.TicketsThirdSection}>
        <div className={styles.TicketsThirdSectionContent}>
          <table class="table">
            <thead>
              <tr>
                <th className={styles.TableTh} scope="col">
                  Driving license
                </th>
                <th className={styles.TableTh} scope="col">
                  Sign in Time
                </th>
                <th className={styles.TableTh} scope="col">
                  Sign out Time
                </th>
                <th className={styles.TableTh} scope="col">
                  Value
                </th>
                <th className={styles.TableTh} scope="col">
                  Total of Hours
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.TableTROdd}>
                <td className={styles.TableTD}>A B B 123</td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>20 EGP</td>
                <td className={styles.TableTD}>3</td>
              </tr>
              <tr className={styles.TableTREven}>
                <td className={styles.TableTD}>A B B 123</td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>20 EGP</td>
                <td className={styles.TableTD}>3</td>
              </tr>
              <tr className={styles.TableTROdd}>
                <td className={styles.TableTD}>A B B 123</td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>20 EGP</td>
                <td className={styles.TableTD}>3</td>
              </tr>
              <tr className={styles.TableTREven}>
                <td className={styles.TableTD}>A B B 123</td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>
                  4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
                </td>
                <td className={styles.TableTD}>20 EGP</td>
                <td className={styles.TableTD}>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
