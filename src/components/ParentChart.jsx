import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

function ParentChart({ data }) {
    console.log(data)
  if (!data) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Parent Comparison
      </h2>

      <div className="bg-white rounded-xl shadow p-4 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="factor" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="mother"
              fill="#6366F1"
              name="Mother"
            />

            <Bar
              dataKey="father"
              fill="#EC4899"
              name="Father"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ParentChart;