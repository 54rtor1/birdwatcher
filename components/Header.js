import React from 'react';
import styles from './Header.module.css';
import Birds from './Birds';
import Chicken from './Chicken';
import Tucans from './Tucans';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={classNames(styles.asciiContainer, 'flex', 'justify-content-between', 'flex-wrap')}>
        <Birds />
        <Chicken />
        <Tucans />
      </div>
    </div>
  );
};

export default Header;
