import React from 'react';
import styles from './Header.module.css';
import Birds from './Birds';
import Chicken from './Chicken';
import BirdOnTree from './BirdOnTree';
import BirdWithFlowers from './BirdWithFlowers';
import Tucans from './Tucans';
import FlyingBirds from './FlyingBirds';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="card">
      <div className={classNames(styles.asciiContainer, 'overflow-hidden')}>
          <div className="flex">
            <div className="flex">
              <Tucans className="font-light" />
            <div className="flex justify-content-center">
              <Birds className="font-light" />
            </div>
            </div>
            <div className="flex vertical-align-top justify-content-center">
              <BirdWithFlowers className="font-light" />
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
