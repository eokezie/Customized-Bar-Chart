import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "SDFWAMCO", amt: 6000 },
  { name: "SDPURLERE", amt: 5000 },
  { name: "SDNDEP", amt: 4000 },
  { name: "SDNIPCOPLC", amt: 3080 },
  { name: "SDUBNPROP", amt: 2000 },
];

const colors = ["#1D4E89", "#00B2CA", "#7DCFB6", "#FBD1A2", "#F79256"];

const App = () => {
  return (
    <div style={{ width: "500px", paddingLeft: "20px" }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" hide={true} />
          <YAxis
            width={150}
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            style={{ textAnchor: "start" }}
            tick={{ dx: -120 }}
          />
          {/* <Tooltip /> */}
          <Bar dataKey="amt" barSize={50} radius={[10, 10, 10, 10]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <style>
        {`
          .recharts-y-axis .recharts-text {
            transform: rotate(180deg);
            transform-origin: center;
          }
        `}
      </style>
    </div>
  );
};

export default App;
