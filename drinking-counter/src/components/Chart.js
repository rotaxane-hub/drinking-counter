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
  createData('2020/11/1', 0),
  createData('2020/11/2', 0),
  createData('2020/11/3', 0),
  createData('2020/11/4', 0),
  createData('2020/11/5', 0),
  createData('2020/11/6', 0),
  createData('2020/11/7', 0),
  createData('2020/11/8', 0),
  createData('2020/11/9', 0),
  createData('2020/11/10', 0),
  createData('2020/11/11', 0),
  createData('2020/11/12', 0),
  createData('2020/11/13', 0),
  createData('2020/11/14', 0),
  createData('2020/11/16', 0),
  createData('2020/11/17', 0),
  createData('2020/11/18', 0),
  createData('2020/11/19', 0),
  createData('2020/11/20', 0),
  createData('2020/11/21', 8),
  createData('2020/11/22', 0),
  createData('2020/11/23', 0),
  createData('2020/11/24', 0),
  createData('2020/11/25', 0),
  createData('2020/11/26', 0),
  createData('2020/11/27', 0),
  createData('2020/11/28', 0),
  createData('2020/11/29', 0),
  createData('2020/11/30', 0),
];

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
