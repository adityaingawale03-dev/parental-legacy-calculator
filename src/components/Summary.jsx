function Summary({
  motherTotal,
  fatherTotal,
  grandTotal,
  dominantParent,
}) {
  if (!motherTotal) return null;

  return (
    <div className="bg-indigo-50 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Summary
      </h2>

      <p>Mother Total : {motherTotal}</p>

      <p>Father Total : {fatherTotal}</p>

      <p>Grand Total : {grandTotal}</p>

      <p className="mt-4 font-bold text-indigo-700">
        Dominant Parent : {dominantParent}
      </p>
    </div>
  );
}

export default Summary;