import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
      {name: 'Shoes', Sold: 200, Total: 32000},
      {name: 'Sunglasses', Sold: 19,Total: 6517},
      {name: 'T-Shirts', Sold: 42, Total: 2101},
      {name: 'Electronics', Sold: 28, Total: 42811}
];


class WeeklySalesChart extends Component {

	render () {
        return (
            <div className="box">
            <div className="title">Best Selling</div>
            <ResponsiveContainer width='100%' aspect={4.0/3.0}>
            <LineChart width={400} height={200} data={data} 
                    margin={{top: 15, right: 45, left: 0, bottom: 5}}>
            <XAxis tick={{ fill: '#fff' }} dataKey="name"/>
            <YAxis tick={{ fill: '#fff' }}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="Sold" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
            </div>
        );
  }

}

export default WeeklySalesChart;