function Summary({
  motherTotal,
  fatherTotal,
  grandTotal,
  dominantParent,
}) {
  if (!motherTotal) return null;

  return (
    <div className="bg-indigo-50 rounded-xl p-6 shadow-md">

      <h2 className="text-2xl font-bold mb-6">
        Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Mother Total</span>
          <span className="font-semibold">
            {motherTotal.toFixed(3)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Father Total</span>
          <span className="font-semibold">
            {fatherTotal.toFixed(3)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Grand Total</span>
          <span className="font-bold">
            {grandTotal.toFixed(3)}
          </span>
        </div>

      </div>

      <div className="mt-6">

        <span className="font-semibold">
          Dominant Parent :
        </span>

        <span
          className={`ml-3 px-3 py-1 rounded-full text-white font-medium ${
            dominantParent === "Mother"
              ? "bg-pink-500"
              : "bg-indigo-600"
          }`}
        >
          {dominantParent}
        </span>

      </div>

    </div>
  );
}

export default Summary;