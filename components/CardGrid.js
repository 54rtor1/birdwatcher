import React from 'react';
import { Card } from 'primereact/card';
import { DataView } from 'primereact/dataview';

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
        <Card
          title={item.title}
          className="card-equal-height"
          style={{
            flexGrow: 1,
          }}
        >
          <div style={{ textAlign: 'center' }}>{item.id}</div>
        </Card>
      </div>
    );
  };

  return (
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
  );
};

export default CardGrid;
