import React from 'react';
import { Card } from 'primereact/card';

const CardGrid = ({ news }) => {
  return (
    <div className="card-grid">
      {news.map((item) => (
        <Card key={item.id} title={item.title}>
          <div className="card-content">{item.content}</div>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
