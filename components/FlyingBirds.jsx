import Figure from './Figure';

const FlyingBirds = ({className}) => {
  const figure = [
    '                                           _',
    '                                              ~\\\\_',
    '                                                \\\\\\\\',
    '                                                `\\\\\\\\\\',
    '                         |                       |\\\\\\\\\\',
    '          \\_            /;                        \\\\\\\\|__.--~~\\',
    '          `\\\\~--.._     //\'                     _--~            /',
    '           `//////\\\\  \\\/;\'                   /~ //////  _-~~~~\'',
    '             ~//////\\~\\`)\'                   (\'-//////-//',
    '                 `~\'  |                      //////(((-)',
    '                 ;\'_\'\\                    /////"',
    '                /~/ \'" "\'               _///"                 ',
    '               `\\/\'                    ~',
  ];

  return <Figure figure={figure} className={className}  />;
};

export default FlyingBirds;
