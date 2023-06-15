import React from 'react';
import styles from './Header.module.css';
import Birds from './Birds';
import Chicken from './Chicken';
import BirdOnTree from './BirdOnTree';
import Tucans from './Tucans';
import FlyingBirds from './FlyingBirds';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="card">
      <div className={classNames(styles.asciiContainer, 'card-container', 'overflow-hidden')}>
          <div className="flex">
            <div className="flex mb-3 max-h-8rem">
              <Tucans className="" />
            </div>
            <div className="flex vertical-align-top justify-content-center">
              <FlyingBirds className="text-xs text-left" />
            </div>
            <div className="flex align-items-center justify-content-center">
              <Birds className="text-base"  />
            </div>
            <div className="flex align-items-center justify-content-center">
              <Chicken className="text-xs"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
