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
  createData(0, '2020/11/21 23:00', 'Whisky', '', '何飲んだっけ。飲み過ぎ'),
  createData(0, '2020/11/21 22:20', 'Whisky', 'tomatin', '美味。酔っぱ中'),
  createData(
    0,
    '2020/11/21 21:40',
    'Whisky',
    'WhiteHorse',
    'WhiteHorseって美味しいんだね。酔ってきた'
  ),
  createData(
    0,
    '2020/11/21 21:00',
    'Cocktail',
    'Francis Albert',
    'オールド最高。惚れる。こんなFrancisAlbert初めて'
  ),
  createData(
    0,
    '2020/11/21 20:20',
    'Cocktail',
    'Martini',
    'Old Gordon Gin+新旧Noilly Prat。感動。絶対また飲む'
  ),
  createData(0, '2020/11/21 19:45', 'Whisky', 'TaliskerStormハイボール', 'いつもの美味いやつ'),
  createData(0, '2020/11/21 19:00', 'Sherry', 'フィノ', 'ちょっとドライ'),
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
