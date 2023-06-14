import React from 'react';
import { Card } from 'primereact/card';
import { DataView } from 'primereact/dataview';
import Link from 'next/link';
import classNames from 'classnames';




const CardGrid = ({ news }) => {
  const itemTemplate = (item) => {


    return (
      <div
        className="p-col-12 p-sm-6 p-md-4 p-lg-3"
        style={{
          marginBottom: '1rem',
          width: '100%',
          maxWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
         <Link href="/[id]" as={`/${item.id}`} passHref>
          <Card
            title={item.title}
            className={classNames('card-equal-height', 'p-m-auto')}
            style={{
              flexGrow: 1,
            }}
          >
            <div style={{ textAlign: 'center' }}>{item.id}</div>
          </Card>
         </Link>
      </div>
    );
  };

  return (
    <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '100vh' }}>
      <div>
        <h1>Card Grid</h1>
        <div className="p-grid">
          <DataView
            value={news}
            itemTemplate={itemTemplate}
            layout="grid"
            rows={20}
            paginator
          />
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
