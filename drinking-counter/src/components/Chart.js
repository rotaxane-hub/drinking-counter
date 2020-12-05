import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import Title from './Title';
import moment from 'moment';

// Generate Sales Data
function createData(time, count) {
  return { time, count };
}

const data = [
  createData('2020/12/1', 0),
  createData('2020/12/2', 2),
  createData('2020/12/3', 3),
  createData('2020/12/4', 5),
  createData('2020/12/5', 0),
  createData('2020/12/6', 0),
  createData('2020/12/7', 0),
  createData('2020/12/8', 0),
  createData('2020/12/9', 0),
  createData('2020/12/10', 0),
  createData('2020/12/11', 0),
  createData('2020/12/12', 0),
  createData('2020/12/13', 0),
  createData('2020/12/14', 0),
  createData('2020/12/15', 0),
  createData('2020/12/16', 0),
  createData('2020/12/17', 0),
  createData('2020/12/18', 0),
  createData('2020/12/19', 0),
  createData('2020/12/20', 0),
  createData('2020/12/21', 0),
  createData('2020/12/22', 0),
  createData('2020/12/23', 0),
  createData('2020/12/24', 0),
  createData('2020/12/25', 0),
  createData('2020/12/26', 0),
  createData('2020/12/27', 0),
  createData('2020/12/28', 0),
  createData('2020/12/29', 0),
  createData('2020/12/30', 0),
  createData('2020/12/31', 0),
];

// createData('2020/11/1', 0),
// createData('2020/11/2', 0),
// createData('2020/11/3', 0),
// createData('2020/11/4', 0),
// createData('2020/11/5', 0),
// createData('2020/11/6', 0),
// createData('2020/11/7', 0),
// createData('2020/11/8', 0),
// createData('2020/11/9', 0),
// createData('2020/11/10', 0),
// createData('2020/11/11', 0),
// createData('2020/11/12', 0),
// createData('2020/11/13', 0),
// createData('2020/11/14', 0),
// createData('2020/11/16', 0),
// createData('2020/11/17', 0),
// createData('2020/11/18', 0),
// createData('2020/11/19', 0),
// createData('2020/11/20', 0),
// createData('2020/11/21', 8),
// createData('2020/11/22', 0),
// createData('2020/11/23', 4),
// createData('2020/11/24', 2),
// createData('2020/11/25', 0),
// createData('2020/11/26', 0),
// createData('2020/11/27', 0),
// createData('2020/11/28', 5),
// createData('2020/11/29', 0),
// createData('2020/11/30', 0),

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Current Month</Title>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Count of drinks
            </Label>
          </YAxis>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <Tooltip labelFormatter={(props) => moment(props).format('YYYY/MM/DD(ddd)')} />
          <Bar dataKey="count" fill="#429dcf" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
