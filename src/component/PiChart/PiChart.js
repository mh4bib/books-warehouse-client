import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PiChart = () => {

    const data = [
        { name: "Thriller", value: 5 },
        { name: "Classics", value: 2 },
        { name: "Fiction", value: 3 },
        { name: "Poetry", value: 1 },
        { name: "Drama", value: 4 }
    ];

    const COLORS = ["#dfc04c", "green", "blue", "#8e8e8c", "#e00809"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        const item = data[index];

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {item.name}
            </text>
        );
    };

    return (
        <div className='row d-none d-md-flex justify-content-center align-items-center my-5'>
            
        <div className='col-4'><PieChart  width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>
                </div>
                <div className='col-4 text-start'>
                    <h3>A graphical presentation of our stock</h3>
                    <p>Here you will see the exact picture of our enriched book stock <br />
                    We can fulfill your and customers demand</p>
                </div>
                </div>
    );
};

export default PiChart;