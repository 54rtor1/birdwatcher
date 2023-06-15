import Figure from './Figure';

const BirdOnTree = ({ className }) => {
  const figure = [
    '                 _.----._',
    '               ,\'.::.--..:._',
    '              /::/_,-<o)::;_`-._',
    '             ::::::::`-\'\';\',--`-`',
    '             ;::;\';|::::\',\'',
    '           ,\'::/  ;:::/, :.',
    '          /,\':/  /::;\' \\ \':\\',
    '         :\'.:: ,-\'\'   . `.::\\',
    '         \\.:;\':.    `    :: .:',
    '         (;\' ;;;       .::\' :|',
    '          \\,:;;      \\ `::.\\.',
    '          `);\'        \'::\'  `:',
    '           \\.  `        `\'  .:      _,\'',
    '            `.: ..  -. \' :. :/  _.-\' _.-',
    '              >;._.:._.;,-=_(.-\'  __ `._',
    '            ,;\'  _..-((((\'\'  .,-\'\'  `-._',
    '         _,-((((_..--\'\'       \\ \\ `.`.',
    '       -\'  _.``\'               \\      `',
    '     ,\'\'',
  ];

  return <Figure figure={figure} className={className} />;
};

export default BirdOnTree;