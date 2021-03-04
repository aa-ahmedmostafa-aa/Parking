import React, { useState } from "react";
import styles from "./styles.module.css";
import editSvg from "../../../assits/edit.svg";
import deletSvg from "../../../assits/delete.svg";
import { Modal, Button } from "react-bootstrap";

export default function Index() {
  const [show, setShow] = useState(false);


  //for open and close Modal //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.Departments}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className={styles.firstDepartmentSection}>
            <div className={styles.firstDepartmentSectionLeft}>
              <span>Departments</span>
            </div>
            <div>
              <button className={styles.firstDepartmentSectionBtn}>
                Add department
              </button>
            </div>
          </div>
          <div className={styles.DepartmentSecondSection}>
            <div className={styles.DepartemntContent}>
              <table class="table">
                <thead>
                  <tr>
                    <th className={styles.TableTh} scope="col">
                      Department Name
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.TableTROdd}>
                    <td className={styles.TableTdName}>Cars</td>
                    <td className={styles.TableTdDepratmentMangement}>
                      <span className={styles.DepratmentUpdate}>
                        <img
                          src={editSvg}
                          alt="editSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span
                        className={styles.DepratmentDelete}
                        onClick={handleShow}
                      >
                        <img
                          src={deletSvg}
                          alt="deletSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr className={styles.TableTREven}>
                    <td className={styles.TableTdName}>Cars</td>
                    <td className={styles.TableTdDepratmentMangement}>
                      <span className={styles.DepratmentUpdate}>
                        <img
                          src={editSvg}
                          alt="editSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span
                        className={styles.DepratmentDelete}
                        onClick={handleShow}
                      >
                        <img
                          src={deletSvg}
                          alt="deletSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                    </td>
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
              <Modal.Title>Delete Department</Modal.Title>
            </div>
            <div className={styles.DepratmentModalContenet}>
              Are you sure you want to delete THIS Department ?
            </div>
            <Modal.Footer>
              <button className={styles.DepratmentModalDelete} onClick={handleClose}>
                Delete
              </button>
              <button className={styles.DepratmentModalCancel} onClick={handleClose}>
                Cancel
              </button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
    </div>
  );
}
