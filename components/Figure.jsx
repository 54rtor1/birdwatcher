import React from 'react';

const Figure = ({ figure, className }) => (
<div style={{ fontFamily: 'monospace', whiteSpace: 'pre', color: 'hsl(177, 100%, 13%)' }} className={`${className}`} >
    {figure.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </div>
);

export default Figure;
