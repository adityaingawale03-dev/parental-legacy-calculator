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
              data.map((item) => (
                <tr
                  key={item.factor}
                  className="border-t"
                >
                  <td className="p-3">{item.factor}</td>
                  <td className="p-3 text-center">
                    {item.mother}
                  </td>
                  <td className="p-3 text-center">
                    {item.father}
                  </td>
                  <td className="p-3 text-center">
                    {item.total}
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