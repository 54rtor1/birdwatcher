import Figure from './Figure';

const Chicken = ({className}) => {
  const figure = [
    ',-\'__ `-',
    '{,-\'  `. }              ,\')',
    ',( a )   `-.__         ,\',\')~,',
    '<=.) (         `-.__,==\' \' \'}',
    '(   )                      /',
    ' `-\'\\   ,                  )',
    '     |  \\        `~.      /',
    '     \\   `._        \\    /',
    '      \\     `._____,\'   /',
    '       `-.            ,\'',
    '          `-.      ,-\'',
    '             `~~~~\'',
    '             //_||',
    '          __//--\'/`      ',
    '        ,--\'/`  \'',
    '           \'',
  ];

  return <Figure figure={figure} className={className}/>;
};

export default Chicken;
