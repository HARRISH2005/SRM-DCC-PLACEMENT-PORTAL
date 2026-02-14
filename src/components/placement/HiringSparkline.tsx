import { Line, LineChart, ResponsiveContainer } from "recharts";

interface SparklineProps {
  data: { year: string; count: number }[];
}

const HiringSparkline = ({ data }: SparklineProps) => {
  return (
    <div className="h-8 w-20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="count"
            stroke="hsl(var(--chart-line))"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HiringSparkline;
