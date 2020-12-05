import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Drinking Data
function createData(id, dateTime, type, detail, notes) {
  return { id, dateTime, type, detail, notes };
}

const rows = [
  createData(
    28,
    '2020/12/04 21:20',
    'Cocktail',
    'gaelic coffee',
    'Arran PortCaskで作ってくれた。砂糖無しで美味しかった！'
  ),
  createData(
    27,
    '2020/12/04 20:40',
    'Whisky',
    'Kilchoman LochGorm',
    'まあまあ美味しい。軽めのドライなシェリー。ほんの少しタンニンを感じるも、くどくなく飲みやすい。'
  ),
  createData(
    26,
    '2020/12/04 20:00',
    'Whisky',
    'Clynelish 1972 30yo BBR',
    'やばい。どちゃくそ美味しい。美味さの暴力。だが繊細。30年とは思えないほど元気。ちゃんと樽の良さが出ている。加水の加減が良いから、暴力的だけどすっと抜ける上品さもある。洗練された美味さ'
  ),
  createData(
    25,
    '2020/12/04 19:10',
    'Whisky',
    'Scapa 16yo official',
    'さくっと美味しい。ユズスコのせいでちょっと味分からんかった。トマトとベーコンのパスタ美味しかった。ベーコン激厚'
  ),
  createData(24, '2020/12/04 18:20', 'Whisky', 'WhiteWalker Highball', '普通に美味しい'),
  createData(23, '2020/12/03 20:30', 'Whisky', 'Mortlach', '安定'),
  createData(22, '2020/12/03 19:00', 'Wine', '赤　シラー', 'パテうまー牛ほほウマーー'),
  createData(21, '2020/12/03 18:00', 'Wine', '白', 'カウンター系イタリアン'),
  createData(20, '2020/12/02 19:20', 'Wine', '赤', 'ピザうまー'),
  createData(19, '2020/12/02 18:50', 'Beer', '', '久々イタリアン'),
  createData(18, '2020/11/28 23:00', 'Wine', '白', '2杯目'),
  createData(17, '2020/11/28 22:00', 'Wine', '白', 'ちょいピリで良き。桃鉄楽しかった'),
  createData(16, '2020/11/28 21:00', 'Wine', 'Merlot', '2杯目'),
  createData(15, '2020/11/28 20:00', 'Wine', 'Merlot', '百貨店の。美味しかった！'),
  createData(14, '2020/11/28 19:00', 'Beer', 'プレモル缶350ml', 'ふな氏家'),
  createData(
    13,
    '2020/11/24 19:42',
    'Other',
    '発泡酒缶350ml',
    '良きクーポンが手に入って安くチキンパック買えたのだ。チキン4個食べた'
  ),
  createData(
    12,
    '2020/11/24 19:07',
    'Other',
    '発泡酒缶350ml',
    'ケンタの日。チキン大好き。オリジナルチキン美味しい'
  ),
  createData(11, '2020/11/23 22:50', 'Cocktail', 'Cafe Royal', 'irish coffeeのbrandy ver.'),
  createData(
    10,
    '2020/11/23 22:15',
    'Cocktail',
    'martini',
    'LoneWolfGin+NoillyPrat。すごく美味しい!!!カクテルのレベル高し。葉巻沢山'
  ),
  createData(9, '2020/11/23 21:12', 'Cocktail', '葡萄ジュース+sparkling', '軽くて美味しい'),
  createData(8, '2020/11/23 20:30', 'Beer', 'Carlsberg', '神楽坂にんにく美味'),
  createData(7, '2020/11/21 23:00', 'Whisky', '', '何飲んだっけ。飲み過ぎ'),
  createData(6, '2020/11/21 22:20', 'Whisky', 'tomatin', '美味。酔っぱ中'),
  createData(
    5,
    '2020/11/21 21:40',
    'Whisky',
    'WhiteHorse',
    'WhiteHorseって美味しいんだね。酔ってきた'
  ),
  createData(
    4,
    '2020/11/21 21:00',
    'Cocktail',
    'Francis Albert',
    'オールド最高。惚れる。こんなFrancisAlbert初めて'
  ),
  createData(
    3,
    '2020/11/21 20:20',
    'Cocktail',
    'Martini',
    'Old Gordon Gin+新旧Noilly Prat。感動。絶対また飲む'
  ),
  createData(2, '2020/11/21 19:45', 'Whisky', 'TaliskerStormハイボール', 'いつもの美味いやつ'),
  createData(1, '2020/11/21 19:00', 'Sherry', 'フィノ', 'ちょっとドライ'),
  createData(0, '2020/11/21 18:30', 'Cava', '', '1杯目。元気'),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Drinking</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Time</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Detail</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.dateTime}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.detail}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
