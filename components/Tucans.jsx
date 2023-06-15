import Figure from './Figure';

const Tucans = () => {
  const figure = [
    '                            _..._',
    '                            \\_.._ `\'-.,--,',
    '                             \'-._\'-.  `\\a\\\\',
    '                                 \'. `_.\' (|',
    '                                   `7    ||',
    '                                   /   .\' |',
    '                                  /_.-\'  ,J',
    '                                 /         \\',
    '                                ||   /      ;',
    '                     _..        ||  |       |  /`\\.-.',
    '                   .\' _ `\\      `\\  \\       |  \\_/__/',
    '                  /  /e)-,\\       \'. \\      /.-` .\'\\',
    '                 /  |  ,_ |        /\\ `;_.-\'_.-\'`\\_/',
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

  return <Figure figure={figure} />;
};

export default Tucans;