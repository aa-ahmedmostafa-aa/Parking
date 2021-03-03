import React from "react";
import styles from "./styles.module.css";
import editSvg from "../../../assits/edit.svg";
import deletSvg from "../../../assits/delete.svg";
import downSvg from "../../../assits/down-arrow.svg";

export default function index() {
  return (
    <div className={styles.Users}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className={styles.firstUsersSection}>
            <div className={styles.firstUsersSectionLeft}>
              <span>Users</span>
            </div>
            <div>
              <button className={styles.firstUsersSectionBtn}>Add User</button>
            </div>
          </div>

          <div className={styles.UsersSecondSection}>
            <div className={styles.UsersContent}>
              <table class="table">
                <thead>
                  <tr>
                    <th className={styles.TableTh} scope="col">
                      User Name
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Admin User's Full Name
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Phone Number
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Working
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Permission
                    </th>
                    <th className={styles.TableTh} scope="col">
                      Permission
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.TableTROdd}>
                    <td className={styles.TableTdName}>Aya</td>
                    <td className={styles.TableTD}>Aya Magdy Ibrahim</td>
                    <td className={styles.TableTD}>01067034868</td>
                    <td className={styles.userworking}>
                      <div className={styles.userworkingConent}>
                        <div className={styles.userworkingBall}></div>
                      </div>
                    </td>
                    <td className={styles.TableTD}>5 Permission</td>
                    <td className={styles.TableTD}>
                      <span className={styles.UserUpdate}>
                        <img
                          src={editSvg}
                          alt="editSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span className={styles.UserDelete}>
                        <img
                          src={deletSvg}
                          alt="deletSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span className={styles.UserDetails}>
                        <img
                          src={downSvg}
                          alt="downSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                    </td>
                  </tr>
                  <tr className={styles.TableTREven}>
                    <td className={styles.TableTdName}>Aya</td>
                    <td className={styles.TableTD}>Aya Magdy Ibrahim</td>
                    <td className={styles.TableTD}>01067034868</td>
                    <td className={styles.userworking}>
                      <div className={styles.userNotworkingConent}>
                        <div className={styles.userNotworkingBall}></div>
                      </div>
                    </td>
                    <td className={styles.TableTD}>1 Permission</td>
                    <td className={styles.TableTD}>
                      <span className={styles.UserUpdate}>
                        <img
                          src={editSvg}
                          alt="editSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span className={styles.UserDelete}>
                        <img
                          src={deletSvg}
                          alt="deletSvg"
                          width="16"
                          height="16"
                        />
                      </span>
                      <span className={styles.UserDetails}>
                        <img
                          src={downSvg}
                          alt="downSvg"
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
        </div>
      </div>
    </div>
  );
}
