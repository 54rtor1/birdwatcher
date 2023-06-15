import React from 'react';

const generateFigure = () => {
  const figureLines = [
    '             )    ',
    '             \\   )   ',
    '             ()  \\                           )',
    '                 ()                       )  \\',
    '                       .-"""-.            \\  ()',
    '              ____    /  __   `\\     __   ()',
    "           .'`  __'. | o/__\\o   |   / /|",
    '          /  o /__\\o;\\  \\\\//   /_  // /',
    ' ._      _|    \\\\// `-.__.-\'|\\  `;  /',
    '/  \\   .\'  \\-.____.\'|   ||   |/    \\/',
    '`._ \'-/                ||   \'.___./',
    '.  \'-.\\_.-\'      __.\'-._||_.-\' _ /',
    '.`""===(||).___.(||)(||)----\'(||)===...__',
    ' `"jgs"`""=====""""========"""====...__  `""==._',
    '                                       `"=.     `"=.',
    '                                           `"=.',
  ];

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {figureLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

const Figure = () => {
  return generateFigure();
};

export default Figure;
