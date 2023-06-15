import React from 'react';
import styles from './Header.module.css';
import Figure from './Figure';

const Header = () => {
  return (
      <div className={styles.header}>
        <div className={styles.asciiContainer}>
          <Figure />
        </div>
      </div>
  );
};

export default Header;
