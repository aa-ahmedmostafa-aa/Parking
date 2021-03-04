import React from "react";
import styles from "./styles.module.css";
import editSvg from "../../../assits/edit.svg";
import deletSvg from "../../../assits/delete.svg";

export default function index() {
  return (
    <div className={styles.PricePlan}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className={styles.firstPricePlanSection}>
            <div className={styles.firstPricePlanSectionLeft}>
              <span>Price Plan</span>
            </div>
            <div>
              <button className={styles.firstPricePlanSectionBtn}>
                Add New Plan
              </button>
            </div>
          </div>

          <div className={styles.PricePlanSecondSection}>
            <div className={styles.PricePlanContent}>
              <table class="table">
                <thead>
                  <tr>
                    <th className={styles.TableTh} scope="col">
                      Plan Name
                    </th>
                    <th className={styles.TableTh} scope="col">
                      First Hour Price
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Second Hour Price
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.TableTROdd}>
                    <td className={styles.TableTdName}>Admin</td>
                    <td className={styles.TableTdName}>20 EGP</td>
                    <td className={styles.TableTdName}>5 EGP</td>
                    <td className={styles.TableTdMoneyCollectionMangement}>
                      <button className={styles.PricePlanMangement}>
                      <span className={styles.PricePlanUpdate}>
                        <img
                          src={editSvg}
                          alt="editSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span className={styles.PricePlanDelete}>
                        <img
                          src={deletSvg}
                          alt="deletSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
