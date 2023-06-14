import React from 'react';
import { Card } from 'primereact/card';
import { DataView } from 'primereact/dataview';
import Link from 'next/link';
import styles from './CardGrid.module.css';

const CardGrid = ({ news }) => {
  const itemTemplate = (item) => {
    return (
      <div className={`${styles.cardGridWrapper} p-col-12 p-sm-6 p-md-4 p-lg-3`}>
        <Link href="/[id]" as={`/${item.id}`} passHref>
          <Card className={styles.card}>
            <div className={styles.cardTitle}>{item.title}</div>
            <div className={styles.cardContent}>{item.content}</div>
          </Card>
        </Link>
      </div>
    );
  };

  return (
    <div className={styles.cardGridContainer}>
      <div>
        <h1>Card Grid</h1>
        <div className="p-grid">
          <DataView value={news} itemTemplate={itemTemplate} layout="grid" rows={20} paginator />
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
