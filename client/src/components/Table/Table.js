import React from 'react';
import { MdUpdate, MdDelete } from 'react-icons/md';

import styles from './Table.module.css';

export const Table = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr>
          <th className={styles.table__column__label}>ID</th>
          <th className={styles.table__column__label}>name</th>
          <th className={styles.table__column__label}>description</th>
          <th className={styles.table__column__label}>price</th>
          <th className={styles.table__column__label}>quantity</th>
          <th className={styles.table__column__label}>created</th>
          <th className={styles.table__column__label}>actions</th>
        </tr>
      </thead>
      <tbody className={styles.table__main}>
        <tr>
          <td>1</td>
          <td>Clownfish</td>
          <td>Living in the coral reefs.</td>
          <td>99</td>
          <td>5</td>
          <td>today</td>
          <td>
            <MdUpdate /> Update
            <MdDelete /> Delete
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Clownfish</td>
          <td>Living in the coral reefs.</td>
          <td>99</td>
          <td>5</td>
          <td>today</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Clownfish</td>
          <td>Living in the coral reefs.</td>
          <td>99</td>
          <td>5</td>
          <td>today</td>
        </tr>
      </tbody>
    </table>
  );
};

Table.propTypes = {};
