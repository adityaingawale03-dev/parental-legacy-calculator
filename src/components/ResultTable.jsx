function ResultTable({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Life Factors
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Factor</th>
              <th className="p-3">Mother</th>
              <th className="p-3">Father</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>

          <tbody>
            {!data ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-8"
                >
                  Select your DOB
                </td>
              </tr>
            ) : (
              data.map((item,index) => (
                <tr
                  key={item.factor}
                 className={`border-t transition-colors hover:bg-indigo-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                >
                  <td className="p-3">{item.factor}</td>
                 <td className="p-3 text-center">
                {item.mother.toFixed(3)}
                </td>

                <td className="p-3 text-center">
                {item.father.toFixed(3)}
                </td>

                <td className="p-3 text-center">
                {item.total.toFixed(3)}
                </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultTable;