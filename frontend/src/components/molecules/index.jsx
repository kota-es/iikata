import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const colors = ["#fa8232", "#7cb5ec", "#54c136", "#8884d8"];

const Chart = (props) => {
  return (
    <div className="w-full h-[240px]">
      <ResponsiveContainer>
        <BarChart layout="vertical" data={props.scores}>
          <XAxis type="number" />
          <YAxis dataKey="subject" type="category" width={70} />
          <Bar dataKey="score" barSize={30}>
            {props.scores.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
