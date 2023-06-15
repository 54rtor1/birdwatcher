import Figure from './Figure';

const Tucans = ({className}) => {
  const figure = [
    '                            _..._',
    '                             \\_.._ `\'-.,--,',
    '       :¨·.·¨:                \'-._\'-.  `\\O\\\\',
    '       `·..·‘                     \'. `_.\' (|',
    '                                   `7    ||',
    '             ⋆⁺₊⋆                  /   .\' |',
    '           °｡         ✦           /_.-\'  ,J',
    '       ⋆⁺₊⋆                      /         \\',
    '                                ||   /      ;',
    '                     _..        ||  |       |  /`\\.-.',
    '        ◌            .\' \\      `\\  \\       |  \\_/__/',
    '                  /  /O)-,\\       \'. \\      /.-` .\'\\',
    '                 /  |  ,_  |        /\\ `;_.-\'_.-\'`\\_/',
    '                /   \'-(-.)/        \\_;(((_.-;',
    '              .\'--.   \\  `       .(((_,;`\'.  \\',
    '             /    `\\   |   _.--\'`__.\'  `\\  \'-;\\',
    '           /`       |  /.-\'  .--\'        \'.\'.\\\\',
    '         .\'        ;  /__.-\'`             |  \\ |',
    '       .\'`-\'_     /_.\')))                  \\_\\,_/',
    '      / -\'_.\'---;`\'-)))',
    '     (__.\'/   /` .\'`',
    '      (_.\'/ /` /`',
    '        _|.\' /`',
    '     .-` __.\'|',
    '      .-\'||  |',
    '         \\_`/',
    '           `'
  ];



  return <Figure figure={figure} className={className} />;
};

export default Tucans;
