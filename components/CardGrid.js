import React from 'react';
import { Card } from 'primereact/card';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';

const CardGrid = ({ news }) => {
  const itemTemplate = (item) => {
    return (
      <Card title={item.title}>
        <div className="p-grid p-nogutter">
          <div className="p-col-12">{item.id}</div>
        </div>
      </Card>
    );
  };

  return (
    <div>
      <h1>Card Grid</h1>
      <DataView
        value={news}
        itemTemplate={itemTemplate}
        layout="grid"
        rows={5}
        paginator
      />
    </div>
  );
};

export default CardGrid;
