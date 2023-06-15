import React from 'react';

const Figure = ({ figure }) => (
  <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
    {figure.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </div>
);

export default Figure;
