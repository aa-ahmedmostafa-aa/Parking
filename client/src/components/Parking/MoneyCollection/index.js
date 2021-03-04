import React, { useState } from "react";
import styles from "./styles.module.css";
import Checked from "../../../assits/Checked.svg";
import notChecked from "../../../assits/notChecked.svg";
import groupDollar from "../../../assits/groupDollar.svg";
import { Modal } from "react-bootstrap";

export default function Index() {
  const [show, setShow] = useState(false);

  //for open and close Modal //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.MoneyCollection}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className={styles.firstMoneyCollectionSection}>
            <div className={styles.firstMoneyCollectionSectionLeft}>
              <span>Money Collection</span>
            </div>
            <div>
              <button className={styles.firstMoneyCollectionSectionBtn}>
                Collecting
              </button>
            </div>
          </div>

          <div className={styles.MoneyCollectionSecondSection}>
            <div className={styles.MoneyCollectionContent}>
              <table class="table">
                <thead>
                  <tr>
                    <th className={styles.TableTh} scope="col">
                      <span className={styles.MoneyCollectionChecked}>
                        <img
                          src={Checked}
                          alt="Checked"
                          width="24"
                          height="24"
                        />
                      </span>
                      Sign in name
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Full name
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Credit
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.TableTROdd}>
                    <td className={styles.TableTdName}>
                      {" "}
                      <span className={styles.MoneyCollectionChecked}>
                        <img
                          src={Checked}
                          alt="Checked"
                          width="24"
                          height="24"
                        />
                      </span>
                      Admin
                    </td>
                    <td className={styles.TableTdName}>Aya Magdy</td>
                    <td className={styles.TableTdName}>20 EGP</td>
                    <td className={styles.TableTdMoneyCollectionMangement}>
                      <button
                        onClick={handleShow}
                        className={styles.MoneyCollectBtn}
                      >
                       <span className={styles.MoneyCollectionChecked}>
                        <img
                          src={groupDollar}
                          alt="groupDollar"
                          width="24"
                          height="24"
                        />
                      </span> collect
                      </button>
                    </td>
                  </tr>
                  <tr className={styles.TableTREven}>
                    <td className={styles.TableTdName}>
                      <span className={styles.MoneyCollectionChecked}>
                        <img
                          src={notChecked}
                          alt="notChecked"
                          width="24"
                          height="24"
                        />
                      </span>
                      Admin
                    </td>
                    <td className={styles.TableTdName}>Aya Magdy</td>
                    <td className={styles.TableTdName}>20 EGP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal  for delete Btn*/}
          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
          >
            <div className={styles.DepratmentModalHeader} closeButton>
              <Modal.Title>Collecting</Modal.Title>
            </div>
            <div className={styles.DepratmentModalContenet}>
              Are you sure you want to collect 100 Egp?
            </div>
            <Modal.Footer>
              <button
                className={styles.DepratmentModalCancel}
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className={styles.DepratmentModalDelete}
                onClick={handleClose}
              >
                Collect
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
