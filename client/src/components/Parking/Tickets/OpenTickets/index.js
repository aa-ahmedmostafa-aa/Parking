import React from "react";
import styles from "./styles.module.css";
import editSvg from "../../../../assits/edit.svg";

export default function index() {
  return (
    <div className={styles.TicketsThirdSection}>
      <div className={styles.TicketsThirdSectionContent}>
        <table class="table">
          <thead>
            <tr>
              <th className={styles.TableTh} scope="col">
                Tickets Id
              </th>
              <th className={styles.TableTh} scope="col">
                Driving License
              </th>
              <th className={styles.TableTh} scope="col">
                Client Type
              </th>
              <th className={styles.TableTh} scope="col">
                Sign In Time
              </th>
              <th className={styles.TableTh} scope="col">
                National Id
              </th>
              <th className={styles.TableTh} scope="col">
                Driving License Photo
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.TableTROdd}>
              <td className={styles.TableTD}>384y78y</td>
              <td className={styles.TableTD}>A B C 123</td>
              <td className={styles.TableTD}>Visitor</td>
              <td className={styles.TableTD}>
                4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
              </td>
              <td className={styles.TableTD}>Photo</td>
              <td className={styles.TableTD}>Photo</td>
              <td className={styles.TdOpentTicketEdit}>
                <span className={styles.TdOpentTicketUpdate}>
                  <img src={editSvg} alt="editSvg" width="16" height="16" />
                </span>
              </td>
            </tr>
            <tr className={styles.TableTREven}>
              <td className={styles.TableTD}>384y78y</td>
              <td className={styles.TableTD}>A B C 123</td>
              <td className={styles.TableTD}>Visitor</td>
              <td className={styles.TableTD}>
                4/10/2020 <div className={styles.TableTDTime}>4:17 pm</div>
              </td>
              <td className={styles.TableTD}>Photo</td>
              <td className={styles.TableTD}>Photo</td>
              <td className={styles.TdOpentTicketEdit}>
                <span className={styles.TdOpentTicketUpdate}>
                  <img src={editSvg} alt="editSvg" width="16" height="16" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
